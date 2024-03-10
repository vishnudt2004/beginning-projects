var noOfBoxes = document.querySelectorAll(".divs").length;
document.querySelector(".btn").addEventListener("click",forLoop);
forLoop();

function forLoop(){
for(i=0;i<noOfBoxes;i++){
        randomColor(i);
    }
    function randomColor(e) {
        var deg = Math.floor(Math.random()*360)+"deg";
        var color1 = Math.floor(Math.random()*255+1) + "," + Math.floor(Math.random()*255+1) + "," + Math.floor(Math.random()*255+1);
        var color2 = Math.floor(Math.random()*255+1) + "," + Math.floor(Math.random()*255+1) + "," + Math.floor(Math.random()*255+1);
        var changeColor = "linear-gradient(" + deg + ","+"rgb("+color1+"),"+"rgb("+color2+")" ;
        document.querySelectorAll(".divs")[e].style.background = changeColor;
        document.querySelectorAll("p")[e].textContent = changeColor+");";
    }}