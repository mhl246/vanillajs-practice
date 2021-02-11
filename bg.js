const body = document.querySelector("body");
// backgronud image를 위해 body를 변수값으로 지정
const IMG_NUMBER = 12;
// random 값이 12임(사진이 12장이니까 12)

function paintImage(imgNumber) {
    const image = new Image();
    image.src = `images/${imgNumber + 1}.jpeg`;
    image.classList.add("bgImage");
    body.prepend(image);
}

function genRandom() {
    const number = Math.floor(Math.random() * IMG_NUMBER);
    return number;
    console.log(number);
}

function init() {
    const randomNumber = genRandom();
    paintImage(randomNumber);
}

init();