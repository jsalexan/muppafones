// Function to change image 1 to image 2
function changeImage(event) {
  let image = event.target;
  let originalSrc = image.src;
  let newSrc = image.dataset.newsrc;
  image.src = newSrc;
  setTimeout(function() {
    image.src = originalSrc;
  }, 600);
  // console.log(event.target);
}

function playSound(dataPuff) {
  const audio = document.querySelector(`audio[data-puff="${dataPuff}"]`);
  if (audio) {
    audio.currentTime = 0; // start from the beginning if the audio has already played
    audio.play();
  }
}

document.getElementById('start-show-button').addEventListener('click', function() {
  const leftCurtain = document.querySelector('.curtain.left');
  const rightCurtain = document.querySelector('.curtain.right');
  const curtainDiv = document.querySelector('.curtains');

  if (leftCurtain && rightCurtain) {
  
    leftCurtain.addEventListener('transitionend', function() {
      
      curtainDiv.style.opacity = 0;
      curtainDiv.style.pointerEvents = 'none';

       // Change cursor style to mallet, but only once the curtain is open
      document.documentElement.style.cursor = 'url("images/Muppa-mallet.png"), auto';
      document.body.style.cursor = 'url("images/Muppa-mallet.png"), auto';
    });

    leftCurtain.style.transform = 'translateX(-100%)';
    rightCurtain.style.transform = 'translateX(100%)';
 
  audioPlayer.play();
    // Hide the button when the curtains open
    document.getElementById('start-show-button').style.display = 'none';  
  }
});

// Event listeners for puff interactions
let images = document.querySelectorAll('.puff1 img');
images.forEach(function(image) {
  let dataPuff = image.parentNode.getAttribute('data-puff');
  image.addEventListener('mouseenter', function(event) {
    changeImage(event);
    playSound(dataPuff);
  });
});
