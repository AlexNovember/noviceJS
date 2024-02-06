const a = window.innerWidth;
const b = window.innerHeight;

console.log(a, b);

const pageWidth = document.documentElement.scrollWidth
const pageHeight = document.documentElement.scrollHeight
console.log(pageHeight, pageWidth);

const heightOutput = document.querySelector("#height");
const widthOutput = document.querySelector("#width");

function reportWindowSize() {
    heightOutput.textContent = window.innerHeight;
    widthOutput.textContent = window.innerWidth;
}

window.onresize = reportWindowSize;