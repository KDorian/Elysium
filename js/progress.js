//*/ Mini Slideshow /*//

//*/ Antorus, the Burning Throne - Carousel /*//
var myIndexAtbt = 0;
carouselAtbt();

function carouselAtbt() {
    var i;
    var x = document.getElementsByClassName("miniSlides atbt");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";
    }
    myIndexAtbt++;
    if (myIndexAtbt > x.length) {myIndexAtbt = 1}
    x[myIndexAtbt-1].style.display = "block";
    setTimeout(carouselAtbt, 2000); // Change image every 2 seconds
}

//*/ Tomb of Sargeras - Carousel /*//
var myIndexTos = 0;
carouselTos();

function carouselTos() {
    var i;
    var x = document.getElementsByClassName("miniSlides tos");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";
    }
    myIndexTos++;
    if (myIndexTos > x.length) {myIndexTos = 1}
    x[myIndexTos-1].style.display = "block";
    setTimeout(carouselTos, 2000); // Change image every 2 seconds
}

//*/ Nighthold - Carousel /*//
var myIndexNh = 0;
carouselNh();

function carouselNh() {
    var i;
    var x = document.getElementsByClassName("miniSlides nh");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";
    }
    myIndexNh++;
    if (myIndexNh > x.length) {myIndexNh = 1}
    x[myIndexNh-1].style.display = "block";
    setTimeout(carouselNh, 2000); // Change image every 2 seconds
}

//*/ Trial of Valor - Carousel /*//
var myIndexTov = 0;
carouselTov();

function carouselTov() {
    var i;
    var x = document.getElementsByClassName("miniSlides tov");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";
    }
    myIndexTov++;
    if (myIndexTov > x.length) {myIndexTov = 1}
    x[myIndexTov-1].style.display = "block";
    setTimeout(carouselTov, 2000); // Change image every 2 seconds
}

//*/ Emerald Nightmare - Carousel /*//
var myIndexEn = 0;
carouselEn();

function carouselEn() {
    var i;
    var x = document.getElementsByClassName("miniSlides en");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";
    }
    myIndexEn++;
    if (myIndexEn > x.length) {myIndexEn = 1}
    x[myIndexEn-1].style.display = "block";
    setTimeout(carouselEn, 2000); // Change image every 2 seconds
}

//*/ Modals /*//

//*/ Antorus, the Burning Throne - Modal /*//
// Get the modal
var modalAtbt = document.getElementById('myModal Atbt');

// Get the button that opens the modal
var btnAtbt = document.getElementById("myBtn Atbt");

// Get the <span> element that closes the modal
var spanAtbt = document.getElementsByClassName("close atbt")[0];

// When the user clicks the button, open the modal
btnAtbt.onclick = function() {
    modalAtbt.style.display = "block";
    // Prevent body from scrolling when modal is opened
    $("body").addClass("noscroll");
}

// When the user clicks on <span> (x), close the modal
spanAtbt.onclick = function() {
    modalAtbt.style.display = "none";
    $("body").removeClass("noscroll")
}

// When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//     if (event.target == modal) {
//         modal.style.display = "none";
//     }
// }

//*/ Tomb of Sargeras - Modal /*//

var modalTos = document.getElementById('myModal Tos');

var btnTos = document.getElementById("myBtn Tos");

var spanTos = document.getElementsByClassName("close tos")[0];

btnTos.onclick = function() {
    modalTos.style.display = "block";
    $("body").addClass("noscroll");
}

spanTos.onclick = function() {
    modalTos.style.display = "none";
    $("body").removeClass("noscroll")
}

//*/ Nighthold - Modal /*//

var modalNh = document.getElementById('myModal Nh');

var btnNh = document.getElementById("myBtn Nh");

var spanNh = document.getElementsByClassName("close nh")[0];

btnNh.onclick = function() {
    modalNh.style.display = "block";
    $("body").addClass("noscroll");
}

spanNh.onclick = function() {
    modalNh.style.display = "none";
    $("body").removeClass("noscroll")
}

//*/ Trial of Valor - Modal /*//

var modalTov = document.getElementById('myModal Tov');

var btnTov = document.getElementById("myBtn Tov");

var spanTov = document.getElementsByClassName("close tov")[0];

btnTov.onclick = function() {
    modalTov.style.display = "block";
    $("body").addClass("noscroll");
}

spanTov.onclick = function() {
    modalTov.style.display = "none";
    $("body").removeClass("noscroll")
}

//*/ Emerald Nightmare - Modal /*//

var modalEn = document.getElementById('myModal En');

var btnEn = document.getElementById("myBtn En");

var spanEn = document.getElementsByClassName("close en")[0];

btnEn.onclick = function() {
    modalEn.style.display = "block";
    $("body").addClass("noscroll");
}

spanEn.onclick = function() {
    modalEn.style.display = "none";
    $("body").removeClass("noscroll")
}

//*/ Antorus, the Burning Throne - Gallery Slideshow /*//

var slideIndex = 1;
showSlidesAtbt(slideIndex);

function plusSlidesAtbt(n) {
  showSlidesAtbt(slideIndex += n);
}

function currentSlideAtbt(n) {
  showSlidesAtbt(slideIndex = n);
}

function showSlidesAtbt(n) {
  var j;
  var slides = document.getElementsByClassName("mySlides atbt");
  var dots = document.getElementsByClassName("demo atbt");
  var captionText = document.getElementById("caption Atbt");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (j = 0; j < slides.length; j++) {
      slides[j].style.display = "none";
  }
  for (j = 0; j < dots.length; j++) {
      dots[j].className = dots[j].className.replace(" gallery-active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " gallery-active";
  captionText.innerHTML = dots[slideIndex-1].alt;
};

//*/ Tomb of Sargeras - Gallery Slideshow /*//

var slideIndexTos = 1;
showSlidesTos(slideIndexTos);

function plusSlidesTos(n) {
  showSlidesTos(slideIndexTos += n);
}

function currentSlideTos(n) {
  showSlidesTos(slideIndexTos = n);
}

function showSlidesTos(n) {
  var j;
  var slidesTos = document.getElementsByClassName("mySlides tos");
  var dotsTos = document.getElementsByClassName("demo tos");
  var captionTextTos = document.getElementById("caption Tos");
  if (n > slidesTos.length) {slideIndexTos = 1}
  if (n < 1) {slideIndexTos = slidesTos.length}
  for (j = 0; j < slidesTos.length; j++) {
      slidesTos[j].style.display = "none";
  }
  for (j = 0; j < dotsTos.length; j++) {
      dotsTos[j].className = dotsTos[j].className.replace(" gallery-active", "");
  }
  slidesTos[slideIndexTos-1].style.display = "block";
  dotsTos[slideIndexTos-1].className += " gallery-active";
  captionTextTos.innerHTML = dotsTos[slideIndexTos-1].alt;
}

//*/ Nighthold - Gallery Slideshow /*//

var slideIndexNh = 1;
showSlidesNh(slideIndexNh);

function plusSlidesNh(n) {
  showSlidesNh(slideIndexNh += n);
}

function currentSlideNh(n) {
  showSlidesNh(slideIndexNh = n);
}

function showSlidesNh(n) {
  var j;
  var slidesNh = document.getElementsByClassName("mySlides nh");
  var dotsNh = document.getElementsByClassName("demo nh");
  var captionTextNh = document.getElementById("caption Nh");
  if (n > slidesNh.length) {slideIndexNh = 1}
  if (n < 1) {slideIndexNh = slidesNh.length}
  for (j = 0; j < slidesNh.length; j++) {
      slidesNh[j].style.display = "none";
  }
  for (j = 0; j < dotsNh.length; j++) {
      dotsNh[j].className = dotsNh[j].className.replace(" gallery-active", "");
  }
  slidesNh[slideIndexNh-1].style.display = "block";
  dotsNh[slideIndexNh-1].className += " gallery-active";
  captionTextNh.innerHTML = dotsNh[slideIndexNh-1].alt;
}

//*/ Trial of Valor - Gallery Slideshow /*//

var slideIndexTov = 1;
showSlidesTov(slideIndexTov);

function plusSlidesTov(n) {
  showSlidesTov(slideIndexTov += n);
}

function currentSlideTov(n) {
  showSlidesTov(slideIndexTov = n);
}

function showSlidesTov(n) {
  var j;
  var slidesTov = document.getElementsByClassName("mySlides tov");
  var dotsTov = document.getElementsByClassName("demo tov");
  var captionTextTov = document.getElementById("caption Tov");
  if (n > slidesTov.length) {slideIndexTov = 1}
  if (n < 1) {slideIndexTov = slidesTov.length}
  for (j = 0; j < slidesTov.length; j++) {
      slidesTov[j].style.display = "none";
  }
  for (j = 0; j < dotsTov.length; j++) {
      dotsTov[j].className = dotsTov[j].className.replace(" gallery-active", "");
  }
  slidesTov[slideIndexTov-1].style.display = "block";
  dotsTov[slideIndexTov-1].className += " gallery-active";
  captionTextTov.innerHTML = dotsTov[slideIndexTov-1].alt;
}

//*/ Emerald Nightmare - Gallery Slideshow /*//

var slideIndexEn = 1;
showSlidesEn(slideIndexEn);

function plusSlidesEn(n) {
  showSlidesEn(slideIndexEn += n);
}

function currentSlideEn(n) {
  showSlidesEn(slideIndexEn = n);
}

function showSlidesEn(n) {
  var j;
  var slidesEn = document.getElementsByClassName("mySlides en");
  var dotsEn = document.getElementsByClassName("demo en");
  var captionTextEn = document.getElementById("caption En");
  if (n > slidesEn.length) {slideIndexEn = 1}
  if (n < 1) {slideIndexEn = slidesEn.length}
  for (j = 0; j < slidesEn.length; j++) {
      slidesEn[j].style.display = "none";
  }
  for (j = 0; j < dotsEn.length; j++) {
      dotsEn[j].className = dotsEn[j].className.replace(" gallery-active", "");
  }
  slidesEn[slideIndexEn-1].style.display = "block";
  dotsEn[slideIndexEn-1].className += " gallery-active";
  captionTextEn.innerHTML = dotsEn[slideIndexEn-1].alt;
}
