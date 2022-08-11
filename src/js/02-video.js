import Player from '@vimeo/player';
const throttle = require('lodash.throttle');
const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on(
  'timeupdate',
  throttle(function ({ seconds }) {
    localStorage.setItem('videoplayer-current-time', seconds);
  }, 1000)
);

const time = localStorage.getItem('videoplayer-current-time');
if (time) {
  player.setCurrentTime(time).then(function (title) {
    console.log('title:', title);
  });
}
