// variables

var playlist_container   = document.querySelector("#playlist-container");
var playlist_button      = document.querySelector("#pl-btn");
var playlist_button_title= document.querySelector("#pl-btn-title");
var playlist             = document.querySelectorAll("#playlist li");
var main_audio           = document.querySelector("#main-audio");
var individual_song_name = document.querySelectorAll(".s-name");
var current_song_name    = document.querySelector("#current-song-name");

var settings_button      = document.querySelector("#settings-btn");
var settings_button_title= document.querySelector("#settings-btn-title");
var settings_container   = document.querySelector("#settings-container");
var play_pause_button    = document.querySelector("#play-btn");
var previous_song_btn    = document.querySelector("#pre-btn");
var next_song_btn        = document.querySelector("#nxt-btn");
var volume_button        = document.querySelector("#mute-btn");
var volume_progress      = document.querySelector("#volume-progress");
var song_progress        = document.querySelector("#song-progress");
var song_duration        = document.querySelector("#song-duration");

var theme_list           = document.querySelectorAll(".theme");
var custom_color_picker  = document.querySelector(".theme-5");
var custom_color         = document.querySelector("#custom-color");

var audio_volume = main_audio.volume * 100;

// playlist - attach the songs name to list

individual_song_name.forEach(function(element, index){
    individual_song_name[index].textContent = element.previousElementSibling.src.split(/(\\|\/)/g).pop().replace(/%20/g,' ').replace(/.mp3|.m4a/g,'');
 });

// playlist - each item click reaction

playlist.forEach(function(item, index){
    item.onclick = ()=>{
        song(index);
    }
});

// song play/pause,next/previous - actions & disable buttons

function song(index){

    // assign the value for src attribute of the main audio element - clicked song from playlist & previous/next song
    audioSrc = playlist[index].querySelector(".s-audio").src;
    main_audio.src = audioSrc;
    current_song_name.textContent = audioSrc.split(/(\\|\/)/g).pop().replace(/%20/g,' ').replace(/.mp3|.m4a/g,'');
    
    // change the audio state - pause/play
    songState();

    // previous/next buttons - click actions
    next_song_btn.onclick = ()=>{ nextSong(index); }
    previous_song_btn.onclick = ()=>{ previousSong(index); }

    // keyboard key click actions - previous/next song
    document.onkeydown = (k) => {
        var _key = k.key;
        if(_key == "." || _key == ">"){ nextSong(index); }
        if(_key == "," || _key == "<"){ previousSong(index); }
    };

    // previous/next buttons - activates the disable state key
    if(index == 0){
        previous_song_btn.classList.add("disable");
    }
    else if(index == playlist.length - 1){
        next_song_btn.classList.add("disable");
    }
    else{
        previous_song_btn.classList.remove("disable");
        next_song_btn.classList.remove("disable");
    }
}

// song state (play/pause) function

function songState(){
    if(main_audio.hasAttribute("src")){
        if(main_audio.paused){
            main_audio.play();
            play_pause_button.src = "./image&icos/pause.png";
            }else{
            main_audio.pause();
            play_pause_button.src = "./image&icos/play1.png";
        }      
    }
}

// previous song action

function previousSong(index){
    if(main_audio.hasAttribute("src")){

    if(index > 0){
        index--;
        song(index);
        }
    }
}

// next song action

function nextSong(index){
    if(main_audio.hasAttribute("src")){

    if(index < playlist.length - 1){
        index++;        
        song(index);
        }
    }
}

// volume down function

function volumeDown(){
    if(audio_volume >= 1){
        audio_volume = (audio_volume - 10);
        var audio_volume_minus = audio_volume / 100;
        main_audio.muted = false; volume_button.src = "./image&icos/knob.png";
        main_audio.volume = audio_volume_minus;
    }
    if(audio_volume == 0){
        volume_button.src = "./image&icos/mute.png";
    }
}

// volume up function

function volumeUp(){
    if(audio_volume < 100){
        audio_volume = (audio_volume + 10);
        var audio_volume_plus = audio_volume / 100;
        main_audio.muted = false; volume_button.src = "./image&icos/knob.png";
        main_audio.volume = audio_volume_plus;
    }
}

// mute song function

function muteSong(){
    if(main_audio.muted == false){
        main_audio.muted = true;
        volume_button.src = "./image&icos/mute.png";
    }else{
        main_audio.muted = false;
        volume_button.src = "./image&icos/knob.png";
    }
}

// playlist button function

playlist_container.style.width = "0";

function playlist_(){
    if(playlist_container.style.width == "0px"){
        playlist_container.style.width = "85%";
        playlist_container.style.outline = "2px solid";
        playlist_button.style.transform = "rotateZ(180deg)";
        playlist_button_title.style.display = "none";
    }else{
        playlist_container.style.width = "0";
        playlist_container.style.outline = "0";
        playlist_button.style.transform = "rotateZ(0deg)";
        playlist_button_title.style.display = "inline";
    }
}

// settings - button click function

settings_container.style.width = "0px";

function settings_(){
    if(settings_container.style.width == "0px"){
    settings_container.style.width = "85%";
    settings_container.style.outline = "2px solid";
    settings_button.src = "./image&icos/close.png";
    settings_button_title.style.display = "none";
    }else{
    settings_container.style.width = "0";
    settings_container.style.outline = "0";
    settings_button.src = "./image&icos/settings.png";
    settings_button_title.style.display = "inline";
    }
}

// update of progress bar (audio duration,volume)

main_audio.onloadedmetadata = ()=>{ song_progress.max = main_audio.duration; }

main_audio.ontimeupdate = ()=>{
    song_progress.value = main_audio.currentTime;
    if(main_audio.ended){main_audio.pause();play_pause_button.src = "./image&icos/play1.png";}
    var minute = parseInt(main_audio.currentTime / 60);
    var second = parseInt(main_audio.currentTime % 60);
    var zero, zero_ = "0";
    zero  = second > 9 ? "" : "0";
    zero_ = minute > 9 ? "" : "0";
    song_duration.textContent = zero_ + minute + ":" + zero + second;
}

main_audio.onvolumechange = ()=>{ volume_progress.value = audio_volume; }


// virtual buttons - click actions

play_pause_button.onclick = ()=>{ songState(); }

volume_button.onclick = ()=>{ muteSong(); }

playlist_button.onclick = ()=>{ playlist_(); }

settings_button.onclick = ()=>{ settings_();}


// keyborad - key click actions

document.addEventListener("keydown",(k) => {

    var _key = k.key;

if(_key == " "){ songState(); k.preventDefault(); }

if(_key == "ArrowRight"){ if(main_audio.hasAttribute("src")){main_audio.currentTime = main_audio.currentTime + 5;} k.preventDefault(); }

if(_key == "ArrowLeft"){ if(main_audio.hasAttribute("src")){main_audio.currentTime = main_audio.currentTime - 5;} k.preventDefault(); }

if(_key == "/"){ muteSong(); }

if(_key == '\'' || _key == "\""){ playlist_(); }

if(_key == '\\' || _key == "|"){ settings_(); }
    
if(_key == "ArrowUp"){ volumeUp(); k.preventDefault(); }

if(_key == "ArrowDown"){ volumeDown(); k.preventDefault(); }

});

// ----------------------------------------------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------------------------------------------

// theme - settings function

theme_list.forEach(function(item, index){
    item.onclick = ()=>{
        var css_var = index + 1;
        var color = getComputedStyle(item).getPropertyValue('--theme-'+ css_var);
        document.querySelector("#containers-parent").style.background = color;
    }
});

custom_color_picker.onclick = ()=>{ custom_color.click(); }

custom_color.addEventListener("input",function(event){
    document.querySelector("#containers-parent").style.background = event.target.value;
});

// check - settings function

var check_1 = document.querySelector("#check-1");
var check_2 = document.querySelector("#check-2");
var check_3 = document.querySelector("#check-3");

check_1.oninput = ()=>{
    var controls_parent = document.querySelector("#controls-parent");
    if(check_1.checked){
        controls_parent.style.background = "var(--transparent-bg-color1)";
        controls_parent.style.padding = "30px 0";
        controls_parent.style.bottom = "0";
    }else{
        controls_parent.style.background = "";
        controls_parent.style.padding = "";
        controls_parent.style.bottom = "";
    }
}

check_2.oninput = ()=>{
    var container_1 = document.querySelector("#container-1");
    var container_3 = document.querySelector("#container-3");
    if(check_2.checked){
        container_1.style.background = "var(--transparent-bg-color1)";
        container_3.style.background = "var(--transparent-bg-color1)";
    }else{
        container_1.style.background = "";
        container_3.style.background = "";
    }
}

check_3.oninput = ()=>{
    if(check_3.checked){
        volume_progress.style.display = "none";
        volume_button.style.display = "none";
    }else{
        volume_progress.style.display = "inline";
        volume_button.style.display = "inline";
    }
}