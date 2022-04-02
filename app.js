const canvas = document.querySelector("#jsCanvas");
const colors = document.querySelectorAll(".jsColor")
const range = document.querySelector("#jsRange");
const mode = document.querySelector("#jsMode");
const clear = document.querySelector("#jsClear");
const wipe = document.getElementById("jsWipe");
const ctx = canvas.getContext("2d");

const INITIAL_COLOR = "#2c2c2c";
const CANVAS_SIZE = 500;
const ONCOLOR = "#F6F5E4";


let wiping = false;
let painting = false;
let filling = false;
let color = INITIAL_COLOR;

canvas.width = CANVAS_SIZE;
canvas.height = CANVAS_SIZE;

ctx.strokeStyle = INITIAL_COLOR;
ctx.fillStyle = INITIAL_COLOR;
ctx.lineWidth = 2.5;


function startPainting() {
    painting = true;
}

function stopPainting() {
    painting = false;
}

function onMouseMove(event) {
    const x = event.offsetX;
    const y = event.offsetY;

    if (!painting && !wiping) {
        ctx.beginPath();
        ctx.moveTo(x, y);
    } else if (painting && !wiping) {
        ctx.lineTo(x, y);
        ctx.stroke();
    } else if (!painting && wiping) {
        ctx.beginPath();
        ctx.moveTo(x, y);
    }
    else if (painting && wiping) {
        ctx.lineTo(x, y);
        ctx.stroke();
    }
}



function handleColorClick(event) {

    color = event.target.style.backgroundColor;
    ctx.strokeStyle = color;
    ctx.fillStyle = color;

}


function handleModeChange(event) {
    const size = event.target.value;
    ctx.lineWidth = size;
}

function handleModeClick() {
    if (filling === true) {
        filling = false;
        mode.style.backgroundColor = "white";
    } else {
        filling = true;
        mode.style.backgroundColor = ONCOLOR;
    }
}

function handleCanvasClick() {
    if (filling) {
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    }
}


function handleClearClick() {
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
}

function handleWipe() {
    if (wiping) {
        ctx.strokeStyle = color;
        wiping = false;
        wipe.style.backgroundColor = "white";
    } else {
        ctx.fillStyle = "white";
        ctx.strokeStyle = "white";
        wiping = true;
        wipe.style.backgroundColor = ONCOLOR;
    }
}

if (canvas) {
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mousedown", startPainting);
    canvas.addEventListener("mouseup", stopPainting);
    canvas.addEventListener("mouseleave", stopPainting);
    canvas.addEventListener("click", handleCanvasClick);
}


Array.from(colors).forEach((color) => color.addEventListener("click", handleColorClick));

if (range) {
    range.addEventListener("input", handleModeChange);
}

if (mode) {
    mode.addEventListener("click", handleModeClick);
}

if (clear) {
    clear.addEventListener("click", handleClearClick);
}

if (wipe) {
    wipe.addEventListener("click", handleWipe);
}

