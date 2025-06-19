document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();
  document.getElementById('formMsg').textContent = 'Thank you! We will get back to you shortly.';
  this.reset();
});
