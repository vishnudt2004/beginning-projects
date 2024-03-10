var Arrow = document.querySelector(".Arrow");
var scrollButton = document.querySelector(".scrollButton");

window.onscroll = () => {
    if(window.innerHeight + window.scrollY >= document.body.offsetHeight){
        Arrow.classList.add("ArrowUp");}else{
            Arrow.classList.remove("ArrowUp");
    }
}

scrollButton.onclick = () => {
    window.scrollBy(0,window.innerHeight);
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        window.scrollTo(0,0);
    }
}