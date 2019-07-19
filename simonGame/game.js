// alert("hello.");
var buttonColors = ["red", "blue", "green", "yellow"]
var gamePattern = [];
var userClickedPattern = [];
var gameStarted = 0;
var level = 0;

$(document).keydown(startGame);

$(".btn").click(function(event) {
  userChosenColor = this.id;
  animatePress(userChosenColor);
  playSound(userChosenColor);
  userClickedPattern.push(userChosenColor);
  checkAnswer(userClickedPattern.length - 1);
});

function startGame() {
  if (gameStarted == 0) {
    $("h1").text("Level " + level);
    gameStarted++;
    nextSequence();
  }
}

function nextSequence() {
  level++;
  // gamePattern = [];
  userClickedPattern = [];
  // for (var i = 0; i < level; i++) {
    $("h1").text("Level " + level);
    randomNumber = Math.round((Math.random() * 3));
    var randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);
    chosenSquare = $("." + randomChosenColor);
    chosenSquare.fadeOut(100).fadeIn(100);
    playSound(randomChosenColor);
    setTimeout(function() {
      delayProxy();
    }, 4000);
  // }
}

function delayProxy() {
  var x = 1;
}

function playSound(name) {
  new Audio("sounds/" + name + ".mp3").play();
}

function animatePress(currenColor) {
  $("#" + currenColor).addClass("pressed");
  setTimeout(function(userChosenColor) {
    $("#" + currenColor).toggleClass("pressed");
  }, 100);
}

function checkAnswer(currentLevel) {
  if (userClickedPattern[currentLevel] == gamePattern[currentLevel]) {
    console.log("Correct.");
  }
  else {
    console.log("Incorrect.");
    new Audio('sounds/wrong.mp3').play();
    $("body").addClass("game-over");
    setTimeout(function() {
      $("body").toggleClass("game-over"), 200});
    $("h1").text("Game Over, Press Any Key to Restart.");
    startOver();
  }

  if (userClickedPattern.length == gamePattern.length) {
    setTimeout(nextSequence, 1000);
  }
}

function startOver() {
  level = 0;
  gameStarted = 0;
  gamePattern = [];
}
