document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('registerForm');
  const password = document.getElementById('password');
  const confirm = document.getElementById('confirmPassword');
  const error = document.getElementById('passwordError');

  form.addEventListener('submit', (e) => {
    if (password.value !== confirm.value) {
      e.preventDefault();
      error.style.display = 'block';
    } else {
      error.style.display = 'none';
    }
  });
});
