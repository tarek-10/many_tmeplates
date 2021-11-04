const myColor = document.querySelector(".input");

function handUpdate() {
  document.documentElement.style.setProperty(`--${this.name}`, `${this.value}`);
}

myColor.addEventListener("change", handUpdate);


var arrImge = [
  "Images/background1.webp",
  "Images/background2.webp",
  "Images/background3.webp",
];
var i = 0;
var myinfinite = function () {
  document.sliderImage.src = arrImge[i];
  if (i < arrImge.length - 1) {
    i++;
  } else {
    
    i = 0;
  }

  setTimeout("myinfinite()", 5000);
};
myinfinite();

var slideImage = ["media/blog1.webp","media/blog2.webp","media/blog3.webp"];
var j = 0;

var slideShow = function(){
    
   document.testimonialImage.src = slideImage[j];
   if(j < slideImage.length-1){
     j++;
   }else{
     j = 0;
   }
   setTimeout("slideShow()", 5000);
};
slideShow();

