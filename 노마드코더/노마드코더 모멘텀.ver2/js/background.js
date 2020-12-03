const body = document.querySelector('body'),
      image_number = 3;

function paintImage(imagenumber){
    const image = new Image();
    image.src = `jpg/${imagenumber+1}.jpg`; // 난수가 0이 생성될 수 있으므로 +1해준것
    body.appendChild(image);
    image.classList.add("bgimage");
}

function randomNumber(){
    const number = Math.floor(Math.random()*image_number); // Math함수는 random(난수생성),floor(버림),ceiling(올림)이 있다. *옆에는 숫자로 그 숫자까지 난수 발생
    return number;
}

function init(){
    const randomnumber = randomNumber();
    paintImage(randomnumber);
}
init();