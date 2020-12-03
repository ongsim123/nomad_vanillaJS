const backgroundImage = document.querySelector("body");
const imageNumber = 12;

function loadBackground(img_num){
    const image = new Image();
    image.src = `image/${img_num+1}.jpg`;
    image.classList.add("css-background");
    backgroundImage.appendChild(image);
}

function makeRandomnumber(){
    const random = Math.floor(Math.random()*imageNumber);
    return random;
}

function init(){
    const randomnumber = makeRandomnumber();
    loadBackground(randomnumber);
}
init();