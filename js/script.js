// Replace the slide position img name with desired image
// make sure to keep 'img/'
var Imgs = {
  slideOne: "img/n_g_facade.jpg",
  slideTwo: "img/img1.jpg",
  slideThree: "img/img1.jpg",
  locationImg: "img/n_g_facade.jpg"
};
// Replace the words between quotes below
// To change the slide-text
var HeroText = {
  slideOne: "Weekly Ad",
  slideTwo: "Mum-s the word!",
  slideThree: "Yo' Mum-a"
};
// I think this is a fairly straight forward, simple
// method to update these portions via direct text, but tell me if
// there is a different way you'd prefer. Also, I can
// always just make an easy drag and drop for you.

$(document).ready(function () {
  nC();
  heroImgSizer();
  setSlides();
  setLocImg();
  locSets();
});

$(window).resize(function () {
  nC();
  heroImgSizer();
  locSets();
});

function nC() {
  if ($(window).width() <= 762) {
    $("#bs-example-navbar-collapse-1").css("background", "#2e7d32");
  } else {
    $("#bs-example-navbar-collapse-1").css("background", "#54992C");
  }
}


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
  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}

// Location Page Js
function setLocImg(){
  $("#locPic").attr("src", Imgs.locationImg);
}

function locSets(){
  $("#locPic").width($("#locImgDiv").width());
  $("#mapDiv").height($("#mapDiv").width());
}
