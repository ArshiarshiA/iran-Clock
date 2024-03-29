// DOM
let second = document.querySelector('.second');
let minute = document.querySelector('.minute');
let hour = document.querySelector('.hour');
let deg = 6;

setInterval(() => {
    /* take a now time and save it in var
     An hour is sixty parts and a period is 360 degrees. 
     If we divide these two together, we get the number six. 
     As a result, we multiply the current time by six. */
    let date = new Date();
    let secondNow = date.getSeconds() * 6;
    let minuteNow = date.getMinutes() * 6;
    let hourNow = date.getHours() * 30 + (minuteNow / 12);
    
    second.style.transform = `rotateZ(${secondNow}deg)`;
    minute.style.transform = `rotateZ(${minuteNow}deg)`;
    hour.style.transform = `rotateZ(${hourNow}deg)`;
}, 1000);

let Time = new persianDate();
console.log(Time.format('hh-mm-ss'));