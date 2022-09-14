import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
const CURRENT_VIDEO_TIME = 'videoTime';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

lastVideoTime();

player.on('timeupdate', throttle(evt => {
    localStorage.setItem(CURRENT_VIDEO_TIME, evt.seconds);
    console.log(CURRENT_VIDEO_TIME);
    
}, 1000));


function lastVideoTime() {
    const savedTime = localStorage.getItem(CURRENT_VIDEO_TIME)

    try {
        player.setCurrentTime(savedTime);
    } catch (error) {
        console.log(error)
    }
};