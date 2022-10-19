// catch all element in index.html
let saturate = document.getElementById("saturate");
let contrast = document.getElementById("contrast");
let brightness = document.getElementById("brightness");
let sepia = document.getElementById("sepia");
let grayscale = document.getElementById("grayscale");
let blur = document.getElementById("blur");
let hueRotate = document.getElementById("hue-rotate");
let upload = document.getElementById("upload");
let download = document.getElementById("download");
let img = document.getElementById("img");
let reset = document.querySelector("span");
let imgBox = document.querySelector(".img-box");
let filters = document.querySelectorAll("ul li input");

function displayNone() {
  download.style.display = "none";
  imgBox.style.display = "none";
  reset.style.display = "none";
}
function displayBlock() {
  // download.style.display = "block";
  imgBox.style.display = "block";
  reset.style.display = "block";
}
function resetValue() {
  saturate.value = 100;
  contrast.value = 100;
  brightness.value = 100;
  sepia.value = 0;
  grayscale.value = 0;
  blur.value = 0;
  hueRotate.value = 0;
  img.style.filter = "none";
}
function UploadImage() {
  displayBlock();
  resetValue();
  let file = new FileReader();
  file.readAsDataURL(upload.files[0]);
  file.onload = () => {
    img.src = file.result;
  };
}
filters.forEach((filter) => {
  filter.addEventListener("input", function () {
    img.style.filter = `
    saturate(${saturate.value}%)
    contrast(${contrast.value}%)
    brightness(${brightness.value}%)
    sepia(${sepia.value}%)
    grayscale(${grayscale.value})
    blur(${blur.value}px)
    hue-rotate(${hueRotate.value}deg)
    `;
  });
});

reset.addEventListener("click",resetValue)
window.onload = displayNone;
upload.onchange = UploadImage;