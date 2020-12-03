const canvas = document.querySelector("#js-canvas");
const colors = document.getElementsByClassName("js-color");
const ctx = canvas.getContext('2d');
const range = document.getElementById("js-range");
const mode = document.getElementById("js-mode");
const save = document.getElementById("js-save");

const currentColor = "black";
const canvasSize = 700;

canvas.width = canvasSize; //실제 캔버스에 픽셀 사이즈를 주는것
canvas.height = canvasSize;

let painting = false;
let filling = false;

ctx.fillStyle = 'white';
ctx.fillRect(0 , 0 , canvasSize,canvasSize);
ctx.strokeStyle = currentColor; //그릴 선들의 색
ctx.fillStyle = currentColor;
ctx.lineWidth = 2.5; //그릴 선들의 선 두께

function startPainting(){
    painting = true;
}

function stopPainting(){
    painting = false;
}

function mouseupFN(event){
    painting = false;
}

function mousemoveFN(event){
    const x = event.offsetX; //캔버스안의 x좌표
    const y = event.offsetY;
    if(!painting)
    {
        ctx.beginPath(); //path를 만듬 (선의 시작점)
        ctx.moveTo(x,y); //괄호 안으로 옮김
    }
    else //클릭하는 순간 페인팅 중이게 됨
    {
        ctx.lineTo(x,y); //괄호 안의 값으로 선을 그림
        ctx.stroke(); //획을 그어줌
        // ctx.closePath(); 선을 닫아줌
    }

}

function handleModeClick(){
    if(filling===true)
    {
        filling = false;
        mode.innerText = "Fill";
    }    
    else
    {
        filling = true;
        mode.innerText = "Paint";
    }
}

function handleRangeChange(event){
    const size = event.target.value;
    ctx.lineWidth = size;
}

function handleColorClick(event){
    const color = event.target.style.backgroundColor;
    ctx.strokeStyle = color;
    ctx.fillStyle = color;
}

function handleCanvasClick(){
    if(filling)
    {
        ctx.fillRect(0 , 0 , canvasSize,canvasSize);
    }
}

function handleCM(event){
    event.preventDefault();
}

function handleSaveClick(event){
    const image = canvas.toDataURL(); //(image/jpeg)등으로 저장되는 이미지 형식 설정 가능 default값은 png
    const link = document.createElement("a"); //a태그 (주소 나타는 태그)
    link.href = image;
    link.download = "PaintJS[나이스]";
    link.click();
}

if(canvas){
    canvas.addEventListener("mousemove",mousemoveFN);
    canvas.addEventListener("mousedown",startPainting);
    canvas.addEventListener("mouseup",stopPainting);
    canvas.addEventListener("mouseleave",stopPainting);
    canvas.addEventListener("click",handleCanvasClick);
    canvas.addEventListener("contextmenu",handleCM)
}
    Array.from(colors).forEach(colors => colors.addEventListener("click",handleColorClick));

if(range)
{
    range.addEventListener("input",handleRangeChange);
}

if(mode)
{
    mode.addEventListener("click",handleModeClick);
}

if(save)
{
    save.addEventListener("click",handleSaveClick);
}