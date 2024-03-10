var canvas = document.querySelector(".canvas");
var color_code = document.querySelector(".color-code h4");
var button = document.querySelector("button#color-code-btn");
var container = document.querySelector(".color-code");
var button_2 = document.querySelector("button#refresh-btn");

function colorFunction(){

var degree1 = Math.floor(Math.random() * 360) + "deg";
var degree2 = Math.floor(Math.random() * 360) + "deg";
var degree3 = Math.floor(Math.random() * 360) + "deg";
var degree4 = Math.floor(Math.random() * 360) + "deg";
var degree5 = Math.floor(Math.random() * 360) + "deg";

    var color = "rgb( " + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + ")";
var color1 = "rgba( " + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + "," + "0.8 )";
var color2 = "rgba( " + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + "," + "0.8 )";
var color3 = "rgba( " + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + "," + "0.8 )";
var color4 = "rgba( " + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + "," + "0.8 )";
var color5 = "rgba( " + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + "," + "0.8 )";

var color_empty = "rgba(0,0,0,0)";

var percent = "70%";

var final = "linear-gradient( " + degree1 + "," + color  + "," + color1 + "," + color_empty + percent + ")"
    + "," + "linear-gradient( " + degree2 + "," + color  + "," + color2 + "," + color_empty + percent + ")"
    + "," + "linear-gradient( " + degree3 + "," + color  + "," + color3 + "," + color_empty + percent + ")"
    + "," + "linear-gradient( " + degree4 + "," + color  + "," + color4 + "," + color_empty + percent + ")"
    + "," + "linear-gradient( " + degree5 + "," + color  + "," + color5 + "," + color_empty + percent + ")";

canvas.style.background = final;
color_code.innerHTML = `
            linear-gradient( ${degree1} , ${color} , ${color1} , ${color_empty} ${percent} ), <br>
            linear-gradient( ${degree2} , ${color} , ${color2} , ${color_empty} ${percent} ), <br>
            linear-gradient( ${degree3} , ${color} , ${color3} , ${color_empty} ${percent} ), <br>
            linear-gradient( ${degree4} , ${color} , ${color4} , ${color_empty} ${percent} ), <br>
            linear-gradient( ${degree5} , ${color} , ${color5} , ${color_empty} ${percent} );        `

console.log(final);

}

colorFunction();

button.onclick = () => container.classList.toggle("expand");

button_2.onclick = () => colorFunction();

// button_2.onclick = ()=> window.location.reload();