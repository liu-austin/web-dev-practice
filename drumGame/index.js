var dom_button = document.querySelectorAll(".drum");
var dom_keypress = document.addEventListener("keydown", handlePress);

for (var i = 0; i < dom_button.length; i++) {
  dom_button[i].addEventListener("click", handleClick);
}

function handlePress(event) {
  button_press = event.key;
  playSound(button_press);
  animateButton(button_press);
}

function handleClick() {
  var button_click = this.innerHTML;
  playSound(button_click);
  animateButton(button_click);
}

function playSound(button_letter) {
  switch (button_letter) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    case "j":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    case "k":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case "l":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;
    default:
      console.log(button_letter);
  }
}

function animateButton(key_pressed) {
  var active_button = document.querySelector("." + key_pressed);
  active_button.classList.add("pressed");
  setTimeout(function(){active_button.classList.remove("pressed")},100);
}
