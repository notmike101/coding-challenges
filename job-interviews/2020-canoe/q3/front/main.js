(() => {
  const form = document.querySelector('form');

  form.addEventListener('submit', (e) => {
    const inputs = form.querySelectorAll('input[type="text"]');
    let validInputs = false;

    for (let i = 0; i < inputs.length; ++i) {
      const input = inputs[i];
      if (input.value.toLowerCase().includes('calculus')) {
        validInputs = true
        break;
      }
    }

    if (!validInputs) {
      e.preventDefault();
      alert('Input validation failed');
    }
  });
})()