'use strict';

const playElm = document.querySelector('.play');
// const pauseElm = document.querySelector('.pause');
const videoElm = document.querySelector('video');
const currentTimeElm = document.querySelector('.current-time');
const timingElm = document.querySelector('.timing');
const volumeElm = document.querySelector('.volume');
const durationElm = document.querySelector('.duration');


playElm.addEventListener('click', () => {
    videoElm.play()
    pause();
    playElm.innerHTML =
        (playElm.innerHTML === 'Play') ? playElm.innerHTML = 'Pause' : playElm.innerHTML = 'Play';
});

// pauseElm.addEventListener('click', () => {
//     videoElm.pause();
// });

videoElm.addEventListener('timeupdate', () => {
    durationElm.textContent = getTimeFromSeconds(videoElm.duration.toFixed(1));
    currentTimeElm.textContent = getTimeFromSeconds(videoElm.currentTime.toFixed(0));
    timingElm.value = videoElm.currentTime / videoElm.duration * 100;
});

volumeElm.addEventListener('input', () => {
    videoElm.volume = volumeElm.value;
});

timingElm.addEventListener('input', () => {
    videoElm.currentTime = timingElm.value / 100 * videoElm.duration;
});

document.addEventListener('keypress', (e) => {
    if (e.code === 'Space') {
        pause();
    }
    if (e.code === 'ArrowLeft') {
        videoElm.currentTime -= 3;
    }
    if (e.code === 'ArrowRight') {
        videoElm.currentTime += 3;
    }
});

let flag = true;

function pause() {
    document.querySelector('video');
    if (flag) {
        videoElm.play();
    } else {
        videoElm.pause();
    }
    flag = !flag;
}

function getTimeFromSeconds(seconds) {
    let hours = Math.trunc(seconds / 3600);
    let minutes = ((seconds - hours * 3600) / 60).toFixed(0);
    let sec = ((seconds - hours * 3600) - (minutes * 60)).toFixed(0);
    return hours + ':' + minutes + ":" + sec;
};
// class findSelector {
//     constructor(selector) {
//         this.findEl = document.querySelector(selector);
//         if (!this.findEl) {
//             throw new Error('Element not found');
//         }
//     }
// }

// const find = new findSelector('.video-timer');
// console.log(find);