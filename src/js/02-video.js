import throttle from 'lodash.throttle';
const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

player.on('play', function() {
    console.log('played the video!');
});

const onPlay = function(data) {
    console.log(data.seconds);
    localStorage.setItem("videoplayer-current-time", data.seconds);
};

player.on('timeupdate', throttle(onPlay, 1000));

const currentTime =  localStorage.getItem("videoplayer-current-time");

player.setCurrentTime(currentTime).then(function(seconds) {
    // seconds = the actual time that the player seeked to
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;

        default:
            // some other error occurred
            break;
    }
});