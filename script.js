
  // Initialize AOS
  AOS.init({
    duration: 900,
    once: true,
    offset: 80,
    easing: 'ease-in-out'
  });

  // Dynamic copyright year
  document.getElementById('year').textContent = new Date().getFullYear();

  // Close mobile navbar after clicking a link
  document.querySelectorAll('.navbar .nav-link').forEach(link => {
    link.addEventListener('click', () => {
      const navbar = document.getElementById('mainNavbar');
      const bsCollapse = bootstrap.Collapse.getInstance(navbar);

      if (bsCollapse) {
        bsCollapse.hide();
      }
    });
  });

  // Active navbar link on scroll
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.navbar .nav-link');

  window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
      if (window.scrollY >= section.offsetTop - 150) {
        current = section.id;
      }
    });

    navLinks.forEach(link => {
      link.classList.toggle(
        'active',
        link.getAttribute('href') === '#' + current
      );
    });
  });

  // Contact form - opens user's email application
  document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !subject || !message) {
      return;
    }

    const recipient = 'your-email@example.com';

    const body = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;
    const mailto = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    document.getElementById('formMessage').textContent =
      'Opening your email application...';

    window.location.href = mailto;
  });
