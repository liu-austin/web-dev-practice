// jshint esversion:6
// clicking on the work icons
let imageExtender = document.querySelectorAll(".icon-img");

for (let i = 0; i < imageExtender.length; i++) {
  imageExtender[i].addEventListener("click", handleClick);
}

function handleClick() {
  var pressed_button = this.id;
  var button_id = "#" + pressed_button;
  var i_object = document.querySelector(button_id);
  i_object.classList.remove("extendable");
  var p_object = document.querySelector("#" + pressed_button + "-p");
  p_object.classList.remove("extendable");
  var h3_object = document.querySelector("#" + pressed_button + "-h");
  h3_object.classList.remove("extendable");
}

// move the clouds
let headerHover = document.querySelector(".top-container");
headerHover.addEventListener("mouseover", function() {
  // highlight the mouseover target
  var bottomCloud = document.querySelector(".bottom-cloud");
  bottomCloud.classList.add("bottom-cloud-after");
  var topCloud = document.querySelector(".top-cloud");
  topCloud.classList.add("top-cloud-after");
});
