const nameContainer = document.querySelector(".js-name");

function paintName(name){
    nameContainer.innerHTML ="";
    const title = document.createElement("span");
    title.className = "name_text";
    title.innerHTML = `Hello ! ${name}.`;
    nameContainer.appendChild(title);
}

function handleSubmit(event){
    event.preventDefault();
    const name = event.target;
    const input = name.querySelector("input");
    const value = input.value;
    localStorage.setItem("username",value);
    paintName(value);
}

function paintAsk(){
    const input = document.createElement("input");
    input.type = "text";
    input.placeholder = "Type Your Name.";
    input.className = "name_input";
    const name = document.createElement("form");
    name.addEventListener("submit",handleSubmit);
    name.appendChild(input);
    nameContainer.appendChild(name);
}

function loadName() {
    const currentUser = localStorage.getItem("username");
    if(currentUser === null)
    {
        paintAsk();
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