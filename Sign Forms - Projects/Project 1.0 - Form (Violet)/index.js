var signinbtn = document.querySelector("#sign-in-btn");
var signupbtn = document.querySelector("#sign-up-btn");
var closebtn = document.querySelector(".close");
var loginnav = document.querySelector("#login-nav");

signinbtn.onclick = ()=> document.querySelector(".log-in").style.transform = "translateY(1%)";
signupbtn.onclick = ()=> document.querySelector(".log-in").style.transform = "";
closebtn.onclick =  ()=> document.querySelector(".box").style.display = "";
loginnav.onclick =  ()=> document.querySelector(".box").style.display = "block"