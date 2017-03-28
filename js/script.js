// Replace the slide position img name with desired image
var Imgs = {
  slideOne : "img/n_g_facade.jpg",
  slideTwo : "img/img1.jpg",
  slideThree : "img/img1.jpg"
};
// Replace the words between quotes below
// To change the slide-text
var HeroText = {
  slideOne : "Weekly Ad",
  slideTwo : "Mum-s the word!",
  slideThree : "Yo' Mum-a"
};

$(document).ready(function() {
  heroImgSizer();
  setSlides();
});

$(window).resize(function() {
  heroImgSizer();
});


function heroImgSizer() {
    $("#hero").height($("#hero").width());
    $(".hero-img").width($("#hero").width());
  var imgWidth = $("#hero").width() * 0.75;
    $(".hero-img").height(imgWidth);
}

function setSlides() {
  $("#slideOne").attr("src", Imgs.slideOne);
  $("#slideTwo").attr("src", Imgs.slideTwo);
  $("#slideThree").attr("src", Imgs.slideThree);

  $("#slideText1").text(HeroText.slideOne);
  $("#slideText2").text(HeroText.slideTwo);
  $("#slideText3").text(HeroText.slideThree);
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  //var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
    /*
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace("active", "");
  }
  */
  slides[slideIndex-1].style.display = "block";
  //dots[slideIndex-1].className += "active";
}
