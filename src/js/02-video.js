
import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);
// const KEY_VIDEOPLAYER = 'videoplayer-current-time';

// const onPlay = function (data) {
//     localStorage.setItem(KEY_VIDEOPLAYER, data.seconds);
// };

// player.on('timeupdate', onPlay);

// let time = localStorage.getItem(KEY_VIDEOPLAYER) || 0;
// // console.log(time);

// player.setCurrentTime(time)

// --------------------

player.on('timeupdate', data =>
  localStorage.setItem('videoplayer-current-time', data.seconds)
);

let time = localStorage.getItem('videoplayer-current-time');

player.setCurrentTime(time || 0);