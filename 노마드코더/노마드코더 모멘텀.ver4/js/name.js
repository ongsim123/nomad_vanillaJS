const name = document.querySelector(".js-name");


function handleSubmit(event){
    event.preventDefault();
    const form = event.target;
    const input = form.querySelector("input");
    const value = input.value;
    localStorage.setItem("username",value);
    showName(value);
}

function askName(){
    const input = document.createElement("input");
    input.placeholder = "Type Your Name😁";
    input.type = "text";
    input.className = "nameInput";
    const form = document.createElement("form");
    form.addEventListener("submit",handleSubmit);
    form.appendChild(input);
    name.appendChild(form);
}

function showName(user){
    name.innerHTML = "";
    const div = document.createElement("div");
    div.className = "nameText";
    div.innerText = `Hello! ${user}`;
    name.appendChild(div);
}

function nameFN(){
    const user = localStorage.getItem("username");
    if(user===null)
    {
        askName();
    }
    else
    {
        showName(user);
    }
}

function init(){
    nameFN();
}
init();