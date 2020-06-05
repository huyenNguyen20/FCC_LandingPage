/*Slide Toggle Nav Bar for Mobile Device*/
$(".nav-hamburger").click(function(){
  $("#nav-link").slideToggle(200);
  if($(this).attr("name") === "reorder-four-outline"){
    $(this).attr("name","close-outline");
  } else {
    $(this).attr("name","reorder-four-outline");
  }
})
/*Smooth Scrolling for NavBar*/
$(".nav-link").click(function(){
  var destination = $(this).attr("href");
  $("html,body").animate({scrollTop: $(destination).offset().top},
                          1000);
})
/*Smooth Scrolling for Big Buttons*/
$(".js-btn-features").click(function(){
  $("html,body").animate({scrollTop:$("#features").offset().top},
                        1000);
})
$(".js-btn-plans").click(function(){
  $("html,body").animate({scrollTop:$("#plans").offset().top},
                        1000);
})
