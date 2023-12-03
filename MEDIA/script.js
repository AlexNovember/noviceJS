'use strict';

const playElm = document.querySelector('.play');
const pauseElm = document.querySelector('.pause');
const speedUP = document.querySelector('.speed-up');
const normalSpeed = document.querySelector('.speed-mormal');
const slowSpeed = document.querySelector('.speed-slow');
const videoElm = document.querySelector('video');
const currentTimeElm = document.querySelector('.current-time');
const timingElm = document.querySelector('.timing');
const zoomElm = document.querySelector('.zoom');
const volumeElm = document.querySelector('.volume');
const durationElm = document.querySelector('.duration');

const zoom = 1;

playElm.addEventListener('click', () => {
    videoElm.play();
});

videoElm.addEventListener('click', () => {
    togglePlayback(videoElm);
});

function togglePlayback(video) {
    (video.paused) ? video.play() : video.pause();
}

// playElm.addEventListener('click', () => {
//     videoElm.play()
//     pause();
//     playElm.innerHTML =
//         (playElm.innerHTML === 'Play') ? playElm.innerHTML = 'Pause' : playElm.innerHTML = 'Play';
// });

pauseElm.addEventListener('click', () => {
    videoElm.pause();
});

zoomElm.addEventListener('click', () => {
    videoElm.requestFullscreen();

});



speedUP.addEventListener('click', () => {
    videoElm.play();
    videoElm.playbackRate = 2;
});

normalSpeed.addEventListener('click', () => {
    videoElm.play();
    videoElm.playbackRate = 1;
});

slowSpeed.addEventListener('click', () => {
    videoElm.play();
    videoElm.playbackRate = 0.5;
});



videoElm.addEventListener('timeupdate', () => {
    durationElm.textContent = getTimeFromSeconds(videoElm.duration);
    timer();

});

function timer(params) {
    timingElm.value = videoElm.currentTime / videoElm.duration * 100;

    let hours = Math.floor(videoElm.currentTime / 3600);
    let minutes = Math.floor((videoElm.currentTime - hours * 3600) / 60);
    let seconds = Math.floor(videoElm.currentTime % 60);

    currentTimeElm.innerHTML = `${hours}:${minutes}:${seconds}`;
}

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
    let hours = Math.floor(seconds / 3600);
    let minutes = Math.floor((seconds - hours * 3600) / 60);
    let sec = Math.floor((seconds - hours * 3600) - (minutes * 60));
    return `${hours}:${minutes}:${sec}`;
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