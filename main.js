// Platform slider duplication for infinite scroll
const sliderTrack = document.querySelector('.slider-track');
if (sliderTrack) {
  const cards = sliderTrack.children;
  for (let i = 0; i < cards.length; i++) {
    const clone = cards[i].cloneNode(true);
    sliderTrack.appendChild(clone);
  }
}

// Contact form handling
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const submitButton = contactForm.querySelector('button');
    
    try {
      submitButton.disabled = true;
      submitButton.textContent = '发送中...';
      
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message })
      });

      if (!response.ok) {
        throw new Error('发送失败，请稍后重试');
      }

      // Show success message
      contactForm.innerHTML = `
        <div style="text-align: center; padding: 2rem;">
          <div style="color: rgb(var(--primary)); font-size: 2rem; margin-bottom: 1rem;">✓</div>
          <h3 style="margin-bottom: 1rem;">消息已发送</h3>
          <p style="color: rgba(var(--text), 0.8);">感谢您的反馈，我们会尽快回复</p>
        </div>
      `;
    } catch (error) {
      alert(error.message);
    } finally {
      submitButton.disabled = false;
      submitButton.textContent = '发送消息';
    }
  });
}

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// Intersection Observer for animation on scroll
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

// Animate sections on scroll
document.querySelectorAll('section').forEach(section => {
  section.style.opacity = '0';
  section.style.transform = 'translateY(20px)';
  section.style.transition = 'all 0.6s ease-out';
  observer.observe(section);
});