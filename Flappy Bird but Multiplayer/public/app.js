const profanityBaseURL = "https://www.purgomalum.com/service/plain?text=";
const nickNamesDictionary = [
  "pink crow",
  "green pigeon",
  "brown robin",
  "blue woodpecker",
  "purple sparrow",
  "yellow kingfisher",
  "gray warbler",
  "orange bulbul",
  "black drongo",
  "red seagulls",
  "beige flamingo",
  "frost eagles",
  "fuscia owl",
  "mint kite",
  "hickory parakeet",
  "tortilla beeeater",
  "wood munia",
  "violet dove",
  "eggplant peacock",
  "golden oriole",
  "magenta flycatcher",
  "mulberry quail",
  "slate magpie",
  "navy roller",
  "azure emu",
  "arctic sunbird",
  "iris starling",
  "olive rockthrush",
  "pecan barnowl",
  "carob goose",
  "coal duck",
  "grease trogon",
  "raven nightjar",
  "sepia barbet",
  "blue bird",
  "red eagle",
  "fighter jet",
  "magenta phoenix",
  "krammer jammer",
  "swishy meerkat",
  "pink penguin",
  "black swan",
];
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
    const http = new XMLHttpRequest();
    let encodedText = encodeURIComponent(nicknameText);
    http.open("GET", profanityBaseURL + encodedText + "&fill_text=***");
    http.send();
    http.onload = () => {
      myNickname = http.responseText;
      nicknameInput.value = myNickname;
      localStorage.setItem("flappy-nickname", myNickname);
    };
  };

  
  topScoreLabel.innerHTML =
    "Top score - " + highScore + "pts by " + highScoreNickname;
  nicknameInput.value = myNickname;
  updateNicknameBtn.addEventListener("click", () => {
    filterNickname(nicknameInput.value);
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
    
    function jump(){
    jumping = 1;
    let jumpCount = 0;
    var jumpInterval = setInterval(function(){
        var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
        if((characterTop>6)&&(jumpCount<15)){
            character.style.top = (characterTop-5)+"px";
        }
        if(jumpCount>20){
            clearInterval(jumpInterval);
            jumping=0;
            jumpCount=0;
        }
        jumpCount++;
    },10);
  }

  function generateObstacles(randomHeight) {
    if (!isGameOver) {
      let obstacleLeft = 500;
      let obstacleBottom = randomHeight;

      const obstacle = document.createElement("div");
      const topObstacle = document.createElement("div");
      obstacle.classList.add("obstacle");
      topObstacle.classList.add("topObstacle");
      gameDisplay.appendChild(obstacle);
      gameDisplay.appendChild(topObstacle);
      obstacle.style.left = obstacleLeft + "px";
      obstacle.style.bottom = obstacleBottom + "px";
      topObstacle.style.left = obstacleLeft + "px";
      topObstacle.style.bottom = obstacleBottom + gap + "px";
      let timerId = setInterval(moveObstacle, 20);
      obstacleTimers.push(timerId);
      function moveObstacle() {
        obstacleLeft -= 2;
        obstacle.style.left = obstacleLeft + "px";
        topObstacle.style.left = obstacleLeft + "px";
        if (obstacleLeft === 220) {
          myScore++;
          setTimeout(() => {
            sortLeaderboard();
          }, 400);
        }
        if (obstacleLeft === -50) {
          clearInterval(timerId);
          gameDisplay.removeChild(obstacle);
          gameDisplay.removeChild(topObstacle);
        }
        if (
          (obstacleLeft > 200 &&
            obstacleLeft < 280 &&
            birdLeft === 220 &&
            (birdBottom < obstacleBottom + 210 ||
              birdBottom > obstacleBottom + gap - 150)) ||
          birdBottom === 0
        ) {
          for (timer in obstacleTimers) {
            clearInterval(obstacleTimers[timer]);
          }
          sortLeaderboard();
          gameOver();
        }
      }
    }
  }

  function gameOver() {
    if (this.state !== this.states.gameOver) {
            this.fx.play('hit');

            this.state = this.states.gameOver;
        }
  }

  function sendPositionUpdates() {
    function jump(){
    jumping = 1;
    let jumpCount = 0;
    var jumpInterval = setInterval(function(){
        var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
        if((characterTop>6)&&(jumpCount<15)){
            character.style.top = (characterTop-5)+"px";
        }
        if(jumpCount>20){
            clearInterval(jumpInterval);
            jumping=0;
            jumpCount=0;
        }
        jumpCount++;
    },10);
}
    
  }


  
});
