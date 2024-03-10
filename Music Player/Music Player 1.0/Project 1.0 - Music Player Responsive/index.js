var a = document.querySelectorAll(".box").length;
var b = document.querySelectorAll(".box");
var player = document.querySelector("#Player");
var song = document.querySelector("#playerAudio");
var slider = document.querySelector("#progress");
var playPause = document.querySelector(".playPause");
var title = document.querySelector("#title");
var closeIcon = document.querySelector(".xmark");
var BoxContainer = document.querySelector("#Audios");
var coverImage = document.querySelector("#coverImage");
var VolumeButton = document.querySelector(".volumeButton");
var volumeSlider = document.querySelector("#volume");
var container  = document.querySelector("#container");
var songName = document.querySelectorAll("#Audios div p");
var songImage = document.querySelectorAll("#Audios div img");
var nextSong = document.querySelector(".next");
var previousSong = document.querySelector(".previous");
var songDuration = document.querySelector("#duration");
var helpBox = document.querySelector("#help");

for(i=0;i<a;i++){

    b[i].onclick = function(){
        player.style.display = "flex";
        song.src = this.querySelector(".audio").src;
        title.textContent = this.querySelector("p").textContent;
        coverImage.src = this.querySelector("img").src;
        this.querySelector(".audio").src.split(/(\\|\/)/g).pop().replace(/%20/g,' ').replace(/.mp3/g,'');
        playPause.querySelector("img").src = "./pause.png";
        coverImage.style.animation ="rotate 20s linear infinite";
        document.body.classList.remove("scrollbar");

        var clickedBoxNo = this.className.replace(/box|-/g,'');
        functControlPlayer(clickedBoxNo);

        BoxContainer.style.display = "none";

        if(clickedBoxNo == a){nextSong.classList.add("disableState");}
        if(clickedBoxNo == 1){previousSong.classList.add("disableState");}
    
        functHelpBox();
    }
    songImage[i].src = "./musical-note.png";
    songName[i].textContent = b[i].querySelector(".audio").src.split(/(\\|\/)/g).pop().replace(/%20/g,' ').replace(/.mp3/g,'');
}

song.onloadedmetadata = function(){
    slider.max = song.duration;
    slider.value = song.currentTime; 
}

slider.onchange = function(){
    song.currentTime = slider.value;
}

function functPlayPause(){
    if(playPause.classList.contains("play")){
        song.play();
        playPause.querySelector("img").src = "./pause.png";
        playPause.classList.remove("play");
        playPause.classList.add("pause");
        coverImage.style.animation ="rotate 20s linear infinite";
    }
    else{
        song.pause();
        playPause.querySelector("img").src = "./play.png";
        playPause.classList.add("play");
        playPause.classList.remove("pause");
        coverImage.style.animation ="";
    }
}

playPause.onclick = function(){
    functPlayPause();
}

    setInterval(()=>{
        slider.value=song.currentTime;
    },500);

VolumeButton.onmouseover = function(){
        volumeSlider.style.display = "inline";
    }
volumeSlider.onmouseout =function(){
    volumeSlider.style.display ="none";
   }


volumeSlider.onchange = function(){
    song.volume = this.value / 100;

    if(song.muted === true){
        song.muted = false;
    }
    
    if(song.volume === 0){
        VolumeButton.before(document.createElement("span"));
    }else{
        if(document.contains(container.querySelector("span"))){container.querySelector("span").remove();}
    }
}

function functControlPlayer(paramet){
    var j = paramet;
    var boxName = ".box-";

function functNextSong(){
        j++;
        j = j > a ? a : j ;
        song.src = document.querySelector(boxName+j).querySelector(".audio").src;
        title.textContent = document.querySelector(boxName+j).querySelector("p").textContent;
        playPause.querySelector("img").src = "./pause.png";
        coverImage.src = document.querySelector(boxName+j).querySelector("img").src;
        coverImage.style.animation ="rotate 20s linear infinite";
        previousSong.classList.remove("disableState");

        if(j===a){nextSong.classList.add("disableState");}
    }

    function functPreviousSong(){
        j--;
        j = j < 1 ? 1 : j ;
        
        song.src = document.querySelector(boxName+j).querySelector(".audio").src;
        title.textContent = document.querySelector(boxName+j).querySelector("p").textContent;
        playPause.querySelector("img").src = "./pause.png";
        coverImage.src = document.querySelector(boxName+j).querySelector("img").src;
        coverImage.style.animation ="rotate 20s linear infinite";
        nextSong.classList.remove("disableState");

        if(j===1){previousSong.classList.add("disableState");}
    }

    // function functExitControl(){
    //     document.onkeydown = function(){};
    // }
    
function functClosePlayer(){
    player.style.display = "none";
    song.pause();song.currentTime = 0;
    document.body.classList.add("scrollbar");
    nextSong.classList.remove("disableState");
    previousSong.classList.remove("disableState");
    BoxContainer.style.display = "flex";
    helpBox.style.display = "none";
    functControlPlayer();
    // functExitControl();
}

closeIcon.onclick = function(){functClosePlayer();}

function functMuteSong(){
    if(song.muted === false){
         song.muted = true;
         VolumeButton.before(document.createElement("span"));
         volumeSlider.value = 0;
         volumeSlider.style.display ="none";
     }else if(song.muted === true){
         song.muted = false;
         container.querySelector("span").remove();
         volumeSlider.value = song.volume*100;
         volumeSlider.style.display ="none";
     }
 }
 
 VolumeButton.onclick = function(){functMuteSong()}

    document.onkeydown = function(e){

        if(e.key === " "){
            functPlayPause();
            KeyAnimation(); 
        }

        else if(e.key == "ArrowRight" || e.key == "ArrowLeft"){
            slider.focus();
            setTimeout(() => {
                slider.blur();
            }, 10000);
        }
    
        else if(e.key == "ArrowUp"|| e.key == "ArrowDown"){
            volumeSlider.style.display ="inline";
            volumeSlider.focus();
            setTimeout(() => {
                volumeSlider.style.display ="none";
            }, 10000);
        }
        
        else if(e.key == "." || e.key == ">"){
            if(nextSong.classList.contains("disableState") == false){
                functNextSong();
            }
        }
        
        else if(e.key == "," || e.key == "<"){
            if(previousSong.classList.contains("disableState") == false){
                functPreviousSong();
            }
        }

        else if(e.key == "/" || e.key == "?"){
            functMuteSong();
        }

        else if(e.key == "Escape"){
            functClosePlayer();
        }
    }

    nextSong.onclick = function(){ functNextSong();}
    previousSong.onclick = function(){ functPreviousSong();}
}

setInterval(function(){
        var songCurrentTimeSec = parseInt(song.currentTime % 60) ;
        var songCurrentTimeMin = parseInt(song.currentTime / 60) ;
    if(songCurrentTimeSec < 10){songCurrentTimeSec = "0" + songCurrentTimeSec;} if(songCurrentTimeMin < 10){songCurrentTimeMin = "0" + songCurrentTimeMin;}
    
    songDuration.textContent = songCurrentTimeMin + ":" + songCurrentTimeSec;
},100);

// setInterval(function(){
    song.ontimeupdate = ()=>{
if(song.ended === true){
    song.pause();
    playPause.querySelector("img").src = "./play.png";
    coverImage.style.animation ="";  
}
}
// },1000);

function KeyAnimation(){
    playPause.style.scale = "130%";
    playPause.style.filter = "drop-shadow(0 0 10px black) hue-rotate(110deg) saturate(150%)";
    setTimeout(() => {
        playPause.style.scale = "";
        playPause.style.filter = "";
    }, 200);
}

function functHelpBox(){
    helpBox.style.display = "table";
}

helpBox.insertAdjacentHTML("beforeend",`

<div class="row">
<div class="column col1">
<h3> Key </h3>
</div>
<div class="column col2">
<h3> Action </h3>
</div>
</div>

<div class="row">
<div class="column col1">
<h3> Space </h3>
</div>
<div class="column col2">
<h3> Play <i> / </i> Pause </h3>
</div>
</div>

<div class="row">
<div class="column col1">
<h3> Up Arrow <i> | </i> Down Arrow </h3>
</div>
<div class="column col2">
<h3> Volume + <i> | </i> Volume - </h3>
</div>
</div>

<div class="row">
<div class="column col1">
<h3> / &ThickSpace; <i> or </i> &ThickSpace; ? </h3>
</div>
<div class="column col2">
<h3> Mute </h3>
</div>
</div>

<div class="row">
<div class="column col1">
<h3> Left Arrow <i> | </i> Right Arrow </h3>
</div>
<div class="column col2">
<h3> Backward <i> | </i> Forward </h3>
</div>
</div>


<div class="row">
<div class="column col1">
<h3> , &ThickSpace; <i> or </i> &ThickSpace; &lt; </h3>
</div>
<div class="column col2">
<h3> Previous Song </h3>
</div>
</div>


<div class="row">
<div class="column col1">
<h3> . &ThickSpace; <i> or </i> &ThickSpace; &gt; </h3>
</div>
<div class="column col2">
<h3> Next Song </h3>
</div>
</div>
`)

helpBox.style.display = "none";


// function homeFocus(){

//     k=0;
//     document.onkeydown = function(f){
//         if(f.key == "ArrowRight"){
//             k++;
//             k > a ? a : k ;

//             b[k].classList.add("Focus");
//             b[k].querySelector(".audio"). functPlayPause;
//             setTimeout(() => {
//                 b[k].classList.remove("Focus");
//             }, 500);
           
//         }

//         if(f.key == "ArrowLeft"){
//             k--;
//             k < 1 ? 1 : k ;

//             b[k].classList.add("Focus");

//         }
//     }
// }

// var helpBoxColumn1 = ;
/////////////////////////////////////////////////////////////////////////////////////////////