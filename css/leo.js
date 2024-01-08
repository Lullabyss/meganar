var scrollValue = 0;
var ticking = false;


var pageHeight = document.body.scrollHeight

function moveImages(scrollY) {
  var p2FrontElement = document.getElementById("p2-front");
  var p10FrontElement = document.getElementById("p10-front");
  var p2BaseElements = document.getElementById("p2-base");
  var p10BaseElements = document.getElementById("p10-base");
  
  var p20Offset = 1000 // Changer la valeur ici
  if(scrollY > p20Offset) {
    p2FrontElement.style.top = '' + (Math.trunc((scrollY-(p20Offset+500))/pageHeight*3000)) + 'px';
    p2BaseElements.style.top = '' + (Math.trunc((scrollY-(p20Offset+200))/pageHeight*800)) + 'px';
  }

  var p10Offset = 8000 // Changer la valeur ici
  if(scrollY > p10Offset) {
    p10FrontElement.style.top = '' + (Math.trunc((scrollY-(p10Offset+500))/pageHeight*3000)) + 'px';
    p10BaseElements.style.top = '' + (Math.trunc((scrollY-(p10Offset+800))/pageHeight*500)) + 'px';
  }
}

window.addEventListener('scroll', function(e) {
  console.log(scrollValue) // C'est le log qui permet de connaître la valeur
  scrollValue = window.scrollY;
  if (!ticking) {
    window.requestAnimationFrame(function() {
      moveImages(scrollValue);
      ticking = false;
    });
  }
  ticking = true;
});