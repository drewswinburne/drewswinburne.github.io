$(document).ready(function(){

//Headline flash

// const selected = document.querySelectorAll('.marqee');
// selected.forEach(item => item.addEventListener('click', changeColor))

window.onload = function(){
  const marqueeText = "DREW SWINBURNE"
  const marqueeArray = marqueeText.split("")

    for (var i = 0;i<marqueeArray.length;i++){
      function addALetter(i) {
        setTimeout(function() {
          var item = document.createElement("span")
          var div = document.querySelector("h1")
          item.className = "noselect"
          item.colorNumber = 0
          item.onclick = changeColor;
          item.innerHTML = marqueeArray[i];
          div.appendChild(item)
        }, i * 75);
      }
      addALetter(i)
    }

    function changeColor(){
      let colors = ["DarkTurquoise", "DeepPink", "Yellow"]
      let color = colors[this.colorNumber]
      this.colorNumber++;
      if (this.colorNumber > colors.length){
        this.colorNumber = 0;
      }
    this.style.setProperty('color', color)
    }
}

//smooth scroll
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
    setTimeout(colorBack, 400);
    function colorBack(){
      $('.navbutton').css("color", "white")
    }
  }
})
