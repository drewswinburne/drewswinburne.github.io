$(document).ready(function(){

  // $("#about").click(function(){
  //     $('main:not(#aboutpage)').css("display", "none");
  //     $("#aboutpage").css("display", "block");
  //   })
  //
  // $("#webdev").click(function(){
  //     $('main:not(#webdevpage)').css("display", "none");
  //     $("#webdevpage").css("display", "block");
  //   })
  //
  // $("#sound").click(function(){
  //     $('main:not(#soundpage)').css("display", "none");
  //     $("#soundpage").css("display", "block");
  //   })

    $('nav').scrollFix()


const navButtons = document.querySelectorAll('.navbutton')
navButtons.forEach(button => button.addEventListener('click', flashColor))

  function flashColor(){
    $(this).css("color", "blue");
    setTimeout(colorBack, 100);
    function colorBack(){
      $('.navbutton').css("color", "white")
    }
  }
})
