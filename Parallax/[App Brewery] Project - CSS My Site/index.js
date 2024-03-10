var cloud1 = document.querySelector(".cloud-image1");
var cloud2 = document.querySelector(".cloud-image2");
var cloud3 = document.querySelector(".cloud-image3");
var cloud4 = document.querySelector(".cloud-image4");
var text = document.querySelector(".intro-h1");
var text2 = document.querySelector(".intro-p");
var imagebg = document.querySelector(".div-top");


    
        window.addEventListener("scroll",()=>{
                var value = window.scrollY;
            if(value < 329){
                cloud1.style.left = value * -1.5 + 200 + "px";
                cloud2.style.left = value * 1.5 + 250 + "px";
                cloud3.style.left = value * 1.5 + 500 + "px";
                cloud4.style.left = value * -1.5 + 150 + "px";
                text.style.marginLeft = value * -1.5 + "px";
                text2.style.marginLeft = value * 1.5 + "px";
                imagebg.style.height = value * -0.5 + 499 + "px";
            }
        });