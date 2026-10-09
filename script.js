(() => {
  document.getElementById('year').textContent = new Date().getFullYear();
  const form = document.getElementById('inquiry-form');
  const status = document.getElementById('form-status');
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!form.checkValidity()) {
      form.reportValidity();
      status.textContent = 'Please complete the required fields.';
      return;
    }
    const data = new FormData(form);
    const subject = `Website inquiry: ${data.get('service')}`;
    const body = [
      `Name: ${data.get('name')}`,
      `Business: ${data.get('business') || 'Not provided'}`,
      `Email: ${data.get('email')}`,
      `Service: ${data.get('service')}`,
      '',
      'Inquiry:',
      data.get('message')
    ].join('\n');
    const url = `mailto:support@nallyit.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    status.textContent = 'Your email application is opening. Review the message and select Send.';
    window.location.href = url;
  });
})();
