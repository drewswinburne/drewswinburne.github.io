$(document).ready(function(){

  $(function() {
    $('a[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 800);
          return false;
        }
      }
    });
  });

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
