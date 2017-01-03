$(document).ready(function(){

  $("#about").click(function(){
      $('main:not(#aboutpage)').css("display", "none");
      $("#aboutpage").css("display", "block");
    })

  $("#webdev").click(function(){
      $('main:not(#webdevpage)').css("display", "none");
      $("#webdevpage").css("display", "block");
    })

  $("#sound").click(function(){
      $('main:not(#soundpage)').css("display", "none");
      $("#soundpage").css("display", "block");
    })
 

    $(window).scroll(function() {
      if ($(this).scrollTop()>60)
     {
        $('.title').hide({duration:400});
        $('nav').addClass('fixed').animate("fast", {
                top: 0
            });
        $('main').css("padding-top", "190px")
     }
    else
     {
       $('.title').show({duration:400});
       $('nav').removeClass('fixed')
       $('main').css("padding-top", "0px")

     }

    })


    ////
//     var mywindow = $(window);
// var mypos = mywindow.scrollTop();
// var up = false;
// var newscroll;
// mywindow.scroll(function () {
//     newscroll = mywindow.scrollTop();
//     if (newscroll > mypos && !up) {
//         $('.header').stop().slideToggle();
//         up = !up;
//         console.log(up);
//     } else if(newscroll < mypos && up) {
//         $('.header').stop().slideToggle();
//         up = !up;
//     }
//     mypos = newscroll;
    ////


})
