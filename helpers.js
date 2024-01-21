let button=document.querySelector(".nav-button");
let middleLine=document.querySelector(".middle-line");
let firstLine=document.querySelector(".first-line");
let secondLine=document.querySelector(".second-line");
let navPanel=document.querySelector(".nav-panel");


function navBarClick(){
    firstLine.classList.toggle("first-line-clicked");
    middleLine.classList.toggle("middle-line-clicked");
    secondLine.classList.toggle("second-line-clicked");
    navPanel.classList.toggle("nav-panel-toggle");
}
button.addEventListener("click", navBarClick);


