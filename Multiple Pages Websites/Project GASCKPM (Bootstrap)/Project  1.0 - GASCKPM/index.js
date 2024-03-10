let scrollButton = document.querySelector(".scrollTop");

window.onscroll = ()=>{
    if(window.scrollY > window.innerHeight){
        scrollButton.style.display = "flex";
    }else{
        scrollButton.style.display = "";
    }

}

scrollButton.onclick = ()=>{
    if( window.scrollY > window.innerHeight){
        scrollTo(0,0);
    }
}
