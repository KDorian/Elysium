// //*/ Filter menu /*///
//
// filterSelection("all") // Execute the function and show all columns
// function filterSelection(c) {
//   var x, i;
//   x = document.getElementsByClassName("column");
//   if (c == "all") c = "";
//   // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
//   for (i = 0; i < x.length; i++) {
//     removeClass(x[i], "show");
//     if (x[i].className.indexOf(c) > -1) addClass(x[i], "show");
//   }
// }
//
// // Show filtered elements
// function addClass(element, name) {
//   var i, arr1, arr2;
//   arr1 = element.className.split(" ");
//   arr2 = name.split(" ");
//   for (i = 0; i < arr2.length; i++) {
//     if (arr1.indexOf(arr2[i]) == -1) {
//       element.className += " " + arr2[i];
//     }
//   }
// }
//
// // Hide elements that are not selected
// function removeClass(element, name) {
//   var i, arr1, arr2;
//   arr1 = element.className.split(" ");
//   arr2 = name.split(" ");
//   for (i = 0; i < arr2.length; i++) {
//     while (arr1.indexOf(arr2[i]) > -1) {
//       arr1.splice(arr1.indexOf(arr2[i]), 1);
//     }
//   }
//   element.className = arr1.join(" ");
// }
//
// // Add active class to the current button (highlight it)
// var btnContainer = document.getElementById("myBtnContainer");
// var btns = btnContainer.getElementsByClassName("btn");
// for (var i = 0; i < btns.length; i++) {
//   btns[i].addEventListener("click", function(){
//     var current = document.getElementsByClassName("active-progress");
//     current[0].className = current[0].className.replace(" active-progress", "");
//     this.className += " active-progress";
//   });
// }

//*/ Modals /*//

// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function() {
    modal.style.display = "block";
    // Prevent body from scrolling when modal is opened
    $("body").addClass("noscroll");
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
    $("body").removeClass("noscroll")
}

// When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//     if (event.target == modal) {
//         modal.style.display = "none";
//     }
// }

//*/ Mini Slideshow /*//

//

var myIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("miniSlides");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}
    x[myIndex-1].style.display = "block";
    setTimeout(carousel, 1000); // Change image every 2 seconds
}

//*/ Gallery Slideshow /*//
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var j;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
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
}
