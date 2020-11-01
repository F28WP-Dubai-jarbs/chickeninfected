
function moveLeft(){
    let left = parseInt(window.getComputedStyle(car).getPropertyValue("left"));
    left -= 100;
    if(left>=0){
        car.style.left = left + "px";
    }
}

function moveRight(){
    let left = parseInt(window.getComputedStyle(car).getPropertyValue("left"));
    left += 100;
    if(left<350){
        car.style.left = left + "px";
    }
}

document.addEventListener("keydown", event => {
    if(event.key==="ArrowLeft"){moveLeft();}
    if(event.key==="ArrowRight"){moveRight();}
})