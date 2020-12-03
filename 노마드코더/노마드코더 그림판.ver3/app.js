const canvas = document.querySelector("#js-canvas"),
      range = document.getElementById("js-range"),
      mode = document.getElementById("js-mode"),
      save = document.getElementById("js-save"),
      colors = document.getElementsByClassName("js-color"),
      ctx = canvas.getContext('2d');

let painting = false,
    filling = false;

const currentColor = "black",
      canvasSize = 1000;

canvas.width = canvasSize;
canvas.height = 700;

ctx.fillStyle = 'white';
ctx.lineWidth = 2.5;
ctx.fillStyle = currentColor;
ctx.strokeStyle = currentColor;

function startPainting(){
    painting = true;
}

function stopPainting(){
    painting = false;
}

function mousemove(event){
    const x = event.offsetX;
    const y = event.offsetY;
    if(!painting)
    {
        ctx.beginPath();
        ctx.moveTo(x,y);
    
    }    
    else
    {
        ctx.lineTo(x,y);
        ctx.stroke();
    }
}

function contextmenu(){
    event.preventDefault();
}

function handleCanvasClick(){
    if(filling)
    {
        ctx.fillRect(0,0,canvasSize,canvasSize);
    }
}

function handleRangeChange(event){
    const strokeSize = event.target.value;
    ctx.lineWidth = strokeSize;
}

function handleModeClick(){
    if(filling===true)
    {
        filling = false;
        mode.innerText = "fill";
    }
    else
    {
        filling = true;
        mode.innerText = "paint";
    }
}

function handleSaveClick(event){
    const image = canvas.toDataURL("image/jpeg");
    const link = document.createElement("a");
    link.href = image;
    link.download = "그림";
    link.click();
}

function handleColorClick(event){
    const color = event.target.style.backgroundColor;
    ctx.strokeStyle = color;
    ctx.fillStyle = color;
}

if(canvas){
    canvas.addEventListener("mousedown",startPainting);
    canvas.addEventListener("mouseup",stopPainting);
    canvas.addEventListener("mouseleave",stopPainting);
    canvas.addEventListener("mousemove",mousemove);
    canvas.addEventListener("contextmenu",contextmenu);
    canvas.addEventListener("click",handleCanvasClick);
}

if(range){
    range.addEventListener("input",handleRangeChange);
}

if(mode){
    mode.addEventListener("click",handleModeClick);
}

if(save){
    save.addEventListener("click",handleSaveClick);
}

Array.from(colors).forEach(colors=>colors.addEventListener("click",handleColorClick));