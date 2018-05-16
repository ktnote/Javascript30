const inputs = document.querySelectorAll('.controls input');

function handleUpdate() {
  const suffix = this.dataset.sizing || ''; //取單位px 或 '' (因為色碼無單位)
  document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

inputs.forEach(input => input.addEventListener('change', handleUpdate));