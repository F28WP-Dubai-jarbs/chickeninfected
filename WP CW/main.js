// Adding an event listener that checks if the key is pressed
document.addEventListener("keydown", event => {
  if(event.key==="ArrowLeft"){moveLeft();}
  if(event.key==="ArrowRight"){moveRight();}
});

var character = document.getElementById("car");
// Function to move left
function moveLeft(){
    let left = parseInt(window.getComputedStyle(character).getPropertyValue("left"));
    left -= 100;
    if(left>=0){
        character.style.left = left + "px";
    }
}
// Function to move right
function moveRight(){
    let left = parseInt(window.getComputedStyle(character).getPropertyValue("left"));
    left += 100;
    if(left<400){
        character.style.left = left + "px";
    }
}


// Randomise the lane of the car blocks
var block = document.getElementById("block");
var counter = 0;
block.addEventListener('animationiteration', () => {
    var random = Math.floor(Math.random() * 4);
    left = random * 100;
    block.style.left = left + "px";
    counter++;
    document.getElementById("score").innerHTML = counter;
});

// A function to check for collision with other cars
setInterval(function(){
    var characterLeft = parseInt(window.getComputedStyle(character).getPropertyValue("left"));
    var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    var blockTop = parseInt(window.getComputedStyle(block).getPropertyValue("top"));
    if(characterLeft==blockLeft && blockTop<500 && blockTop>300){
        alert("Game over. Score: " + counter);
        block.style.animation = "none";
    }
},1);



// Function for phone users
document.getElementById("right").addEventListener("touchstart", moveRight);
document.getElementById("left").addEventListener("touchstart", moveLeft);
