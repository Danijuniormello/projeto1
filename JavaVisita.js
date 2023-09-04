let currentImageIndex = 0;
const images = document.querySelectorAll('.thumbnail');
const fullscreenContainer = document.querySelector('.fullscreen-container');
const fullscreenImage = document.querySelector('.fullscreen-image');

function changeFullScreenImage(direction) {
  currentImageIndex += direction;
  if (currentImageIndex < 0) {
    currentImageIndex = images.length - 1;
  } else if (currentImageIndex >= images.length) {
    currentImageIndex = 0;
  }
  showFullScreenImage(currentImageIndex);
}

function openFullScreen(index) {
  currentImageIndex = index;
  showFullScreenImage(currentImageIndex);
  fullscreenContainer.style.display = 'block';
}

function closeFullScreen() {
  fullscreenContainer.style.display = 'none';
}

function showFullScreenImage(index) {
  fullscreenImage.src = images[index].src;
}

showFullScreenImage(currentImageIndex);
