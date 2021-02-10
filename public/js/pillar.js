function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  window.addEventListener("scroll", function() {
  var abc = getRandomInt(20, -20);
  
  var threePillarsCircle = document.querySelector('.threePillars-circle');
  threePillarsCircle.setAttribute("style", "will-change: transform;transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ("+abc+"deg) skew(0deg, 0deg);transform-style: preserve-3d;");
  
  if(abc >= 0)
  {
    abc = -abc;
  }
  else{
    abc = abc * -1;
  }
  
  var threePillarsItem, index;
  threePillarsItem = document.getElementsByClassName("w-hidden-small");
  for (index = 0; index < threePillarsItem.length; ++index) {
    threePillarsItem[index].setAttribute("style", "will-change: transform;transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ("+abc+"deg) skew(0deg, 0deg);transform-style: preserve-3d;");
  }
  
  });
  //Three Pillar