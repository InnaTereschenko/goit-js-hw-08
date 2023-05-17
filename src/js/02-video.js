
import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const STORAGE_KEY = 'videoplayer-current-time';

const player = new Player(iframe);

const getCurrentTime = function (curentTime) {
    let seconds = curentTime.seconds;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(seconds));
};
    
player.on('timeupdate', throttle(getCurrentTime), 1000);


    const getFixTime = localStorage.getItem(STORAGE_KEY) || 0;
    
    player.setCurrentTime(getFixTime);

    

