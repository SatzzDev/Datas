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
const url = `https://api.spotify.com/v1/playlists/3i0YlotQnM7qnrz9P3YhVy/tracks`

try {
const response = await axios.get(url, {
headers: { Authorization: `Bearer BQCbtEaw7f7jglOL58qr-A89x0DjqJRu8r08lXojNH_6SeRT5GMA3KajqaRomnBXG02_2-GVA3qb8K7iLirL5_Tbbqr3h93BHo8S1SxB4Byb-U21VuIRwEdHtSErq_BV3NJKQ4eLyJSaiSZda3LuxONLtiCIHqrLCbgBWzG2Knnj6vxs1FnDB15jLcdnDn89z-Z9lcF2IObOlkaAELuyO9SzmbwdEVO3f910sfTrGD9KQn-5-gARoGf1yIEdf0iUn1aCf_YMB04UoLkVvNp1iqCwhMk9oS1f` },
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
artist: data.nama_channel,
url: data.url_audio_v1,
cover: data.gambar_kecil[0].url
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
console.log(`Downloaded: ${song.title}`);
playlist.push({
title: song.title,
artist: song.artist,
source:`https://raw.githubusercontent.com/SatzzDev/Datas/main/songs/${song.title}.mp3`,
cover: song.cover,
favorite: true,
});
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