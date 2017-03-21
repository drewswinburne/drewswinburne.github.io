$(document).ready(function(){

console.log("hints are in the js file")
//Headline flash

var colors = ["DarkTurquoise", "DeepPink", "Gold"]
var j = 0

window.onload = function(){
  makeMarquee()
  function makeMarquee(){
  const marqueeText = "DREW SWINBURNE"
  const marqueeArray = marqueeText.split("")
  var wincondition = false;
  var items = []
    for (var i = 0;i<marqueeArray.length;i++){
      function addALetter(i) {
        setTimeout(function() {
          var item = document.createElement("span")
          items.push(item)
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
      let color = colors[this.colorNumber]
      this.colorNumber++;
      if (this.colorNumber > colors.length){
        this.colorNumber = 0;
      }
      this.style.setProperty('color', color)
      checkColor(this.colorNumber)
      if (wincondition){
        var item = document.createElement("h6")
        var div = document.querySelector(".title")
        div.appendChild(item)
        item.innerHTML = "reset";
        item.onclick = endGame
      }
    }

    function endGame(){
      $('h1').remove()
      $('h6').remove()
      $('.title').append("<h1></h1>")
      makeMarquee()
    }

    function rainbow(){
      wincondition = true;
      console.log("hooray");
      for (var i = 0; i<items.length;i++){
        j = (j + 1) % 3
        rainbowTimeout(i, items, colors, j);
      }
    }

    function rainbowTimeout(i, items, colors, j){
      setTimeout(function() {
        var color = colors[j]
        items[i].style.setProperty('color', color)
        if (i == 13){
          i = 0;
          rainbow();
        }
      }, i * 75)
    }


    function checkColor(colorNumber){
      var i = 0;
      //so you don't have to click on the space
      items[4].colorNumber = colorNumber;
      recursive();
      function recursive(){
        if (items[i].colorNumber == colorNumber){
        console.log(i);
        i++;
        winCheck();

      }
        function winCheck(){
          if (i == 14){
            i = 0;
            rainbow()
          } else {
          recursive()
          }
        }
      }
    }
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
    $(this).css("color", colors[j]);
    j = (j+1)%3
    setTimeout(colorBack, 400);
    function colorBack(){
      $('.navbutton').css("color", "white")
    }
  }
})
