
// Function to change image 1 to image 2
function changeImage(event) {
  let image = event.target;
  let originalSrc = image.src;
  let newSrc = image.dataset.newsrc;
  image.src = newSrc;
  setTimeout(function() {
    image.src = originalSrc;
  }, 500);
}

// Creates event listener for each puff
let images = document.querySelectorAll('.puff1 img');
images.forEach(function(image) {
  image.addEventListener('mouseover', changeImage);
});
  

 

  