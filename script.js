"use strict";

//document.querySelector() -> ile bir element seçimi yapılır.
//document.querySelector("").addEventListener -> Element'e click, sendKeys vs yapılabilir.

//. -> class
//# -> id

console.log(document.querySelector(".message")); //class'ı message olan element'i seçer. DOM manipulation.
//console'da:<p class="message"> start guesing...
console.log(document.querySelector(".between")); //class'ı between olan element'i seçer. DOM manipulation.
//console'da: <p class="between"> Between 1 and 20...

console.log(document.querySelector(".message").textContent);
//class'ı meesage olan elementin textini console'a getirir.

//DOM : Document Object Model
//Structured representation of HTML documents. Allows JavaScript to access HTML elements and styles to manipulate them.

document.querySelector(".message").textContent = "Correct Number :D "; //web-sitesindeki class'ı message olan elementin ismini değiştirir.
document.querySelector(".between").textContent = "<BETWEEN 1 TO 20>";
document.querySelector(".score").textContent = "NEW SCORE IS: 50!";
document.querySelector(".number").textContent = "?!";

console.log(document.querySelector(".guess").textContent);
//document.querySelector(".guess").textContent = 23;

document.querySelector(".highscore").textContent = "You are the best!";

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess);
  if (guess != null) {
    console.log("New guess:", guess);
  }
});
