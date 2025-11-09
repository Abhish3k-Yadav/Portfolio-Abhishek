const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger && navMenu) {
  hamburger.addEventListener('click', mobileMenu);
}

function mobileMenu() {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
}

// Close navbar when link is clicked
const navLink = document.querySelectorAll('.nav-link');

if (navLink.length > 0) {
  navLink.forEach((n) => n.addEventListener('click', closeMenu));
}

function closeMenu() {
  hamburger.classList.remove('active');
  navMenu.classList.remove('active');
}

// Event Listeners: Handling toggle event
const toggleSwitch = document.querySelector(
  '.theme-switch input[type="checkbox"]'
);

function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light');
  }
}

if (toggleSwitch) {
  toggleSwitch.addEventListener('change', switchTheme, false);
}

// Save user preference on load

const currentTheme = localStorage.getItem('theme')
  ? localStorage.getItem('theme')
  : null;

if (currentTheme) {
  document.documentElement.setAttribute('data-theme', currentTheme);

  if (currentTheme === 'dark') {
    toggleSwitch.checked = true;
  }
}

//Adding date
const myDate = document.querySelector('#datee');
if (myDate) {
  const yes = new Date().getFullYear();
  myDate.innerHTML = yes;
}

// EmailJS Configuration
(function () {
  // Initialize EmailJS with your public key
  emailjs.init('803FUsH0aLDHvIrwq');
})();

// Contact Form Handling with EmailJS
const contactForm = document.getElementById('contact-form');
const formMessage = document.getElementById('form-message');
const submitBtn = document.getElementById('submit-btn');
const btnText = document.querySelector('.btn-text');
const btnLoading = document.querySelector('.btn-loading');

// Email validation function
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Show message function
function showMessage(message, type) {
  formMessage.textContent = message;
  formMessage.className = `form-message ${type}`;
  formMessage.style.display = 'block';

  // Auto hide after 5 seconds
  setTimeout(() => {
    formMessage.style.display = 'none';
  }, 5000);
}

// Show loading state
function showLoading() {
  submitBtn.disabled = true;
  btnText.style.display = 'none';
  btnLoading.style.display = 'inline';
}

// Hide loading state
function hideLoading() {
  submitBtn.disabled = false;
  btnText.style.display = 'inline';
  btnLoading.style.display = 'none';
}

if (contactForm) {
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();

    // Get form data
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('message').value.trim();

    // Validation
    if (!name || !email || !subject || !message) {
      showMessage('Please fill in all fields.', 'error');
      return;
    }

    if (!isValidEmail(email)) {
      showMessage('Please enter a valid email address.', 'error');
      return;
    }

    // Show loading state
    showLoading();

    // Send email using EmailJS
    emailjs
      .sendForm(
        'service_xre8jr9', // Replace with your service ID (keep the quotes)
        'template_3c5r7z9', // Replace with your template ID (keep the quotes)
        contactForm
      )
      .then(
        function (response) {
          console.log('SUCCESS!', response.status, response.text);
          showMessage(
            "✅ Message sent successfully! I'll get back to you soon.",
            'success'
          );
          contactForm.reset();
        },
        function (error) {
          console.log('FAILED...', error);
          showMessage(
            '❌ Failed to send message. Please try again or contact me directly.',
            'error'
          );
        }
      )
      .finally(function () {
        hideLoading();
      });
  });
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  });
});

// ==================== AOS ANIMATION INITIALIZATION ====================
// Initialize AOS (Animate On Scroll) library
document.addEventListener('DOMContentLoaded', function () {
  if (typeof AOS !== 'undefined') {
    const prefersReduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;
    AOS.init({
      duration: prefersReduced ? 0 : 800,
      easing: 'ease-out',
      once: true,
      offset: 80,
      delay: prefersReduced ? 0 : 40,
      throttleDelay: 50,
      debounceDelay: 50,
      startEvent: 'DOMContentLoaded',
    });
  }
});

// ==================== COUNTER ANIMATION ====================
// Defer counters setup to idle time to improve initial interactivity
const initCounters = () => {
  const counters = document.querySelectorAll('.counter');
  const animationDuration = 1600; // a bit quicker for snappier feel

  const animateCounter = (counter) => {
    const target = parseInt(counter.getAttribute('data-target'));
    const increment = Math.max(1, target / (animationDuration / 16));
    let current = 0;

    const updateCounter = () => {
      current += increment;
      if (current < target) {
        counter.textContent = Math.ceil(current) + '+';
        requestAnimationFrame(updateCounter);
      } else {
        counter.textContent = target + '+';
      }
    };

    updateCounter();
  };

  const counterObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const counter = entry.target;
          animateCounter(counter);
          counterObserver.unobserve(counter);
        }
      });
    },
    { threshold: 0.5 }
  );

  counters.forEach((counter) => counterObserver.observe(counter));
};

if ('requestIdleCallback' in window) {
  requestIdleCallback(initCounters, { timeout: 2000 });
} else {
  setTimeout(initCounters, 500);
}

// ==================== SCROLL TO TOP BUTTON ====================
// Create and add scroll to top button
const scrollTopBtn = document.createElement('button');
scrollTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
scrollTopBtn.className = 'scroll-top-btn';
scrollTopBtn.setAttribute('aria-label', 'Scroll to top');
document.body.appendChild(scrollTopBtn);

// Show/hide scroll to top button with throttling
let scrollTimeout;
window.addEventListener(
  'scroll',
  () => {
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
      if (window.pageYOffset > 300) {
        scrollTopBtn.classList.add('visible');
      } else {
        scrollTopBtn.classList.remove('visible');
      }
    }, 100);
  },
  { passive: true }
);

/* Scroll to top on click */
scrollTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});

// ==================== PERFORMANCE OPTIMIZATION ====================
// Request animation frame for smooth scrolling
let ticking = false;

window.addEventListener(
  'scroll',
  () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        // Scroll-based logic here if needed
        ticking = false;
      });
      ticking = true;
    }
  },
  { passive: true }
);

const heroSubtitle = document.querySelector('.hero-subtitle');
if (heroSubtitle) {
  const originalText = heroSubtitle.textContent.trim();
  const prefersReduced = window.matchMedia(
    '(prefers-reduced-motion: reduce)'
  ).matches;

  if (originalText.length) {
    if (prefersReduced) {
      // Respect reduced motion: no typewriter looping
      heroSubtitle.textContent = originalText;
    } else {
      heroSubtitle.textContent = '';
      heroSubtitle.setAttribute('aria-label', originalText);

      const typingDelay = 85;
      const loopDelay = 1400;
      let i = 0;
      let rafId;

      const step = () => {
        if (i <= originalText.length) {
          heroSubtitle.textContent = originalText.slice(0, i);
          i += 1;
          rafId = setTimeout(step, typingDelay);
        } else {
          setTimeout(() => {
            heroSubtitle.textContent = '';
            i = 0;
            rafId = setTimeout(step, typingDelay);
          }, loopDelay);
        }
      };

      setTimeout(step, 400);

      // Cleanup on page hide to avoid timers stacking
      document.addEventListener('visibilitychange', () => {
        if (document.hidden && rafId) {
          clearTimeout(rafId);
        }
      });
    }
  }
}
