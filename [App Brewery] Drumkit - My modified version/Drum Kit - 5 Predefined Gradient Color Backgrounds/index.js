//All the Behaviour Except Background Color

var noOfKeys = document.querySelectorAll(".keys").length;

for(i=0;i<noOfKeys;i++){
document.querySelectorAll(".keys")[i].addEventListener("click",function(){
    var buttonInner = this.textContent;
    sound(buttonInner);
    animation(buttonInner);
});
}

function sound(key){
    switch (key) {
        case "a":var sound1 = new Audio("./sounds/key1.mp3");sound1.play();break;
        case "s":var sound2 = new Audio("./sounds/key2.mp3");sound2.play();break;
        case "d":var sound3 = new Audio("./sounds/key3.mp3");sound3.play();break;
        case "f":var sound4 = new Audio("./sounds/key4.mp3");sound4.play();break;
        case "l":var sound5 = new Audio("./sounds/key5.mp3");sound5.play();break;
        case "k":var sound6 = new Audio("./sounds/key6.mp3");sound6.play();break;
        case "j":var sound7 = new Audio("./sounds/key7.mp3");sound7.play();break;
        default:alert("Key is Not Valid or Defined");break;}
    }

document.addEventListener("keypress",function keySound(e){
    sound(e.key);
    animation(e.key);
});

function animation(currentKey){
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("animation");
    setTimeout( function(){document.querySelector("."+ currentKey ).classList.remove("animation")},100);
}

// Background Color Behaviour

var bgColor = Math.floor(Math.random()*5);
if(bgColor === 1){
document.querySelector("body").classList.add("body1");
}
else if(bgColor === 2){
    document.querySelector("body").classList.add("body2");
    }
    
else if(bgColor === 3){
    document.querySelector("body").classList.add("body3");
    }
    
else{
    document.querySelector("body").classList.add("body4");
    }