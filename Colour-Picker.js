const result = document.querySelector(".result input");
const copyBtn = document.getElementById("copy-btn");
const sliders = document.querySelectorAll(".wrapper input[type='range']");
const rColor = document.getElementById("red");
const gColor = document.getElementById("green");
const bColor = document.getElementById("blue");

let generateColor = () => {
  let rColorValue = rColor.value;
  let gColorValue = gColor.value;
  let bColorValue = bColor.value;

  let finalColor = `rgb(${rColorValue}, ${gColorValue}, ${bColorValue})`;
  result.value = finalColor;
  document.body.style.backgroundColor = finalColor;
};

let copyColorCode = () => {
  result.select();
  document.execCommand("copy");
  copyBtn.innerText = "Copied!";
  setTimeout(() => {
    copyBtn.innerText = "Copy Color Code";
  }, 1000);
};

sliders.forEach((inp) => {
  inp.addEventListener("input", generateColor);
});
window.addEventListener("load", generateColor);
copyBtn.addEventListener("click", copyColorCode);


