const canvas = document.querySelector("#js-canvas");
const range = document.getElementById("js-range");
const mode = document.getElementById("js-mode");
const save = document.getElementById("js-save");
const colors = document.getElementsByClassName("js-color");
const ctx = canvas.getContext('2d');

let painting = false;
let filling = false;

const currentColor = 'black';
const canvasSize = 700; //캔버스에 그려지는 픽셀 지정
canvas.width = canvasSize;
canvas.height = canvasSize;


ctx.fillStyle = 'white';
ctx.strokeStyle = currentColor;
ctx.fillStyle = currentColor;
ctx.lineWidth = 2.5;


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

function startPainting(){
    painting = true;
}

function stopPainting(){
    painting = false;
}


function handleColorClick(event){
    const color = event.target.style.backgroundColor;
    ctx.strokeStyle = color;
    ctx.fillStyle = color;
}

function handleCTX(){
    event.preventDefault();
}

function handleCanvasClick(){
    if(filling)
    {
        ctx.fillRect(0,0,canvasSize,canvasSize);
    }
}

function handleModeClick(event){
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
    const image = canvas.toDataURL();
    const link = document.createElement("a");
    link.href = image;
    link.download = "그림판";
    link.click();
}

function handleRangeChange(event){
    const size = event.target.value;
    ctx.lineWidth = size;
}
if(canvas)
{
    canvas.addEventListener("mousemove",mousemove);
    canvas.addEventListener("mousedown",startPainting);
    canvas.addEventListener("mouseup",stopPainting);
    canvas.addEventListener("mouseleave",stopPainting);
    canvas.addEventListener("contextmenu",handleCTX);
    canvas.addEventListener("click",handleCanvasClick);

}

Array.from(colors).forEach(colors => colors.addEventListener("click",handleColorClick));

if(mode)
{
    mode.addEventListener("click",handleModeClick);
}

if(save)
{
    save.addEventListener("click",handleSaveClick);
}

if(range)
{
    range.addEventListener("input",handleRangeChange);
}