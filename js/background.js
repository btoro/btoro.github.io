function randombg() {
  var random = Math.floor(Math.random() * 3) + 0;
  var bigSize = [
    "url('../img/background2.jpg')",
    "url('../img/background.jpg')",
    "url('../img/background3.jpg')"
  ];
  document.getElementById("bg-img").style.backgroundImage = bigSize[random];
}
