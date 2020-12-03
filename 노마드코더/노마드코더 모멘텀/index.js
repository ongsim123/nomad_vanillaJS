const title = document.querySelector("#title");

const CLICKED_CLASS = "clicked";

function handleclick(){
/*    const hasClass = title.classList.contains(CLICKED_CLASS);
    if(hasClass)
    {
        title.classList.remove(CLICKED_CLASS);
    }    
    else
    {
        title.classList.add(CLICKED_CLASS);
    }
}
toggle로 똑같은 기능을 수행시킬 수 있다.
*/
title.classList.toggle(CLICKED_CLASS);
}
function init(){
title.addEventListener("click",handleclick);
}
init();



