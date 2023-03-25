function changeImage() {
    let image = document.getElementById("pink");
    let originalSrc = image.src;
    image.src = "/images/puff 2 .png";
    setTimeout(function() {
      image.src = originalSrc;
    }, 1000);
  }
  