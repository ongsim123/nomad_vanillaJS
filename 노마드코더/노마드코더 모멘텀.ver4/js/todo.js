const todo = document.querySelector(".js-todo");
const input = document.querySelector(".js-todoInput");
const todolist = document.querySelector(".js-todoList");

let todoArray = [];

function keepTodo(){
    const stringArray = JSON.stringify(todoArray);
    localStorage.setItem("todoArray",stringArray);
}

function saveFN(text){
    const todoSave = {
        id: todoArray.length +1,
        value: text
    };
    todoArray.push(todoSave);
    keepTodo();
}

function deleteFN(event){
    const target = event.target;
    const li = target.parentElement;
    const ul = li.parentElement;
    const todoID = li.id;
    ul.removeChild(li);
    todoArray = todoArray.filter(function(toDo) {
        return toDo.id !== parseInt(todoID);
      });
      keepTodo();

}

function addToDo(text){
    const addtodo = document.createElement("li");
    addtodo.className = "add_todo";
    addtodo.id = todoArray.length + 1;
    const delbtn = document.createElement("span");
    delbtn.className = "del_btn";
    delbtn.innerHTML = "❌";
    delbtn.addEventListener("click",deleteFN);
    const label = document.createElement("label");
    label.innerHTML = text;
    addtodo.appendChild(delbtn);
    addtodo.appendChild(label);
    todolist.appendChild(addtodo);
    saveFN(text);
}

function submitFN(event){
    event.preventDefault();
    const value = input.value;
    input.value = "";
    addToDo(value);
}

function todoFN(){
    const todo_LS = localStorage.getItem("todoArray");
    if(todo_LS!==null)
    {
        const parsedTodo = JSON.parse(todo_LS);
        parsedTodo.forEach(function(addtodo){
        addToDo(addtodo.value);
        });
    }
    return;
}

function init(){
    todoFN();
}

todo.addEventListener("submit",submitFN);

init();