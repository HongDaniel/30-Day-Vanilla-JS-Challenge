let countdown;
const displayTime = document.querySelector('.display__time-left');
const endTime = document.querySelector('.display__end-time');
const buttons = document.querySelectorAll('.timer__button');

function timer(secs) {
    const now = Date.now();
    const then = now + secs * 1000;
    clearInterval(countdown);
    displayTimeLeft(secs);
    displayEndTime(then);
    countdown = setInterval(() => {
        // 바로 실행되지 않는 함수이다.
        const secsLeft = Math.round((then - Date.now()) / 1000);
        if (secsLeft < 0) {
            clearInterval(countdown);
            return;
        }
        displayTimeLeft(secsLeft);
    }, 1000);
}

function displayTimeLeft(secs) {
    // 시간을 출력해주는 함수
    const mins = Math.floor(secs / 60);
    const secsLeft = secs % 60;
    const display = `${mins}:${secsLeft < 10 ? '0' + secsLeft : secsLeft}`;
    displayTime.textContent = display;
    document.title = display;
}

function displayEndTime(timestamp) {
    const end = new Date(timestamp);
    const [hours, mins] = [end.getHours(), end.getMinutes()];
    endTime.textContent = `끝나는 시간 ${hours > 12 ? hours - 12 : hours}:${mins < 10 ? '0' + mins : mins}`;
}

//timer(70);

function startTimer() {
    const addTime = parseFloat(this.dataset.time);
    timer(addTime);
}

function haddleSubmit(e) {
    e.preventDefault();
    timer(this.minutes.value * 60);
    this.reset();
}

buttons.forEach((button) => button.addEventListener('click', startTimer));

document.customForm.addEventListener('submit', haddleSubmit);
