document.addEventListener('DOMContentLoaded', function () {
    var player;

    // Function to initialize the YouTube player
    function initPlayer() {
        player = new YT.Player('player', {
            height: '0',
            width: '0',
            videoId: 'PUiYQTIZTNg', // Replace with your video ID
            events: {
                'onReady': onPlayerReady
            }
        });
    }

    // Function to start playing the video when the player is ready
    function onPlayerReady(event) {
        event.target.playVideo();
    }

    // Initialize the YouTube API
    function initYouTubeAPI() {
        if (typeof YT === 'undefined' || typeof YT.Player === 'undefined') {
            var tag = document.createElement('script');
            tag.src = 'https://www.youtube.com/iframe_api';
            var firstScriptTag = document.getElementsByTagName('script')[0];
            firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
        }
    }

    // Call the functions to initialize the YouTube player and API
    initYouTubeAPI();
    initPlayer();
});
