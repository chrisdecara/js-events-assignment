let clownimage = document.querySelector('#image1');
clownimage.onclick = () => {
    if (clownimage.style.filter === "brightness(25%)") {
        clownimage.style.filter = "brightness(100%)";
    } else {
        clownimage.style.filter = "brightness(25%)";
    }
    }

let mannequinimage = document.querySelector('#image2');
mannequinimage.onmouseover = () => {
mannequinimage.style.transform = "rotate(180deg)";
}
mannequinimage.onmouseleave = () => {
    mannequinimage.style.transform = "rotate(0deg)";
}