
$('document').ready(function(){

var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1
        
  }
  slides[slideIndex-1].style.display = "block";  
    setTimeout(showSlides, 50000); // Change image every 2 seconds}
}

  $("#worker1").click(function(){
    $("#comment1").toggle();
        });
  
   $("#worker2").click(function(){
     $("#comment2").toggle();
        });
  
   $("#worker3").click(function(){
     $("#comment3").slideDown();
         });
});