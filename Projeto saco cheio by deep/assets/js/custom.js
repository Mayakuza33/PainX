console.log('O JavaScript do carrossel foi carregado!')

const carouselContainer = document.querySelector('.carousel-container')
const slides = document.querySelectorAll('.carousel-slide')
let currentIndex = 0

function nextSlide() {
  slides[currentIndex].classList.remove('active')
  currentIndex = (currentIndex + 1) % slides.length
  slides[currentIndex].classList.add('active')
}

setInterval(nextSlide, 5000)
