//getting the elements

const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

// functions

function togglePlay() {
    const play = video.paused ? 'play' : 'pause';
    video[play]();
}
function updateButton() {
    const icon = this.paused ? '►' : '❚ ❚';
    toggle.textContent = icon;
}
function skip() {
    console.log(this.dataset);
    video.currentTime += parseFloat(this.dataset.skip);
}
function haddleRange() {
    video[this.name] = this.value;
}
function haddleProgress() {
    const percent = (video.currentTime / video.duration) * 100;
    progressBar.style.flexBasis = percent + '%';
    // console.log(percent);
}

function scrub(e) {
    const percent = e.offsetX / progress.offsetWidth;
    progressBar.style.flexBasis = percent * 100 + '%';
    video.currentTime = video.duration * parseFloat(percent);
}
video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
toggle.addEventListener('click', togglePlay);
skipButtons.forEach((button) => button.addEventListener('click', skip));
ranges.forEach((range) => range.addEventListener('change', haddleRange));
video.addEventListener('timeupdate', haddleProgress);
progress.addEventListener('click', scrub);
let mousedown = false;
progress.addEventListener('mousedown ', () => (mousedown = true));
progress.addEventListener('mouseup ', () => (mousedown = false));
if (mousedown) progress.addEventListener('mousemove ', scrub);
