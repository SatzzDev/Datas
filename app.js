const axios = require('axios');
const fs = require('fs');
const path = require('path');



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
headers: { Authorization: `Bearer BQBwBfDanR7RUX9auZCBJ1skUPDgClfgdR6hEet_OEOcnJ819FomLlobUu-XpzdL31DympVxQIcWTDbv9W6gKeRfZnyq6xK8T_oYJbMSES3mNnT2h-4-MX_ymqlBqBI98AkJviVtNnHvlzoSPQGI-KAgGh7qHKg-yBVRV1fw7pRlNyfVKRo952_raHT1jGbtDsSp9MQ-CFkOS_8o5cL5hOIDMmvbCsI4NG8eybgyjXIuqhhgofqj85ATwgyuKLGyase_UEdjZvyZ3EIAuPajk76wmRzvrdX8` },
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
const songPromises = songr.map(downloadSpotifyTrack); 
let songs = await Promise.all(songPromises);
songs = songs.filter(song => song !== null); // Remove null results

// Create the 'songs' directory if it doesn't exist
if (!fs.existsSync('./songs')) {
fs.mkdirSync('./songs');
}
// Check if 'playlist.json' exists, if not, create it
if (!fs.existsSync('./playlist.json')) {
fs.writeFileSync('./playlist.json', JSON.stringify([])); // Initialize with an empty array
}
// Load existing playlist from the file
const playlist = JSON.parse(fs.readFileSync('./playlist.json', 'utf8'));
// Download each track and save it to the 'songs' folder
for (let song of songs) {
const filePath = path.join(__dirname, 'songs', `${song.title}.mp3`);

// Check if the file already exists, if it does, skip the download
if (fs.existsSync(filePath)) {
console.log(`Skipping ${song.title}, file already exists.`);
continue;
}

try {
const audioResponse = await axios({
method: 'get',
url: song.url,
responseType: 'stream'
});

const writer = fs.createWriteStream(filePath);

audioResponse.data.pipe(writer);

writer.on('finish', () => {
console.log(`Downloaded: ${song.title}`);
// Add song info to the playlist
playlist.push({
title: song.title,
channel: song.channel,
audio_url: `https://raw.githubusercontent.com/SatzzDev/Datas/main/songs/${song.title}.mp3`,
image: song.image
});

// Save updated playlist to 'playlist.json'
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