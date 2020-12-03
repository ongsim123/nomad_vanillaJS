const bodyBackground = document.querySelector("body");

const image_number = 10;

function paintBackgroundimage(IMG_NUM){
    const image = new Image();
    image.src = `image/${IMG_NUM+1}.jpg`;
    image.classList.add("css-background");
    bodyBackground.appendChild(image);
}

function randomNumber_FN(){
    const number = Math.floor(Math.random()*image_number);
    return number;
}

function init(){
    const randomNumber = randomNumber_FN();
    paintBackgroundimage(randomNumber);
}
init();