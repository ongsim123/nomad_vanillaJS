const toDoForm = document.querySelector(".js-toDoForm"),
      toDoInput = toDoForm.querySelector("input"),
      toDoList = document.querySelector(".js-toDoList");

const TODOS_LIST = "toDos";

var toDos = [];

function deleteToDo(event){
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);
    const cleanToDos = toDos.filter(function(todo){
        return todo.id !== parseInt(li.id);//parseInt 는 스트링을 숫자로 바꿔준다.
    });
    toDos = cleanToDos;
    saveToDos();
}

function saveToDos() {
    localStorage.setItem(TODOS_LIST,JSON.stringify(toDos));//JSON은 자바스크립트의 오브젝트를 문자열로 바꿔주는 기능이다.(JavaScript Object Noation의 약자)
}

function paintToDo(text){
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const span = document.createElement("span");
    const newId = toDos.length + 1;
    delBtn.innerText = "❌";
    delBtn.addEventListener("click",deleteToDo);
    span.innerText = text;
    li.appendChild(delBtn); 
    li.appendChild(span);    
    li.id = newId;
    toDoList.appendChild(li);
    const toDoObj = {
        text : text,
        id : newId
    };
    toDos.push(toDoObj);
    saveToDos();//푸쉬 후에 호출하기, 안 그러면 아무것도 저장이 안뎀.
}


function handleSubmit(event) {
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value="";
}

function loadToDos() {
    const loadedtoDos = localStorage.getItem(TODOS_LIST);
    if(loadedtoDos !== null)
    {
        const parsedToDos = JSON.parse(loadedtoDos);
        parsedToDos.forEach(function(todo){//배열 각각의 요소에 함수를 실행시키는 forEach
            paintToDo(todo.text);
        });
    }
}

function init(){
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit);//submit쓸 때 꼭 대문자 소문자 신경쓰기
}
init();