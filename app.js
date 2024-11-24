  const axios = require('axios');
  const fs = require('fs');
  const path = require('path');


let songr = [
  "https://open.spotify.com/track/6ilc4vQcwMPlvAHFfsTGng?si=43071af23535496e",
  "https://open.spotify.com/track/1FWsomP9StpCcXNWmJk8Cl?si=daefc26af20c4eb3",
  "https://open.spotify.com/track/0yc6Gst2xkRu0eMLeRMGCX?si=6a1f46aef0e14c0f",
  "https://open.spotify.com/track/3p4hRhMcb6ch8OLtATMaLw?si=20e95d262ddd4a96",
  "https://open.spotify.com/track/3e1rs346dsDDwpqTRGlRZR?si=39798fb72f0941e0",
  "https://open.spotify.com/track/4xqrdfXkTW4T0RauPLv3WA?si=99ca7497c0c84310",
  "https://open.spotify.com/track/3hRV0jL3vUpRrcy398teAU?si=d91c7d43322a4589",
  "https://open.spotify.com/track/0DuWDLjriRPjDRoPgaCslY?si=6e64ca29a2d149c1",
  "https://open.spotify.com/track/6HU7h9RYOaPRFeh0R3UeAr?si=f8a3e23e57204ea7",
  "https://open.spotify.com/track/0BxE4FqsDD1Ot4YuBXwAPp?si=5da1fc84e1af4bbc",
  "https://open.spotify.com/track/1HNkqx9Ahdgi1Ixy2xkKkL?si=404c3d1b1ff345df",
"https://open.spotify.com/track/1rBzwMNzV14nYk2IHgMFP9?si=e041d5630fe14805",
"https://open.spotify.com/track/0VhgEqMTNZwYL1ARDLLNCX?si=0cedea4d4f654ceb",
"https://open.spotify.com/track/55Am8neGJkdj2ADaM3aw5H?si=50938461a2b44be9",
"https://open.spotify.com/track/5h5CQwgjgQrBUacsqR2zR7?si=757847f9b58c407e",
"https://open.spotify.com/track/3DBJE1Zndql25OGUQSv7aD?si=f6fedbef6d194113",
"https://open.spotify.com/track/5yVIlYEHZxQVLyInCdldoS?si=06adb16ae16340ce",
"https://open.spotify.com/track/5kqIPrATaCc2LqxVWzQGbk?si=f55d71e599fa4b76",
"https://open.spotify.com/track/0KpWiHVmIFDTvai20likX4?si=f38241439bbf4c7e",
"https://open.spotify.com/track/4DxybsoSiMUW0JI2oM0SSN?si=6888ade723e844c3",
"https://open.spotify.com/track/6mQLN3zRtAp6ovjusyYKrV?si=953920fc981b4652",
"https://open.spotify.com/track/40gk32E7YaTFoQwDIWv2SY?si=8323b7887fd3479e",
  "https://open.spotify.com/track/2tGvwE8GcFKwNdAXMnlbfl?si=bcd4a69576b24223",
"https://open.spotify.com/track/6OmKbLCskNWi1IcfpZbeJc?si=b96be147a63647d1",
  "https://open.spotify.com/track/2HZLXBOnaSRhXStMLrq9fD?si=9a5129cfa0524d0f",
"https://open.spotify.com/track/009ImBOrIUlWgla8U05RAC?si=561427bb6e864833",
"https://open.spotify.com/track/3cKM7UXBZmgjEgEBTkaIlU?si=1061c09d433a48e4",
"https://open.spotify.com/track/5ajjAnNRh8bxFvaVHzpPjh?si=8390c418afe64b6d",
"https://open.spotify.com/track/6T7MAQCekVb3UnCykjX3BP?si=49b1ed33f8b34026",
"https://open.spotify.com/track/1daDRI9ahBonbWD8YcxOIB?si=e29cf2f9ca824629",
"https://open.spotify.com/track/0GgN4MhR5GKn5IcKN0e0rG?si=2f5b4622d3a84b3a",
"https://open.spotify.com/track/40gk32E7YaTFoQwDIWv2SY?si=ed6c854c8c4346ce",
"https://open.spotify.com/track/77KnJc8o5G1eKVwX5ywMeZ?si=a583e6ec0693490e",
"https://open.spotify.com/track/1V6gIisPpYqgFeWbMLI0bA?si=60ce04db816745c9",
"https://open.spotify.com/track/0pJW1Xw3aY4Eh6k5iuBkfI?si=7ad64e32c1e34ef6",
"https://open.spotify.com/track/4RAOI1etsgbh5NP3T5R8rN?si=225fed87444c405e",
"https://open.spotify.com/track/2IVsRhKrx8hlQBOWy4qebo?si=9e015f451d814d66",
"https://open.spotify.com/track/3qhlB30KknSejmIvZZLjOD?si=ef75eab799ce4edf",
"https://open.spotify.com/track/0M3HkE321xpCbCYqVKzr1q?si=8b9b4d7ca2cc4202",
"https://open.spotify.com/track/5UXJzLFdBn6u9FJTCnoHrH?si=61016c54ab444bbe",
"https://open.spotify.com/track/6GJdFTOm23lC5bqjYSMJTj?si=455d3dc6b57443d5",
  "https://open.spotify.com/track/190jyVPHYjAqEaOGmMzdyk?si=8637484531534640",
  "https://open.spotify.com/track/6Qyc6fS4DsZjB2mRW9DsQs?si=307333c5d17e498f",
  "https://open.spotify.com/track/2xlV2CuWgpPyE9e0GquKDN?si=7791d1b663a04d2e",
  "https://open.spotify.com/track/5JLv62qFIS1DR3zGEcApRt?si=432faa4c8ac74c88",
  "https://open.spotify.com/track/3AJwUDP919kvQ9QcozQPxg?si=88a696f747f846f1",
  "https://open.spotify.com/track/7D0RhFcb3CrfPuTJ0obrod?si=7787dbad6ebe42c0",
  "https://open.spotify.com/track/7LVHVU3tWfcxj5aiPFEW4Q?si=f1ed74adb8e64d3a",
  "https://open.spotify.com/track/0nJW01T7XtvILxQgC5J7Wh?si=ce3edfd40abc4d64",
  "https://open.spotify.com/track/5O2P9iiztwhomNh8xkR9lJ?si=334699259d0a41ca",
  "https://open.spotify.com/track/72sfmdpuO5r8cBDgs7MqZZ?si=c4d4e76a91e141c1",
  "https://open.spotify.com/track/1xbOdb9kv5YKBIzJSrKNEy?si=ffa0e8d9ca494371",
  "https://open.spotify.com/track/4i4ArYpqtsA3MJ1k0o2dxq?si=14fa47da78b24131",
  "https://open.spotify.com/track/1ujxjsoNvh4XgS2fUNwkZ2?si=807580a678284dee",
  "https://open.spotify.com/track/00RLNHc2jkEjUoCUlFgPVT?si=bff4873ed0e74bfc",
];

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
  const songPromises = songr.map(downloadSpotifyTrack); // Run all requests in parallel
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
          audio_url: `songs/${song.title}.mp3`,
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

downloadTracks();