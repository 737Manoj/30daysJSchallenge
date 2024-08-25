const secondHand = document.querySelector('.secondHand');
const minuteHand = document.querySelector('.minuteHand');
const hourHand = document.querySelector('.hourHand');

let lastSecondDegrees = 90;
let lastMinuteDegrees = 90;
let lastHourDegrees = 90;

function setSeconds() {
    const now = new Date();
    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds/60) * 360) + 90; //90 is due to 90 degree offset in css
    //avoid animation glitch
    if (Math.abs(secondsDegrees - lastSecondDegrees) > 180) {
        secondHand.style.transition = 'none';
    } else {
        secondHand.style.transition = 'transform 0.05s ease-in-out';
    }

    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    lastSecondDegrees = secondsDegrees;
    

    const mins = now.getMinutes();
    const minDegrees = ((mins/60) * 360) + 90;
    // avoid animation glitch
    if (Math.abs(minDegrees - lastMinuteDegrees) > 180) {
        minuteHand.style.transition = 'none';
    } else {
        minuteHand.style.transition = 'transform 0.05s ease-in-out';
    } 
    lastMinuteDegrees = minDegrees;

    minuteHand.style.transform = `rotate(${minDegrees}deg)`;

    const hours = now.getHours();
    const hoursDegrees = ((hours/12) * 360) + 90;
    // avoid animation glitch
    if (Math.abs(hoursDegrees - lastHourDegrees) > 180) {
        hourHand.style.transition = 'none';
    } else {
        hourHand.style.transition = 'transform 0.05s ease-in-out';
    }

    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
    lastHourDegrees = hoursDegrees;

}
setInterval(setSeconds,1000);


