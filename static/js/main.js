// Medico HMS — Main JS

document.addEventListener('DOMContentLoaded', () => {

  /* ─────────────────────────────────────────
     DARK MODE TOGGLE
  ───────────────────────────────────────── */

  const toggleBtn = document.getElementById('theme-toggle');
  const body = document.body;

  // Load saved theme
  const savedTheme = localStorage.getItem('theme');

  if (savedTheme === 'dark') {
    body.classList.add('dark');
    if (toggleBtn) toggleBtn.textContent = '☀';
  } else {
    if (toggleBtn) toggleBtn.textContent = '🌙';
  }

  // Toggle theme
  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {

      body.classList.toggle('dark');

      if (body.classList.contains('dark')) {
        localStorage.setItem('theme', 'dark');
        toggleBtn.textContent = '☀';
      } else {
        localStorage.setItem('theme', 'light');
        toggleBtn.textContent = '🌙';
      }

    });
  }

  /* ─────────────────────────────────────────
     AUTO DISMISS ALERTS
  ───────────────────────────────────────── */

  const alerts = document.querySelectorAll('.alert');

  alerts.forEach(alert => {
    setTimeout(() => {

      alert.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
      alert.style.opacity = '0';
      alert.style.transform = 'translateY(-6px)';

      setTimeout(() => alert.remove(), 400);

    }, 5000);
  });

  /* ─────────────────────────────────────────
     ACTIVE NAV LINK
  ───────────────────────────────────────── */

  const currentPath = window.location.pathname;

  document.querySelectorAll('.nav-link').forEach(link => {
    if (link.getAttribute('href') === currentPath) {
      link.style.background = 'var(--col-lime)';
      link.style.color = 'var(--col-text)';
    }
  });

  /* ─────────────────────────────────────────
     STAT NUMBER ANIMATION
  ───────────────────────────────────────── */

  document.querySelectorAll('.stat-card-num').forEach(el => {

    const text = el.textContent.trim();
    const num = parseInt(text);

    if (!isNaN(num) && num > 0) {

      let start = 0;
      const step = Math.ceil(num / 20);

      const interval = setInterval(() => {

        start = Math.min(start + step, num);
        el.textContent = start;

        if (start >= num) clearInterval(interval);

      }, 40);
    }

  });

});



// Medico HMS — Main JS

// // Auto-dismiss alerts after 5 seconds
// document.addEventListener('DOMContentLoaded', () => {
//   const alerts = document.querySelectorAll('.alert');
//   alerts.forEach(alert => {
//     setTimeout(() => {
//       alert.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
//       alert.style.opacity = '0';
//       alert.style.transform = 'translateY(-6px)';
//       setTimeout(() => alert.remove(), 400);
//     }, 5000);
//   });

//   // Add active class to current nav link
//   const currentPath = window.location.pathname;
//   document.querySelectorAll('.nav-link').forEach(link => {
//     if (link.getAttribute('href') === currentPath) {
//       link.style.background = 'var(--col-lime)';
//       link.style.color = 'var(--col-text)';
//     }
//   });

//   // Animate stat numbers
//   document.querySelectorAll('.stat-card-num').forEach(el => {
//     const text = el.textContent.trim();
//     const num = parseInt(text);
//     if (!isNaN(num) && num > 0) {
//       let start = 0;
//       const step = Math.ceil(num / 20);
//       const interval = setInterval(() => {
//         start = Math.min(start + step, num);
//         el.textContent = start;
//         if (start >= num) clearInterval(interval);
//       }, 40);
//     }
//   });
// });