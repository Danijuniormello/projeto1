let currentImageIndex = 0;
const images = document.querySelectorAll('.image');

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
  document.querySelector('.fullscreen-container').style.display = 'block';
}

function closeFullScreen() {
  document.querySelector('.fullscreen-container').style.display = 'none';
}

function showFullScreenImage(index) {
  const fullscreenImage = document.querySelector('.fullscreen-image');
  fullscreenImage.src = images[index].src;
}

showFullScreenImage(currentImageIndex);
