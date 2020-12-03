const clock = document.querySelector(".js-clock .clock__text");

function getTime(){
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const time = `${
    hours < 10 ? `0${hours}` : hours}:${
    minutes < 10 ? `0${minutes}` : minutes}:${
    seconds < 10 ? `0${seconds}` : seconds}`;

    clock.innerText = time;
    return;
}
// +(표현식) 대신에 백틱 기호 사이에 ${}를 추가해 간결히 표현
//${}안에서의 ?은 조건문 -사용법--> 조건문 ? if:else

function init(){
    getTime();
    setInterval(getTime,1000);
    return;
}

init();