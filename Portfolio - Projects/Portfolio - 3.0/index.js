var text = document.querySelector(".text-2");

window.onscroll = ()=>{
    if(window.scrollY > 428){text.style.animation = "textEffect 0.5s linear forwards";}
    else{text.style.animation = ""}
}

if(window.scrollY > 428){text.style.animation = "textEffect 0.5s linear forwards";}else{text.style.animation = ""}