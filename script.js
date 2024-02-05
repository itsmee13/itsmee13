/* Declare variables below to save the different sections (divs) of your story*/



let title = document.querySelector(".title");
let buttonOne = document.querySelector(".option-one");
let buttonTwo = document.querySelector(".option-two");
let buttonThree = document.querySelector(".option-three");
let buttonFour = document.querySelector(".option-four");
let buttonfive = document.querySelector(".option-five");
let buttonsix = document.querySelector(".option-six");


buttonOne.onclick = function() {
  document.querySelector(".story-opening").style.display = "none";
  document.querySelector(".buttons").style.display = "block";
  document.querySelector(".option-one-screen").style.display = "block";
  buttonfive.style.display = "none";
  buttonsix.style.display = "none";
};
buttonTwo.onclick = function() {
  document.querySelector(".story-opening").style.display = "none";
  document.querySelector(".buttons").style.display = "block";
  document.querySelector(".option-two-screen").style.display = "block";
  title.style.display = "none";
};
buttonThree.onclick = function() {
  document.querySelector(".option-one-screen").style.display = "none";
  document.querySelector(".option-two-screen").style.display = "none";
  title.style.display = "none";

};

buttonFour.onclick = function() {
document.querySelector(".option-one-screen").style.display = "none";
document.querySelector(".option-two-screen").style.display = "none";
  title.style.display = "block";

};

  buttonFour.onclick = function() {
  document.querySelector(".option-two-screen").style.display = "none";
  document.querySelector(".option-two-screen").style.display = "none";
    title.style.display = "none";

    


};










/* When you're ready to make event handlers, uncomment the code below. Then fill in the blanks with the correct variables! */











