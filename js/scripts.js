
function myForm() {
    var Name = document.forms["commentForm"]["entername"].value;
  if (Name== "") {
    alert("Name must be filled out");
    return false
  };
  var Email = document.forms["commentForm"]["enteremail"].value;
  if(Email== ""){
      alert("Email must be filled out");
      return false
  };
  var Com = document.forms['commentForm']['entercomment'].value;
  if(Com == ""){
      alert("Please type in your comments");
      return false
  }
  else {
    alert("Hi "+ Name +' Thank you for writing to us.We value your feedback')
  };
};
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
