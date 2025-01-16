const slides = document.querySelectorAll('.product-slide');
let currentIndex = 0;

document.getElementById('prevBtn').addEventListener('click', () => {
  currentIndex = (currentIndex > 0) ? currentIndex - 1 : slides.length - 1;
  updateSlider();
});

document.getElementById('nextBtn').addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % slides.length;
  updateSlider();
});

function updateSlider() {
  const offset = -currentIndex * 100;
  slides.forEach(slide => slide.style.transform = `translateX(${offset}%)`);
}
