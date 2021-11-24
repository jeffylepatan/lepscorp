const slowmo = document.getElementById("head-image");

window.addEventListener("scroll", function () {
    let offset =  window.pageYOffset;
    slowmo.style.backgroundPositionY = offset * 0.7 + "px";
})