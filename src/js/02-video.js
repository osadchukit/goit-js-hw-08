import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const KEY_VIDEOPLAYER = 'videoplayer-current-time';

const onPlay = function (data) {
  localStorage.setItem(KEY_VIDEOPLAYER, data.seconds);
};

player.on('timeupdate', throttle(onPlay, 1000));

let time = localStorage.getItem(KEY_VIDEOPLAYER) || 0;
// console.log(time);

player.setCurrentTime(time);

// --------------------

// player.on(
//   'timeupdate',
//   throttle(
//     data => localStorage.setItem('videoplayer-current-time', data.seconds),
//     1000
//   )
// );

// player.setCurrentTime(localStorage.getItem('videoplayer-current-time') || 0);
