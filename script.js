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