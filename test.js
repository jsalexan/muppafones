<!DOCTYPE html>
<html lang="en-US">

    <head>
        <meta charset="UTF-8">
        <title>Another Day, Another Headache</title>
        <link rel="stylesheet" href="./style.css">
    </head>
 
  <body>
<container class="flex" id="puffs">
  <div class="puff1" data-puff="C"><img id="C" src="/images/puff 1.png" width="150px" data-newsrc="/images/puff 2 .png"/></div>

  <div class="puff1" data-puff="D"><img id="D" src="/images/puff 1 blue.png" width="150px" data-newsrc="/images/puff 2blue.png"/></div>

  <div class="puff1" data-puff="E"><img id="E" src="/images/puff 1 green.png" width="150px" data-newsrc="/images/puff 2 green.png"/></div>

  <div class="puff1" data-puff="F"><img id="F" src="/images/puff 1 ora.png" width="150px" data-newsrc="/images/puff 2 ora.png"/></div>

  <div class="puff1" data-puff="G"><img id="G" src="/images/puff 1 purple.png" width="150px" data-newsrc="/images/puff 2 purp.png"/></div>

  <div class="puff1" data-puff="A"><img id="A" src="/images/puff 1 red.png" width="150px" data-newsrc="/images/puff 2 red.png"/></div>

  <div class="puff1" data-puff="B"><img id="B" src="/images/puff 1 teal.png" width="150px" data-newsrc="/images/puff 2 tea.png"/></div>

  <div class="puff1" data-puff="C2"><img id="C2" src="/images/puff 1 yell.png" width="150px" data-newsrc="/images/puff 2 yell.png"/></div>


<audio data-puff="C" src="sounds/whomp.wav" preload="auto"></audio>
<audio data-puff="D" src="sounds/whomp.wav"></audio>
<audio data-puff="E" src="sounds/whomp.wav"></audio>
<audio data-puff="F" src="sounds/whomp.wav"></audio>
<audio data-puff="G" src="sounds/whomp.wav"></audio>
<audio data-puff="A" src="sounds/whomp.wav"></audio>
<audio data-puff="B" src="sounds/whomp.wav"></audio>
<audio data-puff="C2" src="sounds/whomp.wav"></audio>

</container>
<script src="/script.js"></script>
</body>
</html>
<script>
// Function to change image 1 to image 2
function changeImage(event) {
  let image = event.target;
  let originalSrc = image.src;
  let newSrc = image.dataset.newsrc;
  image.src = newSrc;
  setTimeout(function() {
    image.src = originalSrc;
  }, 500);
  console.log(event.target);
}

function playSound(event) {  
  const audio = document.querySelector(`audio[data-puff="${event.target}"]`);
  console.log(`event.dataset: ${event.dataset}`);
  if(audio)
  audio.play();
  console.log("playing sound");
}

// Creates event listener for each puff
let images = document.querySelectorAll('.puff1 img');
images.forEach(function(image) {
  image.addEventListener('mouseenter', function(event) {
    changeImage(event);
    playSound(event);
  });
});
</script>