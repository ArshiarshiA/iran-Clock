// DOM
let second = document.querySelector('.second');
let deg = 6;
setInterval(() => {
    let date = new Date();
    let secondNow = date.getSeconds() * 6;

    second.style.transform = `rotateZ(${secondNow}deg)`
}, 1000);