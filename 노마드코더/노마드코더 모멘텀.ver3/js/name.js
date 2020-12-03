const name = document.querySelector(".js-name");


function paintName(USER_NAME){
    name.innerHTML = "";
    const title = document.createElement("span");
    title.innerHTML = `Hello ! ${USER_NAME}`;
    name.appendChild(title);
}

function submitFN(event){
    event.preventDefault();
    const name = event.target;
    const input = name.querySelector("input");
    const value = input.value;
    localStorage.setItem("username",value);
    paintName(value);
}

function askName(){
    const input = document.createElement("input");
    input.type = "text";
    input.placeholder = "이름을 입력하세요.";
    const nameSubmit = document.createElement("form");
    nameSubmit.addEventListener("submit",submitFN);
    nameSubmit.appendChild(input);
    name.appendChild(nameSubmit);
}

function loadName(){
    const currentUser = localStorage.getItem("username");
    if(currentUser === null)
    {
        askName();
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