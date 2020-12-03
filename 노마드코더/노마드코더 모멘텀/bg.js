const body = document.querySelector('body');

const IMG_NUM = 3;

function paintImage(imgNumber){
    const image = new Image();
    image.src = `${imgNumber + 1}.jpg`;
    image.classList.add('bgimage');
    body.appendChild(image);

}

function genRandom(){
    const number = Math.floor(Math.random()*3);
    return number;
}

function init(){
    const randomNumber = genRandom();
    paintImage(randomNumber)
}
init();