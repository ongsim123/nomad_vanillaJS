const form = document.querySelector(".js-todo"),
      input = form.querySelector("input"),
      todoList = document.querySelector(".js-todoList");
      TODO_ARRAY = 'todoArray';

let todoArray = [];


function deleteTodo(event){
    const delete_event = event.target;
    const delete_li = delete_event.parentNode;
    todoList.removeChild(delete_li);
    const clean = todoArray.filter(function(todoArray_clean_filter)
    {
        return todoArray_clean_filter.id !== parseInt(delete_li.id);
    });
    todoArray = clean;
    saveTodo();
}

function saveTodo(){
    localStorage.setItem(TODO_ARRAY, JSON.stringify(todoArray));
}

function paintTodo(text){
    const li = document.createElement("li");
    const btn = document.createElement("button");
    const span = document.createElement("span");
    span.innerText = text;
    btn.innerHTML = "❌";
    btn.addEventListener("click",deleteTodo)
    li.appendChild(btn);
    li.appendChild(span);
    const newid = todoArray.length + 1;
    li.id = newid;
    todoList.appendChild(li);
    const todoArray_array = {text:text, id:newid};
    todoArray.push(todoArray_array);
    saveTodo();
}

function handleSubmit(event){
    event.preventDefault();
    const todoValue = input.value;
    paintTodo(todoValue);
    input.value = "";
}

function loadTodo(){
    const load_Todo = localStorage.getItem(TODO_ARRAY);
    if(load_Todo !== null)
    {
        const parseload_toDo = JSON.parse(load_Todo);
        parseload_toDo.forEach(function(parseTodo)
        {
            paintTodo(parseTodo.text);
        });
    }
}


function init(){
    loadTodo();
}
form.addEventListener("submit",handleSubmit);
init();