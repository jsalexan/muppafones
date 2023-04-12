// Function to change image 1 to image 2
function changeImage(event) {
  let image = event.target;
  let originalSrc = image.src;
  let newSrc = image.dataset.newsrc;
  image.src = newSrc;
  setTimeout(function() {
    image.src = originalSrc;
  }, 600);
  console.log(event.target);
}

function playSound(dataPuff) {
  const audio = document.querySelector(`audio[data-puff="${dataPuff}"]`);
  if (audio) {
    audio.currentTime = 0; // start from the beginning if the audio has already played
    audio.play();
  }
}

// Creates event listener for each puff
let images = document.querySelectorAll('.puff1 img');
images.forEach(function(image) {
  let dataPuff = image.parentNode.getAttribute('data-puff');
  image.addEventListener('mouseenter', function(event) {
    changeImage(event);
    playSound(dataPuff);
  });
});















  

 

  