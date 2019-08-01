$('document').ready(function(){
    $('#day1').click(function(){
        $('.time').toggle();
    });
    $('#day3').click(function(){
        $('.time').toggle();
    });
    $('#day5').click(function(){
        $('.time').toggle();
    });
    $('#day8').click(function(){
        $('.time').toggle();
    });
    $('#day10').click(function(){
        $('.time').toggle();
    });
    $('#day12').click(function(){
        $('.time').toggle();
    });
    $('#day15').click(function(){
        $('.time').toggle();
    });
    $('#day17').click(function(){
        $('.time').toggle();
    });
    $('#day19').click(function(){
        $('.time').toggle();
    });
    $('#day22').click(function(){
        $('.time').toggle();
    });
    $('#day24').click(function(){
        $('.time').toggle();
    });
    $('#day26').click(function(){
        $('.time').toggle();
    });
    $('#day29').click(function(){
        $('.time').toggle();
    });

//booking buttons
$('#book').click(function(){
    $()
})
$('button#book1').click(function(){
    $('button#book1').hide();
    $('button#book2').hide();
    $('button#book3').hide();
    $('button#book4').hide();
    $('button#book5').hide();
    $('#choose').hide();
    $('#p').text("Your Appointment has been booked at 8:00am");
});
$('button#book2').click(function(){
    $('button#book1').hide();
    $('button#book2').hide();
    $('button#book3').hide();
    $('button#book4').hide();
    $('button#book5').hide();
    $('#choose').hide();
    $('#p').text("Your Appointment has been booked at 9:00am");
});
$('button#book3').click(function(){
    $('button#book1').hide();
    $('button#book2').hide();
    $('button#book3').hide();
    $('button#book4').hide();
    $('button#book5').hide();
    $('#choose').hide();
    $('#p').text("Your Appointment has been booked at 11:00am");
});
$('button#book4').click(function(){
    $('button#book1').hide();
    $('button#book2').hide();
    $('button#book3').hide();
    $('button#book4').hide();
    $('button#book5').hide();
    $('#choose').hide();
    $('#p').text("Your Appointment has been booked 02:00pm");
});
$('button#book5').click(function(){
    $('button#book1').hide();
    $('button#book2').hide();
    $('button#book3').hide();
    $('button#book4').hide();
    $('button#book5').hide();
    $('#choose').hide();
    $('#p').text("Your Appointment has been booked 04:00pm");
});
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
