const form = document.querySelector(".js-todo"),
      input = form.querySelector("input"),
      toDoList = document.querySelector(".js-todoList"),
      TODO_LS = 'toDo';

let toDo = []; // 할 일 목록이 많아질 것을 대비해 초반에 리셋 , const로 하면 변환이 안되서 let으로 지정


function deleteTodo(event){
    const delete_todo = event.target; // x모양 버튼을 이벤트 발생시 타겟팅 해줌
    const delete_li = delete_todo.parentNode; // tar    et의 parentNode인 li태그를 지정
    toDoList.removeChild(delete_li); // delete_li(li태그)를 삭제
    const clean = toDo.filter(function(filter_todo)
    {
        return filter_todo.id !== parseInt(delete_li.id); // clean과 filter가 하는 것은 filter_todo 함수가 체크된 item의 array를 주는 것
        //li에 없는 id를 지우는 것 (예를 들어 todolist가 4일때 지우면 3이됨. 그럼 지워진 item의 id를 완전히 삭제하는 것)
    });
    toDo = clean;
    saveToDo();
}

function saveToDo() {
   localStorage.setItem(TODO_LS,JSON.stringify(toDo)); // json stringify는 object를 string으로 변환 시켜줌. //Java Script Object Notation(자바스크립트 오브젝트 표기법)
}  

function paintToDo(text){
    const li = document.createElement("li"); 
    const del_btn = document.createElement("button");
    const span = document.createElement("span");
    span.innerText = text;
    const newID = toDo.length + 1;
    del_btn.innerHTML = "❌";
    del_btn.addEventListener("click",deleteTodo);
    li.appendChild(del_btn);
    li.appendChild(span);
    li.id = newID;
    toDoList.appendChild(li);
    const toDoArray = {text:text, id:newID}; // javascript 기본 특성은 문자열로 저장하려함 , 콘솔확인시 value값 object로 뜸
    toDo.push(toDoArray);
    saveToDo();
}

function handleSubmit(event){
    event.preventDefault();
    const toDoValue = input.value;
    paintToDo(toDoValue);
    input.value = ""; // 제출 후 입력 창 리셋
    
}

function loadToDo(){
    const load_toDo = localStorage.getItem(TODO_LS);
    if(load_toDo !== null)
    {
        const parseload_toDo = JSON.parse(load_toDo);
        parseload_toDo.forEach(function(parseTodo)
        {
            paintToDo(parseTodo.text);
        });
    }
}
    
function init(){
    loadToDo();
    form.addEventListener("submit",handleSubmit);
}
init();