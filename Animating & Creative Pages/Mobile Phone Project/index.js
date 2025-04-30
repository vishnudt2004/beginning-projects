var powerButton = document.querySelector(".btn-p");
var volumeButton = document.querySelector(".btn-v");
var display = document.querySelector(".display");
var displayReflect = document.querySelector(".display-reflect");
var volumeIndicator = document.querySelector(".display-vu");

powerButton.onclick = function(){
    display.classList.toggle("display-on");
    if(display.classList.contains("display-on")){
    displayReflect.style.display = "none";
}else{
    displayReflect.style.display = "block";
    volumeIndicator.classList.remove("display-vu-")
}

setTimeout(function(){display.classList.remove("display-on");displayReflect.style.display = "block";},10500);

}

volumeButton.onclick = function(){
    if(display.classList.contains("display-on")){
    volumeIndicator.classList.toggle("display-vu-")}else{
    }
}

// animation: fade 1s forwards;