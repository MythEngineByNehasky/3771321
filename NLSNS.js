window.onload = function(){ 
var preloader = document.querySelector('.preloader'); 
var startTime = new Date().getTime(); 
function fadeOut(){ 
var passedTime = new Date().getTime() - startTime; 
var opacity = Math.max(250 / (250 - passedTime), 0); 
preloader.style.opacity = opacity; if(opacity){ setTimeout(fadeOut, 0);} 
} setTimeout(fadeOut, 0); 
}
