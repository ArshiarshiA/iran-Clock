// DOM
let second = document.querySelector('.second');
let minute = document.querySelector('.minute');
let deg = 6;
setInterval(() => {
    let date = new Date();
    let secondNow = date.getSeconds() * 6;
    let minuteNow = date.getMinutes() * 6;

    second.style.transform = `rotateZ(${secondNow}deg)`;
    minute.style.transform = `rotateZ(${minuteNow}deg)`;
}, 1000);