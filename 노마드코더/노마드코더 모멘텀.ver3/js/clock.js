const clock = document.querySelector(".js-clock .clock_text");

function loadClock(){
    const currentTime = new Date();
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    const seconds = currentTime.getSeconds();
    const time = `${hours < 10? `0${hours}`: hours}:${
        minutes < 10? `0${minutes}`: minutes}:${
            seconds < 10? `0${seconds}`: seconds}`;
    clock.innerHTML=time;
    return;
}

function init(){
    loadClock();
    setInterval(loadClock,1000);
    return;
}
init();