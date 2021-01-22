const container = document.getElementById("container");
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const btn4 = document.getElementById("btn4");
const btn5 = document.getElementById("btn5");

window.addEventListener("load", setDefaultGrid);
btn1.addEventListener("click", changeSize);
btn2.addEventListener("click", eraseGrid);
btn3.addEventListener("click", setBlack);
btn4.addEventListener("click", setRainbow);
btn5.addEventListener("click", setEraser);

function setDefaultGrid() {
    setGridSize(16);
    fillGrid(16);
    eraseGrid();
}

function setGridSize(size) {
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
}

function fillGrid(size) {
    for (let i = 0; i < size * size; i++) {
        const div = document.createElement("div");
        div.classList = "grid";
        div.addEventListener("mouseover", setDefault);
        container.appendChild(div);
    }
}

function setDefault(e) {
    e.target.style.backgroundColor = "black";
}

function setBlack() {
    const containerChildren = document.getElementById("container").childNodes;
    for (let i = 0; i<containerChildren.length; i++) {
        containerChildren[i].addEventListener("mouseover", function(e) {
            e.target.style.backgroundColor = "black";
        });
    }
}

function setRainbow() {
    const containerChildren = document.getElementById("container").childNodes;
    for (let i = 0; i<containerChildren.length; i++) {
        containerChildren[i].addEventListener("mouseover", function(e) {
            e.target.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;;
        });
    }
}

function setEraser() {
    const containerChildren = document.getElementById("container").childNodes;
    for (let i = 0; i<containerChildren.length; i++) {
        containerChildren[i].addEventListener("mouseover", function(e) {
            e.target.style.backgroundColor = "white";
        });
    }
}

function changeSize() {
    let newSize = prompt("Enter new size");
    if (newSize !== null) {
      newSize = parseInt(newSize);
      if (newSize < 1 || newSize > 64 || Number.isNaN(newSize)) {
        alert("Enter a number from 1-64 range");
        changeSize();
      } else {
        clearGrid();
        setGridSize(newSize);
        fillGrid(newSize);
        eraseGrid();
      }
    }
  }

function eraseGrid(e) {
    const containerChildren = document.getElementById("container").childNodes;
    for (let i = 0; i<containerChildren.length; i++) {
        containerChildren[i].style.backgroundColor = "white";
    }
}

function clearGrid() {
    const gridArray = Array.from(container.childNodes);
    gridArray.forEach((item) => {
        container.removeChild(item);
    })
}