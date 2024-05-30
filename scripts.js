// Form validation using JavaScript
(function() {
    'use strict';
  
    window.addEventListener('load', function() {
      var form = document.getElementById('registrationForm');
      form.addEventListener('submit', function(event) {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        } else {
          alert('Thank you for registering! Your registration has been successful.');
          window.location.href = '#home';
        }
        form.classList.add('was-validated');
      }, false);
    }, false);
  })();
  
  // JavaScript for About Section Animation
  document.addEventListener('DOMContentLoaded', function() {
    const aboutSection = document.getElementById('about');
    const aboutObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target);
        }
      });
    });
  
    aboutObserver.observe(aboutSection);
  });
  