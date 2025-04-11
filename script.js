// Text Changing Function
function changeText() {
    const textElement = document.getElementById("targetText");
    textElement.textContent = "Text successfully changed!";
}

// Style Changing Function
function changeStyle() {
    const styleBox = document.getElementById("styleBox");
    styleBox.style.backgroundColor = 
        styleBox.style.backgroundColor === "blue" ? "red" : "blue";
}

// Element Toggle Function
let elementExists = false;

function toggleElement() {
    const container = document.getElementById("elementContainer");
    
    if(elementExists) {
        container.removeChild(container.firstElementChild);
        elementExists = false;
    } else {
        const newElement = document.createElement("p");
        newElement.textContent = "New element created!";
        container.appendChild(newElement);
        elementExists = true;
    }
}

// Event Setup
document.getElementById("textButton").addEventListener("click", changeText);
document.getElementById("styleButton").addEventListener("click", changeStyle);
document.getElementById("elementButton").addEventListener("click", toggleElement);