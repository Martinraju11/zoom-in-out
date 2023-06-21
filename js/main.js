var zoomIn = document.getElementById("zoom-in");
var zoomOut = document.getElementById("zoom-out");
var pic = document.getElementById("pic");

var wd = pic.width;

zoomIn.addEventListener("click", function () {
    var width = pic.width;
    pic.style.width = (width + 20) + "px";
    if (pic.width === wd + 100) {
        alert("Reached maximun zoom-in size");
    }

})

zoomOut.addEventListener("click", function () {
    var width = pic.width;
    pic.style.width = (width - 20) + "px";

    if (pic.width === wd - 100) {
        alert("Reached minimum zoom-out size");
    }
})