const tracks = [
    {
        title: "Closer",
        artist: "Halsey",
        src: "music/Closer.mp3",
        cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSyrsED7UjOwxPaWmU1fBLgO-JaPLdRDy9Dg&s"
    },
    {
        title: "Shape of You",
        artist: "Ed Sheeran",
        src: "music/Shape-of-You.mp3",
        cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQR91GSRkEqEBL8hbEZ7mWt0M4S2izqMDFOyA&s"
    },
    {
        title: "Tujh Mein Rab Dikhta Hai",
        artist: "Roop Kumar Rathod",
        src: "music/Tujh me Rab Dikhta Hai.mp3",
        cover: "https://i1.sndcdn.com/artworks-000169671645-urwr37-t500x500.jpg"
    },
    {
        title: "Kabira",
        artist: "Arijit Singh",
        src: "music/Kabira.mp3",
        cover: "https://c.saavncdn.com/440/Yeh-Jawaani-Hai-Deewani-2013-500x500.jpg"
    },
    {
      title: "Wo Din",
      artist: "Arijit Singh",
      src: "music/Woh Din - Chhichhore.mp3",
      cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSI0isIJb0jJPGySwnilTUNrMwDbu5wRGMUCg&s"
  },
  {
    title: "Teri Ore",
    artist: "Shreya Ghoshal",
    src: "music/Teri Ore.mp3",
    cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyb7Wboqk7Hp_jMcmRE1XN812HIAPz7aehvQ&s"
},
{
    title: "Lover",
    artist: "Taylor Swift",
    src: "music/Lover.mp3",
    cover: "https://m.media-amazon.com/images/I/41-ZynLJvrL.jpg"
},
{
  title: "Steal My Girl",
  artist: "One Direction",
  src: "music/Steal-My-Girl.mp3",
  cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCuANWzP-9qOqrzV4SOWvxFty7MJ1myDit2w&s"
}
];

const recommendations = [
    {
        title: "Unstoppable",
        artist: "Sia",
        src: "music/Unstoppable.mp3",
        cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlmU0qapVEECqfYZBT-ZwM0wvjrqQC90ryXA&s"
    },
    {
        title: "We Don't Talk Anymore",
        artist: "Charlie Puth",
        src: "music/We-Don't-Talk-Anymore.mp3",
        cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKwq_mJgbcUPwyPpXN8Q7N5ZsoKqUUQpcUQA&s"
    },
    {
        title: "Lag Ja Gale",
        artist: "Lata Mangeshkar",
        src: "music/Lag Ja Gale.mp3",
        cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJQI95g-1RQUP52m8OU3per7fHV_DaVE1ySA&s"
    },
    {
        title: "Everything At Once",
        artist: "Lenka",
        src: "music/Everything At Once.mp3",
        cover: "https://upload.wikimedia.org/wikipedia/en/a/ad/Lenka-everything_at_once_s.jpg"
    },
    {
      title: "What Makes You Beautiful",
      artist: "One Direction",
      src: "music/What-Makes-You-Beautiful.mp3",
      cover: "https://assets.audiomack.com/onedirectioonn/bcbdaaecef11cf5dbfc4da075cea5ef0.jpeg?width=1000&height=1000&max=true"
  },
  {
    title: "Ik Vaari",
    artist: "Arijit Singh",
    src: "music/Ik Vaari Aa.mp3",
    cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-SKUOLXr0PbhPkeU9jp2lI8zk1CeI-A_6qg&s"
},
{
  title: "Perfect",
  artist: "Ed Sheeran",
  src: "music/Perfect.mp3",
  cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSmmXvm71GSv6s-W4zinmKpAzfeiRZ6JBRMQ&s"
},
{
    title: "Story of my life",
    artist: "One Direction",
    src: "music/One Direction - Story of My Life.mp3",
    cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4A5TSYjiAi9d6PkYR1LjnXbC2E8Nr-iHrOw&s"
},
{
  title: "Namo Namo",
  artist: "Amit Trivedi",
  src: "music/Namo-Namo.mp3",
  cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVGXGkuzGeB3Et0nhHAsSAAM1XfEw0HnKy-A&s"
},
{
  title: "Kal Ki Hi Baat Hai",
  artist: "KK",
  src: "music/Kal Ki Hi Baat Hai.mp3",
  cover: "https://c.saavncdn.com/937/Chhichhore-Hindi-2019-20190904104023-500x500.jpg"
},

{
    title: "Memories",
    artist: "Maroon 5",
    src: "music/Memories.mp3",
    cover: "https://i1.sndcdn.com/artworks-000650643226-ag2vve-t500x500.jpg"
}
];

let currentTrackIndex = 0;
let isPlaying = false;
let isShuffle = false;
let isRepeat = false;
let isRecommendation = false;
let playlists = [];
let currentPlaylistIndex = null;

const trackListSlider = document.querySelector('.track-list-slider');
const recommendationsSlider = document.querySelector('.recommendations-slider');
const audio = document.getElementById('audio');
const playPauseBtn = document.getElementById('play-pause');
const prevTrackBtn = document.getElementById('prev-track');
const nextTrackBtn = document.getElementById('next-track');
const shuffleBtn = document.getElementById('shuffle');
const repeatBtn = document.getElementById('repeat');
const addToPlaylistBtn = document.getElementById('add-to-playlist');
const downloadTrackBtn = document.getElementById('download-track');
const shareTrackBtn = document.getElementById('share-track');
const sharePlaylistBtn = document.getElementById('share-playlist');
const createPlaylistBtn = document.getElementById('create-playlist');
const playAllBtn = document.getElementById('play-all');
const playlistsList = document.getElementById('playlists-list');
const searchInput = document.getElementById('search-input');
const progressBar = document.getElementById('progress-bar');
const volumeControl = document.getElementById('volume-control');

// Populate track list and recommendations
function populateTrackList() {
    trackListSlider.innerHTML = tracks.map((track, index) => `
        <div class="track-card" data-index="${index}">
            <img src="${track.cover}" alt="${track.title}">
            <h4>${track.title}</h4>
            <p>${track.artist}</p>
        </div>
    `).join('');
}

function populateRecommendations() {
    recommendationsSlider.innerHTML = recommendations.map((track, index) => `
        <div class="recommendation-card" data-index="${index}">
            <img src="${track.cover}" alt="${track.title}">
            <h4>${track.title}</h4>
            <p>${track.artist}</p>
        </div>
    `).join('');
}

// Load track
function loadTrack(index, isRecommendation = false) {
    const track = isRecommendation ? recommendations[index] : tracks[index];
    document.getElementById('album-cover').src = track.cover;
    document.getElementById('track-title').textContent = track.title;
    document.getElementById('artist-name').textContent = track.artist;
    audio.src = track.src;
    currentTrackIndex = index;
    this.isRecommendation = isRecommendation;
    isPlaying = false;
    playPauseTrack();
}

volumeControl.addEventListener('input', () => {
    audio.volume = volumeControl.value;
});

audio.addEventListener('timeupdate', () => {
    const progressPercent = (audio.currentTime / audio.duration) * 100;
    progressBar.value = progressPercent;
});

// Seek within the track when the progress bar is adjusted
progressBar.addEventListener('input', () => {
    const seekTime = (progressBar.value / 100) * audio.duration;
    audio.currentTime = seekTime;
});

document.querySelectorAll('.Library-card').forEach(card => {
    card.addEventListener('click', () => {
        loadTrack(parseInt(card.getAttribute('data-index')), true);
    });
});

// Play/Pause track
function playPauseTrack() {
    if (isPlaying) {
        audio.pause();
        playPauseBtn.textContent = 'Play';
    } else {
        audio.play();
        playPauseBtn.textContent = 'Pause';
    }
    isPlaying = !isPlaying;
}

playPauseBtn.addEventListener('click', playPauseTrack);

// Play next track
function playNextTrack() {
    if (isShuffle) {
        if (isRecommendation) {
            currentTrackIndex = Math.floor(Math.random() * recommendations.length);
        } else {
            currentTrackIndex = Math.floor(Math.random() * tracks.length);
        }
    } else {
        currentTrackIndex = (currentTrackIndex + 1) % (isRecommendation ? recommendations.length : tracks.length);
    }
    loadTrack(currentTrackIndex, isRecommendation);
}

nextTrackBtn.addEventListener('click', playNextTrack);

// Play previous track
function playPrevTrack() {
    if (isShuffle) {
        if (isRecommendation) {
            currentTrackIndex = Math.floor(Math.random() * recommendations.length);
        } else {
            currentTrackIndex = Math.floor(Math.random() * tracks.length);
        }
    } else {
        currentTrackIndex = (currentTrackIndex - 1 + (isRecommendation ? recommendations.length : tracks.length)) % (isRecommendation ? recommendations.length : tracks.length);
    }
    loadTrack(currentTrackIndex, isRecommendation);
}

prevTrackBtn.addEventListener('click', playPrevTrack);

// Shuffle
shuffleBtn.addEventListener('click', () => {
    isShuffle = !isShuffle;
    shuffleBtn.classList.toggle('active', isShuffle);
});

// Repeat
repeatBtn.addEventListener('click', () => {
    isRepeat = !isRepeat;
    repeatBtn.classList.toggle('active', isRepeat);
    audio.loop = isRepeat;
});

// Add to playlist
addToPlaylistBtn.addEventListener('click', () => {
    const playlistName = prompt('Enter playlist name:');
    if (playlistName) {
        let playlist = playlists.find(playlist => playlist.name === playlistName);
        if (!playlist) {
            playlist = { name: playlistName, tracks: [] };
            playlists.push(playlist);
            updatePlaylists();
        }
        const trackIndex = isRecommendation ? currentTrackIndex + tracks.length : currentTrackIndex;
        if (!playlist.tracks.includes(trackIndex)) {
            playlist.tracks.push(trackIndex);
            updatePlaylists();
        }
    }
});

// Update playlists
function updatePlaylists() {
    playlistsList.innerHTML = playlists.map((playlist, index) => `
        <li class="list-group-item">
            <span onclick="viewPlaylist(${index})">${playlist.name}</span>
            <button onclick="confirmDeletePlaylist(${index})">x</button>
            <ul>
                ${playlist.tracks.map(trackIndex => `
                    <li>
                        ${getTrackTitle(trackIndex)}
                        <button onclick="confirmRemoveTrackFromPlaylist(${index}, ${trackIndex})">x</button>
                    </li>
                `).join('')}
            </ul>
        </li>
    `).join('');
    playAllBtn.style.display = playlists.length ? 'block' : 'none';
}

// Get track title by index
function getTrackTitle(index) {
    if (index < tracks.length) {
        return tracks[index].title;
    } else {
        return recommendations[index - tracks.length].title;
    }
}

// Delete playlist with confirmation
function confirmDeletePlaylist(index) {
    if (confirm('Are you sure you want to delete this playlist?')) {
        deletePlaylist(index);
    }
}

function deletePlaylist(index) {
    playlists.splice(index, 1);
    updatePlaylists();
}

// Remove track from playlist with confirmation
function confirmRemoveTrackFromPlaylist(playlistIndex, trackIndex) {
    event.stopPropagation(); // Prevent triggering the play event
    if (confirm('Are you sure you want to remove this track from the playlist?')) {
        removeTrackFromPlaylist(playlistIndex, trackIndex);
    }
}

function removeTrackFromPlaylist(playlistIndex, trackIndex) {
    const playlist = playlists[playlistIndex];
    playlist.tracks = playlist.tracks.filter(index => index !== trackIndex);
    updatePlaylists();
}

// View playlist
function viewPlaylist(index) {
    currentPlaylistIndex = index;
    loadTrack(playlists[index].tracks[0]);
    playTrack();
}

// Play track from playlist
function playPlaylistTrack(playlistIndex, trackIndex) {
    loadTrack(trackIndex);
    playTrack();
}

// Play all tracks in playlist
playAllBtn.addEventListener('click', () => {
    if (currentPlaylistIndex !== null) {
        const playlist = playlists[currentPlaylistIndex];
        currentTrackIndex = playlist.tracks[0];
        loadTrack(currentTrackIndex);
        playTrack();
        // Handle shuffle within the playlist
        const queue = isShuffle ? playlist.tracks.sort(() => Math.random() - 0.5) : playlist.tracks.slice(1);
        queue.forEach(trackIndex => playPlaylistTrack(currentPlaylistIndex, trackIndex));
    }
});

// Download track
downloadTrackBtn.addEventListener('click', () => {
    const link = document.createElement('a');
    link.href = audio.src;
    link.download = audio.src.split('/').pop();
    link.click();
});

// Share track
shareTrackBtn.addEventListener('click', () => {
    const track = isRecommendation ? recommendations[currentTrackIndex] : tracks[currentTrackIndex];
    const shareData = {
        title: track.title,
        text: `Check out this song: ${track.title} by ${track.artist}`,
        url: track.src
    };
    navigator.share(shareData).catch(console.error);
});


// Share playlist
sharePlaylistBtn.addEventListener('click', () => {
    if (currentPlaylistIndex !== null) {
        const playlist = playlists[currentPlaylistIndex];
        const shareData = {
            title: `My Playlist: ${playlist.name}`,
            text: `Check out my playlist: ${playlist.name}\nTracks:\n${playlist.tracks.map(getTrackTitle).join('\n')}`,
        };
        navigator.share(shareData).catch(console.error);
    }
});

// Create playlist
createPlaylistBtn.addEventListener('click', () => {
    const playlistName = prompt('Enter new playlist name:');
    if (playlistName) {
        playlists.push({ name: playlistName, tracks: [] });
        updatePlaylists();
    }
});

searchInput.addEventListener('input', () => {
    const query = searchInput.value.toLowerCase();
    const filteredTracks = tracks.filter(track => track.title.toLowerCase().includes(query) || track.artist.toLowerCase().includes(query));
    const filteredRecommendations = recommendations.filter(track => track.title.toLowerCase().includes(query) || track.artist.toLowerCase().includes(query));
    trackListSlider.innerHTML = filteredTracks.map((track, index) => `
        <div class="track-card" data-index="${index}">
            <img src="${track.cover}" alt="${track.title}">
            <h4>${track.title}</h4>
            <p>${track.artist}</p>
        </div>
    `).join('');
    recommendationsSlider.innerHTML = filteredRecommendations.map((track, index) => `
        <div class="recommendation-card" data-index="${index}">
            <img src="${track.cover}" alt="${track.title}">
            <h4>${track.title}</h4>
            <p>${track.artist}</p>
        </div>
    `).join('');
});

// Initialize
populateTrackList();
populateRecommendations();
loadTrack(0);
const trackIndex = isRecommendation ? currentTrackIndex + tracks.length : currentTrackIndex;
function confirmRemoveTrackFromPlaylist(playlistIndex, trackIndex) {
    event.stopPropagation(); // Prevent triggering the play event
    if (confirm('Are you sure you want to remove this track from the playlist?')) {
        removeTrackFromPlaylist(playlistIndex, trackIndex);
    }
}
function confirmDeletePlaylist(index) {
    if (confirm('Are you sure you want to delete this playlist?')) {
        deletePlaylist(index);
    }
}
function playNextTrack() {
    if (isShuffle) {
        if (isRecommendation) {
            currentTrackIndex = Math.floor(Math.random() * recommendations.length);
        } else {
            currentTrackIndex = Math.floor(Math.random() * tracks.length);
        }
    } else {
        currentTrackIndex = (currentTrackIndex + 1) % (isRecommendation ? recommendations.length : tracks.length);
    }
    loadTrack(currentTrackIndex, isRecommendation);
}
playAllBtn.addEventListener('click', () => {
    if (currentPlaylistIndex !== null) {
        const playlist = playlists[currentPlaylistIndex];
        currentTrackIndex = playlist.tracks[0];
        loadTrack(currentTrackIndex);
        playTrack();
        // Handle shuffle within the playlist
        const queue = isShuffle ? playlist.tracks.sort(() => Math.random() - 0.5) : playlist.tracks.slice(1);
        queue.forEach(trackIndex => playPlaylistTrack(currentPlaylistIndex, trackIndex));
    }
});

document.querySelectorAll('.recommendation-card').forEach(card => {
    card.addEventListener('click', () => {
        loadTrack(parseInt(card.getAttribute('data-index')), true);
    });
});

// Add event listeners to play the songs in the playlist
document.querySelectorAll('.playlist-card').forEach(card => {
    card.addEventListener('click', () => {
        currentPlaylistIndex = parseInt(card.getAttribute('data-index'));
        loadTrack(currentPlaylistIndex, false);
    });
});

// Add event listeners to make the filtered tracks playable
document.querySelectorAll('.track-card').forEach(card => {
    card.addEventListener('click', () => {
        loadTrack(parseInt(card.getAttribute('data-index')));
    });
});


