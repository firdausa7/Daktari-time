$(document).ready(function(){  
  $("form#details").submit(function(event){
    event.preventDefault();
    var name = $("input#letters").val();
      $("p.show-details").text("Thank you " + name + " your message has been received.We'll get back to you shortly.");
  });   
});   
