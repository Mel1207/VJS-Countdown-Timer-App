const checkbox = document.querySelector('#checkbox');
const countdown = () => {
    const countDate = new Date('January 20, 2022 00:00:00').getTime()
    const dateNow = new Date().getTime();
    const gap = countDate - dateNow;

    // calc regular times
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    // calc all
    const textDay = Math.floor( gap / day );
    const textHour = Math.floor( (gap % day) / hour );
    const textMinute = Math.floor((gap % hour) / minute);
    const textSecond = Math.floor((gap % minute) / second);

    // console.log(textDay, textHour, textMinute, textSecond)

    document.querySelector('.day').innerText = textDay;
    document.querySelector('.hour').innerText = textHour;
    document.querySelector('.minute').innerText = textMinute;
    document.querySelector('.second').innerText = textSecond;
};

// create an interval every time and function will triggered to run
setInterval(countdown, 1000);
// countdown();

checkbox.addEventListener('click', () => {
    // change theme color 
    const body = document.querySelector('body');
    body.classList.toggle('darken');
});