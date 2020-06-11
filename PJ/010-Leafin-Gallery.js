var LFslideIndex = 1;
LFshowSlides(LFslideIndex);

function plusSlides(n) {
  LFshowSlides(LFslideIndex += n);
}

function currentSlide(n) {
  LFshowSlides(LFslideIndex = n);
}

function LFshowSlides(n) {
  var f;
  var LFslides = document.getElementsByClassName("LeafinFeatureSlides");
  var LFdots = document.getElementsByClassName("LeafinFeatureNumberDemo");
  // var LFcaptionText = document.getElementById("caption");
  if (n > LFslides.length) {
    LFslideIndex = 1
  }
  if (n < 1) {
    LFslideIndex = LFslides.length
  }
  for (f = 0; f < LFslides.length; f++) {
    LFslides[f].style.display = "none";
  }
  for (f = 0; f < LFdots.length; f++) {
    LFdots[f].className = LFdots[f].className.replace(" active", "");
  }
  LFslides[LFslideIndex - 1].style.display = "block";
  LFdots[LFslideIndex - 1].className += " active";
  // LFcaptionText.innerHTML = LFdots[LFslideIndex - 1].alt;
}
