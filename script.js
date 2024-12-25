const DaysElement = document.querySelector("[data-days]");
const hoursElement = document.querySelector("[data-hours]");
const minutesElements = document.querySelector("[data-minutes]");
const secondsElements = document.querySelector("[data-seconds]");

const render = (days, hours, minutes, seconds) => {
    // Corrigido o uso do padStart
    DaysElement.innerHTML = String(days).padStart(2, "0");
    hoursElement.innerHTML = String(hours).padStart(2, "0");
    minutesElements.innerHTML = String(minutes).padStart(2, "0");
    secondsElements.innerHTML = String(seconds).padStart(2, "0");
};

const countdown = () => {
    const now = new Date();
    const nextYear = now.getFullYear() + 1;
    const targetDate = new Date(nextYear, 0, 1);

    const timeLeft = targetDate - now;

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
        (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );

    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    render(days, hours, minutes, seconds);
};

setInterval(countdown, 1000);


const lenis = new Lenis ({
    duration:1.2,
    easing:(t) => Math.min(1, 1.001 - Math.pow(2,-10*t)),
    orientation:'vertical' ,
    smoothwheel: true,
    wheeçMultiplier:1,
    smoothTouch:false,
    touchMultiplier: 2,
    infinite: false,
})

//get scroll value
lenis.on('scroll', (e) => [
    console.log(e)
])

function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
}

requestAnimationFrame(raf)



