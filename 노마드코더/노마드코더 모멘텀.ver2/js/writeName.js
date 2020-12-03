const nameContainer = document.querySelector(".js-name"),
      input = nameContainer.querySelector("input"),
      greeting = document.querySelector(".js-greetings");

const user_stroage = "currentUser",
      SHOWING_CN = 'showing';
//Class 호출 변수

function handleSubmit(event){
    event.preventDefault();
    const value = input.value;
    paintName(value);
    localStorage.setItem(user_stroage,value);
}

function paintAskName(){
    nameContainer.classList.add(SHOWING_CN);
    nameContainer.addEventListener("submit",handleSubmit);
}

function paintName(name){
    nameContainer.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `Hello ! ${name}.`;

}

function loadName(){
    const currentUser = localStorage.getItem(user_stroage);
    if(currentUser === null)
    {
        paintAskName();
    }
    else
    {
        paintName(currentUser);
    }
}

function init(){

    loadName();
}

init();