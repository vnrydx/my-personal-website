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
1. When someone presses the button, put the text they've entered underneath the button. 
2. Bonus points if you also empty out the text field when that happens.
3. When additional messages are submitted, append them below rather than replacing them.
4. Make it so that the text in the to do list for each new entry gets bigger.
5. When an item gets added to the list, add a checkbox to the left side of the item.
6. When a checkbox is checked, put a strike through the text of the item.
7. For bonus points, if a checkbox gets unchecked, remove the strike through.
8. Update the button to use something other than the "click" event for triggering its behavior.

Incomplete:
9. Update the checkboxes to use something other than "click" events for triggering their behavior. They should still work when you click on them, but they should also work if you use keyboard navigation to interaction.
*/

const challenge5TextBox = document.getElementById("challenge-5-text-box");
const toDoList = document.getElementById("to-do-list");
const submitTextButtonChallenge5 = document.getElementById("submit-text-button-challenge-5");

submitTextButtonChallenge5.addEventListener('click', updateValue);
challenge5TextBox.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        submitTextButtonChallenge5.click();
    }
});

let textSizeIncrementor = 16;

function updateValue() {
    let newEntry = document.createElement("span");
    
    newEntry.textContent = challenge5TextBox.value;
    newEntry.style.fontSize = `${textSizeIncrementor}px`;

    const toDoListItemDiv = document.createElement("div");
    toDoListItemDiv.classList.add("to-do-list-div");

    const checkBox = document.createElement('input');
    checkBox.type = "checkbox";

    toDoList.append(toDoListItemDiv);

    toDoListItemDiv.append(checkBox, " ", newEntry);

    function clickCheckBox () {
        if (checkBox.checked) {
            newEntry.classList.add("line-through-text");
        }
        else {
            newEntry.classList.remove("line-through-text");
        }
    }

    checkBox.addEventListener('click', clickCheckBox);

    textSizeIncrementor++;

    challenge5TextBox.value = "";
}

/* Challenge #6:
Create a text box with a button for submission.
Use the dog.CEO API to display a random image of a dog of the breed submitted to the text box.
API URL: "https://dog.ceo/api/breeds/image/random"
*/

const challenge6Button = document.getElementById("submit-text-button-challenge-6");
const challenge6TextBox = document.getElementById("challenge-6-text-box");
const dogArea = document.getElementById("challenge-6-dog-pic-area");

function clickChallenge6Button () {
    let dogBreed = challenge6TextBox.value;
    dogBreed = dogBreed.toLowerCase();
    dogBreed = dogBreed.replace(/ /g, "");
    dogBreed = dogBreed.replace(/[^a-z]/gi, "");

    if (dogBreed === "") {
        dogArea.textContent = "";
        dogArea.append("You forgot to type a dog breed!");
    }

    else if (dogBreed != "") {
        dogArea.textContent = "";
        const dogPic = document.createElement("img");

        fetch(`https://dog.ceo/api/breed/${dogBreed}/images/random`)
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                    if (data.status === "error") {
                        dogArea.innerHTML = "<p>I'm sorry, but that either isn't a dog breed, or it isn't a dog breed included in the <a href=\"https://dog.CEO\">dog.CEO</a> API.</p>"
                    }
                    else {
                        const dogPicUrl = data.message;
                        dogPic.src = dogPicUrl;
                        dogArea.append(dogPic);
                    }
            });
    }
}

challenge6Button.addEventListener('click', clickChallenge6Button)

/*
Challenge #7:
1. As in the last assignment, use a text box and a button to accept user input. In this case, the user should input the name of a subreddit.
2. Use the Reddit API to fetch the top ten posts in that subreddit. This API is very poorly documented, but the request would look like this for r/memes: https://www.reddit.com/r/memes/top.json?limit=10
3. Display a list of the titles of all ten posts with a link to each post.
4. If you'd like to display additional information, feel free to embellish on the assignment.
*/

const challenge7Button = document.getElementById("submit-text-button-challenge-7");
const challenge7TextBox = document.getElementById("challenge-7-text-box");
const challenge7Output = document.getElementById("challenge-7-output");

function clickChallenge7Button () {
    const userInput = challenge7TextBox.value;

    if (userInput === "") {
        challenge7Output.textContent = "";
        challenge7Output.append("You didn't submit any text!");
    }

    else if (userInput != "") {
        challenge7Output.textContent = "";
        const challenge7OutputOrderedList = document.createElement("ol");

        fetch(`https://www.reddit.com/r/${userInput}/top.json?limit=10`)
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                    if (data.status === "error") {
                        dogArea.innerHTML = "<p>That apparently isn't a subreddit.</p>"
                    }
                    else {
                        /*
                        const postTitle = data.title;
                        const postUrl = data.address;
                        postLink.href = postUrl;
                        challenge7Output.append(challenge7OutputOrderedList);
                        challenge7OutputOrderedList.append(postTitle, postUrl);
                        */
                       console.log(`https://www.reddit.com${data.children[0].data.permalink}`)
                    }
            });
    }
}

challenge7Button.addEventListener('click', clickChallenge7Button)