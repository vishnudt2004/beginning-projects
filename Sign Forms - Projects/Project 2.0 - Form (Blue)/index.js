document.querySelector(".signIn").addEventListener("click",function(){
    this.style.visibility = "hidden"
    document.querySelector(".signInForm").style.visibility = "visible"
    document.querySelector(".signUpForm").style.visibility = "hidden"
    document.querySelector(".signUp").style.visibility = "visible"
});

document.querySelector(".signUp").addEventListener("click",function(){
    this.style.visibility = "hidden"
    document.querySelector(".signInForm").style.visibility = "hidden"
    document.querySelector(".signUpForm").style.visibility = "visible"
    document.querySelector(".signIn").style.visibility = "visible"
});