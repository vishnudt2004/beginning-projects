var view = document.getElementById("view");

function viewUp(idname,innerhtml){
    view.id = idname;
    view.innerHTML = innerhtml;
    view.style.display = "flex"
    document.querySelectorAll("span")[0].style.visibility = "visible";
    document.querySelectorAll("span")[1].style.visibility = "visible";
    document.querySelector(".s6").classList.add("s6-fullscreen");
}

function closeUp(){
    view.style.display = "none";
    document.querySelectorAll("span")[0].style.visibility = "hidden";
    document.querySelectorAll("span")[1].style.visibility = "hidden";
}

function fullScreenUp(){
    if(view.requestFullscreen){
        view.requestFullscreen();
    }    
}