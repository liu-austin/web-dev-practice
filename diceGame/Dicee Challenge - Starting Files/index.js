var randomNumber1 = Math.floor(Math.random()*6)+1;
var dice1ImageFile = "images/dice" + randomNumber1 + ".png";
var dice1Element = document.querySelector("img.img1");
dice1Element.src=dice1ImageFile;

var randomNumber2 = Math.floor(Math.random()*6)+1;
var dice2ImageFile = "images/dice" + randomNumber2 + ".png";
var dice2Element = document.querySelector("img.img2");
dice2Element.src=dice2ImageFile;

if (randomNumber1 > randomNumber2) {
  document.querySelector(".container h1").innerHTML='<i class="fas fa-flag"></i> "Player 1 Wins!" <i class="fas fa-flag"></i>';
}
else if (randomNumber2 > randomNumber1) {
  document.querySelector(".container h1").innerHTML='<i class="fas fa-flag"></i> "Player 2 Wins!" <i class="fas fa-flag"></i>';
}
else {
    document.querySelector(".container h1").innerHTML="Draw!"
}
