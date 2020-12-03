const title = document.querySelector("#title"),
      clicked_title = 'clicked';

function handleclicked(){
    title.classList.toggle(clicked_title);
}

function init(){
    title.addEventListener("click",handleclicked);
}
init();