'use strict';

const playElm = document.querySelector('.play');
const pauseElm = document.querySelector('.pause');
const videoElm = document.querySelector('video');
const currentTimeElm = document.querySelector('.current-time');
const timingElm = document.querySelector('.timing');
const volumeElm = document.querySelector('.volume');
const durationElm = document.querySelector('.duration');


playElm.addEventListener('click', () => {
    videoElm.play();
});

pauseElm.addEventListener('click', () => {
    videoElm.pause();
});

videoElm.addEventListener('timeupdate', () => {
    durationElm.textContent = videoElm.duration.toFixed(1);
    currentTimeElm.textContent = videoElm.currentTime.toFixed(1);
    timingElm.value = videoElm.currentTime / videoElm.duration * 100;
});

volumeElm.addEventListener('input', () => {
    videoElm.volume = volumeElm.value;
});

timingElm.addEventListener('input', () => {
    videoElm.currentTime = timingElm.value / 100 * videoElm.duration;
});

document.addEventListener('keydown', (e) => {
    if (e.code === 'Space') {
        videoElm.pause();
    }
    if (e.code === 'ArrowLeft') {
        videoElm.currentTime -= 5;
    }
    if (e.code === 'ArrowRight') {
        videoElm.currentTime += 5;
    }
});





class findSelector {
    constructor(selector) {
        this.findEl = document.querySelector(selector);
        if (!this.findEl) {
            throw new Error('Element not found');
        }
    }
}

const find = new findSelector('.video-timer');
console.log(find);