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
    document.querySelector(".header").style.position = "static";
    document.querySelector(".banner").style.paddingTop = "0";
    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0; 
if(document.body.classList.contains('stop-scrolling')){
    document.body.classList.remove("stop-scrolling")
}else{
    document.body.classList.add("stop-scrolling")
}

}
button.addEventListener("click", navBarClick);


let prevScrollpos = window.scrollY;
window.onscroll = function() {
  var currentScrollPos = window.scrollY;
  if (prevScrollpos > currentScrollPos) {
    document.querySelector(".header").style.top = "0";
  } else {
    document.querySelector(".header").style.top = "-69px";
    document.querySelector(".banner").style.paddingTop = "69px";
    document.querySelector(".header").style.position = "fixed";
  }
  prevScrollpos = currentScrollPos;
}

