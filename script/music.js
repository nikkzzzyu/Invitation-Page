// Define global variables
let player;
let isPlaying = false;

// Function to initialize the YouTube player
function initializeYouTubePlayer() {
    player = new YT.Player('music-player', {
        height: '0',
        width: '0', 
        videoId: 'PUiYQTIZTNg', // YouTube video ID
        events: {
            'onReady': onPlayerReady
        }
    });
}

// Function called when the YouTube player is ready
function onPlayerReady(event) {
    // Check if music playback state is saved in sessionStorage
    const storedState = sessionStorage.getItem('musicState');
    if (storedState === 'playing') {
        player.playVideo(); // Resume playback if the state is 'playing'
        isPlaying = true;
    }
}

// Function to toggle music playback
function toggleMusic() {
    if (isPlaying) {
        player.pauseVideo(); // Pause the video if currently playing
        isPlaying = false;
    } else {
        player.playVideo(); // Play the video if currently paused
        isPlaying = true;
    }
    saveMusicState(); // Save the current playback state
}

// Function to save music playback state in sessionStorage
function saveMusicState() {
    sessionStorage.setItem('musicState', isPlaying ? 'playing' : 'paused');
}

// Load the YouTube API asynchronously
function loadYouTubeAPI() {
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
}

// Call the function to load the YouTube API
loadYouTubeAPI();

// Call the function to initialize the YouTube player
initializeYouTubePlayer();
