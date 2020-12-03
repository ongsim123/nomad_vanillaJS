const todo = document.querySelector(".js-todo"),
      input = todo.querySelector("input"),
      todolist = document.querySelector(".js-todoList"),
      TODOARRAY = 'todoArray';
let todoArray = [];

function deleteTodo(event){
    const deleteTodo = event.target;
    const deleteTodo_li = deleteTodo.parentNode;
    todolist.removeChild(deleteTodo_li);
    const clean = todoArray.filter(function (filter_todoArray){
        return filter_todoArray.id !== parseInt(deleteTodo_li.id) ;       
    });
    todoArray = clean;
    saveTodo();
}

function saveTodo(){
    localStorage.setItem(TODOARRAY,JSON.stringify(todoArray));
}

function paintTodo(text){
    const li = document.createElement("li");
    const deleteButton = document.createElement("button");
    const span = document.createElement("span");
    li.appendChild(deleteButton);
    li.appendChild(span);
    li.classList.add("css-js-todolist")
    todolist.appendChild(li);
    deleteButton.innerHTML = "❌";
    deleteButton.classList.add("css-js-todolist-deletebutton");
    deleteButton.addEventListener("click",deleteTodo);
    span.innerHTML = text;
    const ID = todoArray.length + 1;
    li.id = ID;
    const todoArray_ID = {text:text, id:ID};
    todoArray.push(todoArray_ID);
    saveTodo();
}

function loadTodo(){
    const currentTodo = localStorage.getItem(TODOARRAY);
    if(currentTodo !== null)
    {
        const parseload_toDo = JSON.parse(currentTodo);
        parseload_toDo.forEach(function(parseTodo)
        {
            paintTodo(parseTodo.text);
        });
    }
}

function submitFN(event){
    event.preventDefault();
    const todoValue = input.value;
    paintTodo(todoValue);
    input.value = "";
}

function init(){
    loadTodo();
}
todo.addEventListener("submit",submitFN);
init();