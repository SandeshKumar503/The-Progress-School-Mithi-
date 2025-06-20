// Mobile navigation toggle
const menuBtn = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');
menuBtn.addEventListener('click', () => navMenu.classList.toggle('show'));

// Hero slider logic
const slides = document.querySelector('.slides');
const slideCount = document.querySelectorAll('.slide').length;
let current = 0;

document.querySelector('.next').addEventListener('click', () => {
  current = (current + 1) % slideCount; slide();
});
document.querySelector('.prev').addEventListener('click', () => {
  current = (current - 1 + slideCount) % slideCount; slide();
});

function slide() {
  slides.style.transform = `translateX(-${current * 100}%)`;
}

// Auto play
setInterval(() => {
  current = (current + 1) % slideCount; slide();
}, 5000);
