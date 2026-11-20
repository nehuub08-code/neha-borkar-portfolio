/**
 * CONTACT FORM & WHATSAPP INTEGRATION
 * Supports Netlify Forms POST, field validation, graceful loading states,
 * and direct WhatsApp deep-linking with encoded prefilled messages.
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  const form = document.getElementById('contact-form');
  const formStatus = document.getElementById('form-status');
  const submitBtn = document.getElementById('form-submit-btn');

  if (form) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();

      const name = document.getElementById('form-name').value.trim();
      const email = document.getElementById('form-email').value.trim();
      const subject = document.getElementById('form-subject').value.trim();
      const message = document.getElementById('form-message').value.trim();

      // Basic client-side validation
      if (!name || !email || !subject || !message) {
        showStatus('Please fill in all required fields.', 'error');
        return;
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        showStatus('Please provide a valid email address.', 'error');
        return;
      }

      // Set loading state
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> Sending message...`;
      }
      hideStatus();

      // Attempt Netlify Form Submission
      try {
        const formData = new FormData(form);
        const encodedData = new URLSearchParams(formData).toString();

        const response = await fetch('/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: encodedData
        });

        if (response.ok) {
          showStatus('Thank you! Your message has been sent successfully. Neha will respond shortly.', 'success');
          form.reset();
        } else {
          // If Netlify form handler is unavailable (e.g. running locally), offer mailto fallback
          showStatus(`Form endpoint unavailable. Opening your default email client to send message...`, 'success');
          setTimeout(() => {
            const mailtoUrl = `mailto:neha.borkar2408@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Hi Neha,\n\n${message}\n\nFrom: ${name} (${email})`)}`;
            window.location.href = mailtoUrl;
          }, 800);
        }
      } catch (err) {
        console.warn('Network submission error, using mailto fallback:', err);
        showStatus(`Opening your default email client...`, 'success');
        setTimeout(() => {
          const mailtoUrl = `mailto:neha.borkar2408@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Hi Neha,\n\n${message}\n\nFrom: ${name} (${email})`)}`;
          window.location.href = mailtoUrl;
        }, 600);
      } finally {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = `Send Message <i class="fa-solid fa-paper-plane" style="margin-left: 6px;"></i>`;
        }
      }
    });
  }

  function showStatus(msg, type) {
    if (!formStatus) return;
    formStatus.textContent = msg;
    formStatus.className = `form-status-alert ${type}`;
    formStatus.style.display = 'block';
  }

  function hideStatus() {
    if (!formStatus) return;
    formStatus.style.display = 'none';
    formStatus.className = 'form-status-alert';
  }
});

