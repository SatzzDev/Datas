const axios = require('axios');
const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom'); 


// Get Spotify Access Token
async function getAccessToken() {
const response = await axios.post(
'https://accounts.spotify.com/api/token',
new URLSearchParams({ grant_type: 'client_credentials' }),
{
headers: {
'Content-Type': 'application/x-www-form-urlencoded',
Authorization:
'Basic ' +
Buffer.from(`1828b3aea19c40ed9e90b36112193784:cfe8aa9e20c24494b3299cf6b35befc7`).toString('base64'),
},
}
);
return response.data.access_token;
}

async function getPlaylistTracks() {
const accessToken = await getAccessToken();
const url = `https://api.spotify.com/v1/playlists/0ZR2RLiSvflTsX6PDQ7DRS/tracks`

try {
const response = await axios.get(url, {
headers: { Authorization: `Bearer BQBVg1dm3HYuL5naKReF42NL7fcOfmt7m9s4JvLzNfAu-o1Ihjmb-6EUid_JMl0S6dEnkwxqMhTRMSsmtqfO_8BHnWNJXPVQ-8a2vlXX1Ut8csl7wyn21nO5vK-kcatR7cSZ_NPVueJsOXOH4IjfYJNHzySivaXQIDU4gKkpl4jIoGUoI2PRXb4ET-3jajHwHx1k5U-X9yzgAUo9wl1iNCzT0FPS5ntiS3rMNy8d19StNszFRGNNwlredkgkUmEzBErR-ZgEGN1FIbCpbFGvItgrqWNBKMZM` },
});

// Extract track URLs
const tracks = response.data.items.map(item => item.track.external_urls.spotify);
return tracks
} catch (error) {
console.error('Error fetching playlist tracks:', error.response.data);
}
}


async function downloadSpotifyTrack(url) {
try {
const response = await axios.get(`https://api.agatz.xyz/api/spotifydl?url=${url}`);
const data = JSON.parse(response.data.data); 
return {
title: data.judul,
url: data.url_audio_v1,
image: data.gambar_kecil[0].url,
channel: data.nama_channel
};
} catch (error) {
console.error('Error downloading track:', error);
return null;
}
}

async function downloadTracks() {
let songr =  await getPlaylistTracks()
//let songr =['https://open.spotify.com/track/0daEJMXc3b4ZMTnvtHpuTt']
const songPromises = songr.map(downloadSpotifyTrack); 
let songs = await Promise.all(songPromises);
songs = songs.filter(song => song !== null); 
if (!fs.existsSync('./songs')) {
fs.mkdirSync('./songs');
}

if (!fs.existsSync('./playlist.json')) {
fs.writeFileSync('./playlist.json', JSON.stringify([])); 
}

const playlist = JSON.parse(fs.readFileSync('./playlist.json', 'utf8'));
for (let song of songs) {
const filePath = path.join(__dirname, 'songs', `${song.title}.mp3`);
try {
const audioResponse = await axios({
method: 'get',
url: song.url,
responseType: 'stream'
});
const writer = fs.createWriteStream(filePath);
audioResponse.data.pipe(writer);
writer.on('finish', async() => {
const url = `https://www.lyricsify.com/lyrics/${song.channel.toLowerCase().replace(/ /g, "-").split(',')[0]}/${song.title.replace(/ /g, "-")}`;
const response = await axios.get(url);
const dom = new JSDOM(response.data);
const lyricsDiv = dom.window.document.querySelector('.main-page div[id^="lyrics_"]');
if (lyricsDiv) {
const lyricsText = lyricsDiv.textContent || lyricsDiv.innerText;
const lirik_convert = parseLrc(lyricsText);  
playlist.push({
title: song.title,
artist: song.channel,
url:`https://raw.githubusercontent.com/SatzzDev/Datas/main/songs/${song.title}.mp3`,
cover: song.image,
lyrics: lirik_convert
});
} else {
console.error("Lyrics not found for song:", song.title);
playlist.push({
title: song.title,
artist: song.channel,
url:`https://raw.githubusercontent.com/SatzzDev/Datas/main/songs/${song.title}.mp3`,
cover: song.image,
lyrics: []
});
}
console.log(`Downloaded: ${song.title}`);
fs.writeFileSync('./playlist.json', JSON.stringify(playlist, null, 2));
});
writer.on('error', (err) => {
console.error(`Error downloading ${song.title}:`, err);
});

} catch (error) {
console.error('Error saving track:', error);
}
}
}

downloadTracks()

function parseLrc(lrc) {
const lines = lrc.split('\n');
return lines.map(line => {
const match = line.match(/\[(\d{2}):(\d{2}\.\d{2})\](.*)/);
if (match) {
const minutes = parseInt(match[1]);
const seconds = parseFloat(match[2]);
return {
time: minutes * 60 + seconds,
text: match[3].trim()
};
}
return null;
}).filter(item => item !== null);
}
//console.log(parseLrc(``))