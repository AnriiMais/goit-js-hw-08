import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const player = new Player('vimeo-player', {
  id: 19231868,
  width: 640,
});

player.on('timeupdate', throttle(saveTimeInLocalStorage, 1000));

function saveTimeInLocalStorage(data) {
  localStorage.setItem('videoplayer-current-time', JSON.stringify(data.seconds));
}
const saveTime = JSON.parse(localStorage.getItem('videoplayer-current-time'));
function getSaveTime() {
  if (saveTime) {
    player.setCurrentTime(saveTime);
  } else player.setCurrentTime(0);
}
getSaveTime();
// player.play();
