const form = document.querySelector(".js-form"), 
input = form.querySelector("input"),
gretting = document.querySelector(".js-gretting");

const USER = "currentUser";
const SHOWING = "showing";

function paintGretting(text){
    form.classList.remove(SHOWING);
    gretting.classList.add(SHOWING);
    gretting.innerText = `Hello ! ${text}.`;
}

function saveName(text) {
    localStorage.setItem(USER,text);
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = input.value;
    paintGretting(currentValue);
    saveName(currentValue);
}

function askName() {
    form.classList.add(SHOWING);
    form.addEventListener("submit", handleSubmit);
}

function loadName() {
    const currentUser = localStorage.getItem(USER);
    if(currentUser === null){
        askName();
    }
    else{
        paintGretting(currentUser);
    }
}


function init() {
    loadName();
}
init();