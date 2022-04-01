const canvas = document.querySelector("#jsCanvas");
const colors = document.querySelectorAll(".jsColor")
const range = document.querySelector("#jsRange");
const ctx = canvas.getContext("2d");


canvas.width = 600;
canvas.height = 600;
ctx.strokeStyle = "#2c2c2c";
ctx.lineWidth = 2.5;


let painting = false;

function startPainting() {
    painting = true;
}

function stopPainting() {
    painting = false;
}

function onMouseMove(event) {
    const x = event.offsetX;
    const y = event.offsetY;
    if (!painting) {
        ctx.beginPath();
        ctx.moveTo(x, y);
    } else {
        ctx.lineTo(x, y);
        ctx.stroke();
    }
}

function handleColorClick(event) {
    const color = event.target.style.backgroundColor;
    ctx.strokeStyle = color;
}

function handleModeChange(event) {
    const size = event.target.value;
    ctx.lineWidth = size;
}


if (canvas) {
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mousedown", startPainting);
    canvas.addEventListener("mouseup", stopPainting);
    canvas.addEventListener("mouseleave", stopPainting);
}

Array.from(colors).forEach((color) => color.addEventListener("click", handleColorClick));

if (range) {
    range.addEventListener("input", handleModeChange);
}