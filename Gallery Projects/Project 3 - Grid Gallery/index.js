var fullViewBox = document.getElementById("fullView");
var fullViewImg = document.getElementById("Viewer");

function openUp(e){
    fullViewBox = document.getElementById("fullView").style.display = "flex";
    fullViewImg.src = e;
    document.body.style.overflow = "hidden";
}

function closeUp(){
    fullViewBox = document.getElementById("fullView").style.display = "none";
    document.body.style.overflow = "";
}

function fullScreen(){
    if(fullViewImg.requestFullscreen){
        fullViewImg.requestFullscreen();
    }   
}