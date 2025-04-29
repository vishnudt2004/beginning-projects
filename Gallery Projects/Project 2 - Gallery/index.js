var fullViewBox = document.getElementById("fullView");
var fullViewImg = document.getElementById("Viewer");
var imageLength = document.querySelectorAll(".image").length;
var image = document.querySelectorAll(".image");
var closeIcon = document.querySelector("#closeicon");
var fullIcon = document.querySelector("#fullscreenicon");
var nextImageBtn = document.querySelector("img#nxt-btn");
var previousImageBtn = document.querySelector("img#pre-btn");

for(i=0;i<imageLength;i++){
    image[i].onclick = function openUp(){
        fullViewBox = document.getElementById("fullView").style.display = "flex";
        fullViewImg.src = this.src;
        document.body.style.overflow = "hidden";

        var clickedImageNo = this.className.replace(/image|-/g,'');
        imageControl(clickedImageNo);
    }
}

function imageControl(para){
    var image_ = ".image-";
    var j = para;

    closeIcon.onclick = function(){closeUp();}
    fullIcon.onclick = function(){fullScreenUp();}

    nextImageBtn.onclick = function(){ nextImage();}
    previousImageBtn.onclick = function(){ previousImage();}

function closeUp(){
        fullViewBox = document.getElementById("fullView").style.display = "none";
        document.body.style.overflow = "";
    }

function fullScreenUp(){
    if(fullViewImg.requestFullscreen){
        fullViewImg.requestFullscreen();
    }
}

function nextImage(){
    j++;
    j = j > imageLength ? imageLength : j ;
    fullViewImg.src = document.querySelector(image_ + j).src;
}

function previousImage(){
    j--;
    j = j < 1 ? 1 : j ;
    fullViewImg.src = document.querySelector(image_ + j).src;
}

    document.onkeydown = (e) => {

        if(e.key == "ArrowRight"){
           nextImage();
        }

        if(e.key == "ArrowLeft"){
            previousImage();
        }

        if(e.key == "Escape"){
            closeUp();
        }

        if(e.key == ("F" || " ")){
            fullScreenUp();
        }

    }
}
