
let obstacleTimers = [];
let gameStarted = false;
let gameTimerId;
let myScore = 0;
let highScore = 0;
let highScoreNickname = "anonymous panda";
let myNickname;
let myClientId;
let myPublishChannel;
let gameChannel;
let gameChannelName = "flappy-game";
let allBirds = {};
let topScoreChannel;
let topScoreChannelName = "flappy-top-score";

if (localStorage.getItem("flappy-nickname")) {
  myNickname = localStorage.getItem("flappy-nickname");
} else {
  myNickname = nickNamesDictionary[Math.floor(Math.random() * 34)];
  localStorage.setItem("flappy-nickname", myNickname);
}


document.addEventListener("DOMContentLoaded", () => {
  const sky = document.querySelector(".sky");
  const bird = document.querySelector(".bird");
  const gameDisplay = document.querySelector(".game-container");
  const ground = document.querySelector(".ground-moving");
  let nicknameInput = document.getElementById("nickname-input");
  let updateNicknameBtn = document.getElementById("update-nickname");
  let scoreLabel = document.getElementById("score-label");
  let topScoreLabel = document.getElementById("top-label");
  let scoreList = document.getElementById("score-list");

  let birdLeft = 220;
  let birdBottom = 350;
  let gravity = 2;
  let isGameOver = false;
  let gap = 440;

  const filterNickname = async (nicknameText) => {
    
  };

  
  updateNicknameBtn.addEventListener("click", () => {
    
  });

  window.addEventListener("keydown", function (e) {
    
  });

  realtime.connection.once("connected", () => {
    
    };
  });

  

  function startGame() {
    birdBottom -= gravity;
    bird.style.bottom = birdBottom + "px";
    bird.style.left = birdLeft + "px";
    for (item in allBirds) {
      if (allBirds[item].targetBottom) {
        let tempBottom = parseInt(allBirds[item].el.style.bottom);
        tempBottom += (allBirds[item].targetBottom - tempBottom) * 0.5;
        allBirds[item].el.style.bottom = tempBottom + "px";
      }
    }
  }

  function jump() {
    new_location = speed + old_location

    new_speed = acceleration + old_speed
    
    gravity = 5; // tune this to get the gravity you want

    birdYPos = birdYPos + birdYSpeed;

    birdYSpeed = birdYSpeed + gravity;
    
    birdYSpeed = -6; // negative because "up"
  }

  function generateObstacles(randomHeight) {
    
  }

  function gameOver() {
    if (this.state !== this.states.gameOver) {
            this.fx.play('hit');

            this.state = this.states.gameOver;
        }
  }

  function sendPositionUpdates() {
    
  }


  
});
