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

// var slideIndex = 1;
// showSlides(slideIndex);
//
// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }
//
// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }
//
// function showSlides(n) {
//   var j;
//   var slides = document.getElementsByClassName("mySlides");
//   var dots = document.getElementsByClassName("demo");
//   var captionText = document.getElementById("caption");
//   if (n > slides.length) {slideIndex = 1}
//   if (n < 1) {slideIndex = slides.length}
//   for (j = 0; j < slides.length; j++) {
//       slides[j].style.display = "none";
//   }
//   for (j = 0; j < dots.length; j++) {
//       dots[j].className = dots[j].className.replace(" gallery-active", "");
//   }
//   slides[slideIndex-1].style.display = "block";
//   dots[slideIndex-1].className += " gallery-active";
//   captionText.innerHTML = dots[slideIndex-1].alt;
// }

//*/ Tomb of Sargeras - Gallery Slideshow /*//
