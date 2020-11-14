var bird = new Image();
var bg = new Image();

bird.src = "images/flappybird.png";
bg.src = "images/flappybirdbackground.png";

var gap = 85;
var constant;

var bX = 10;
var bY = 150;

var gravity = 1.5;

var score = 0;

var cvs = document.getElementById("canvas");
var ctx = cvs.getContext("2d");

document.addEventListener("keydown",moveUp);

function moveUp(){
    bY -= 25;
    fly.play();
}

var pipe = [];

pipe[0] = {
    x : cvs.width,
    y : 0
};