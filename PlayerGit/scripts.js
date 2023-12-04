/* Get Our Elements */
const player = document.querySelector(".player");
const video = player.querySelector(".viewer");
const progress = player.querySelector(".progress");
const progressBar = player.querySelector(".progress__filled");
const toggle = player.querySelector(".toggle");
const skipButtons = player.querySelectorAll("[data-skip]");
const ranges = player.querySelectorAll(".player__slider");
const currentTime = document.querySelector('.current-time');
const zoomElm = document.querySelector('.zoom');
const speedUP = document.querySelector('.speed-up');
const speedNormal = document.querySelector('.speed-mormal');
const speedSlow = document.querySelector('.speed-slow');
const duration = document.querySelector('.duration');

// progress.value.innerHTML = video.currentTime / video.duration * 100;

/* Build out functions */
function togglePlay() {
    const method = video.paused ? "play" : "pause";
    video[method]();
}

function updateButton() {
    const icon = this.paused ? "►" : "❚❚";
    console.log(icon);
    toggle.textContent = icon;
}

function zoomVideo() {
    video.requestFullscreen();
}

function skip() {
    video.currentTime += parseFloat(this.dataset.skip);
}

function handleRangeUpdate() {
    video[this.name] = this.value;
}

function handleProgress() {
    const percent = (video.currentTime / video.duration) * 100;
    progressBar.style.flexBasis = `${percent}%`;
    getTimeFromSeconds(video.duration);
    timer(progress.value);
}

function scrub(e) {
    const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = scrubTime;
}

function addSpeedUp(params) {
    video.play();
    video.playbackRate = 2;
}

function addSpeedNormal(params) {
    video.play();
    video.playbackRate = 1;
}

function addSpeedSlow(params) {
    video.play();
    video.playbackRate = 0.5;
}

function getTimeFromSeconds(seconds) {
    let hours = Math.floor(seconds / 3600);
    let minutes = Math.floor((seconds - hours * 3600) / 60);
    let sec = Math.floor((seconds - hours * 3600) - (minutes * 60));
    duration.innerHTML = `/ ${hours}:${minutes}:${sec}`;
};

function timer() {
    let hours = Math.floor(video.currentTime / 3600);
    let minutes = Math.floor((video.currentTime - hours * 3600) / 60);
    let seconds = Math.floor(video.currentTime % 60);
    currentTime.innerHTML = `${hours}:${minutes}:${seconds}`;
    displayStatus = document.getElementById("displayStatus");
    // displayStatus.innerHTML = `${hours}:${minutes}:${seconds}`;
}




/* Hook up the event listners */
video.addEventListener("click", togglePlay);
video.addEventListener("play", updateButton);
video.addEventListener("pause", updateButton);
video.addEventListener("timeupdate", handleProgress);

zoomElm.addEventListener('click', zoomVideo);
speedUP.addEventListener('click', addSpeedUp);
speedNormal.addEventListener('click', addSpeedNormal);
speedSlow.addEventListener('click', addSpeedSlow);

toggle.addEventListener("click", togglePlay);
skipButtons.forEach(button => button.addEventListener("click", skip));
ranges.forEach(range => range.addEventListener("change", handleRangeUpdate));
ranges.forEach(range => range.addEventListener("mousemove", handleRangeUpdate));

const mousedown = false;
progress.addEventListener("click", scrub);
progress.addEventListener("mousemove", (e) => mousedown && scrub(e));
progress.addEventListener("mousedown", () => mousedown = true);
progress.addEventListener("mouseup", () => mousedown = false);





