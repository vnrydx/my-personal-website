const h2 = document.createElement("h2");
h2.textContent = "This content added by JavaScript";
document.querySelector("body").appendChild(h2);

const reverseButton = document.getElementById("reverse-button");

function clickTransformScaleSwap() {
    if (document.body.style.transform === "") {
        document.body.style.transform = "scaleX(-1)";
    }
    else if (document.body.style.transform === "scaleX(-1)") {
        document.body.style.transform = "scaleX(1)";
    }
    else if (document.body.style.transform === "scaleX(1)") {
        document.body.style.transform = "scaleX(-1)";
    }
}

reverseButton.addEventListener("click", clickTransformScaleSwap);

const penguinArray = [
    "https://banner2.cleanpng.com/20180203/tbq/kisspng-emperor-penguin-bird-clip-art-lovely-cliparts-5a765f66a72b07.8938724115177071106847.jpg",
    "https://howtodrawforkids.com/wp-content/uploads/2022/03/9-how-to-draw-a-cute-small-penguin.jpg",
    "https://artprojectsforkids.org/wp-content/uploads/2020/11/Penguin-rev.jpg",
    "https://m.media-amazon.com/images/I/61K5KW4x7-L.__AC_SX300_SY300_QL70_FMwebp_.jpg",
    "https://m.media-amazon.com/images/I/51Wr53Asv5S.__AC_SX300_SY300_QL70_FMwebp_.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbS2f_4D4izXKL7KroQbdXgahYKbyzr8ga6g&usqp=CAU"
]

let counter = 0

function changePenguinImg(e) {
    if (e.key === "ArrowRight") {
        if (counter <= (penguinArray.length - 2)) {
            document.getElementById("penguin").src=`${penguinArray[counter+1]}`;
            counter++;
            console.log("1");
        }
        else if (counter === (penguinArray.length - 1)) {
            counter = 0
            document.getElementById("penguin").src=`${penguinArray[counter]}`;
            console.log("2");
        }
    }
    else if (e.key === "ArrowLeft") {
        if (counter != 0) {
            document.getElementById("penguin").src=`${penguinArray[counter-1]}`;
            counter--;
            console.log("3");
        }
        else if (counter === 0) {
            counter = (penguinArray.length - 1);
            document.getElementById("penguin").src=`${penguinArray[counter]}`;
            console.log("4");
        }
    }
}

window.addEventListener("keydown", changePenguinImg);

/* Challenge #3 */

const textBoxInput = document.getElementById("text-box");

const submitTextButton = document.getElementById("submit-text-button");

function clickSubmitTextButtonAlert() {
    alert(`This is what you typed in the text box: ${textBoxInput.value}`);
}

submitTextButton.addEventListener("click", clickSubmitTextButtonAlert);

/* Challenge #4 */

const hueRotatingPenguin = document.getElementById("hue-rotating-penguin");

const mouseLocation = MouseEvent.clientX;

function hueRotatePenguin(e) {
    // hueRotatingPenguin.style.filter = `hue-rotate(${MouseEvent.clientX}deg)`; 

    let mouseXPositionZeroToThreeSixty = 360 * e.clientX / window.innerWidth

    hueRotatingPenguin.style.filter = `hue-rotate(${mouseXPositionZeroToThreeSixty}deg)`;
/*
    console.log("function HueRotatePenguin executed");
    console.log(`e.clientX: ${e.clientX}`);
    console.log(`window.innerWidth: ${window.innerWidth}`);
    console.log(`mouseXPositionZeroToThreeSixty: ${mouseXPositionZeroToThreeSixty}`);
    
*/ 
}

window.addEventListener("mousemove", hueRotatePenguin);

/* Challenge #5: 
When someone presses the button, put the text they've entered underneath the button. 
Bonus points if you also empty out the text field when that happens.
When additional messages are submitted, append them below rather than replacing them.
*/

const challenge5TextBox = document.getElementById("challenge-5-text-box");
const textFromTextBox = document.getElementById('challenge-5-values');
const submitTextButtonChallenge5 = document.getElementById("submit-text-button-challenge-5");

submitTextButtonChallenge5.addEventListener('click', updateValue);

function updateValue(e) {
    textFromTextBox.append(challenge5TextBox.value, "\n");
  challenge5TextBox.value = "";

}
