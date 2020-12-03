const clock = document.querySelector(".js-clock .js-clockText");

function clockFN(){
    const now = new Date();
    const hours = now.getHours(),
          minutes = now.getMinutes();
    const time = `${hours<10? `0${hours}`:hours}:${minutes<10? `0${minutes}`:minutes}`;
    clock.innerHTML = time;
    return;
}

function init(){
    clockFN();
    setInterval(clockFN,1000);
    return;
}
init();