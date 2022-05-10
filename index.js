function toggleMobileMenuOptions() {
  document.querySelector('.menu-wrap').classList.toggle('hidden');
  document.querySelector('body').classList.toggle('no-overflow');
}

window.addEventListener('DOMContentLoaded', () => {
  const menuButton = document.getElementById('menu-options');
  menuButton.addEventListener('click', () => toggleMobileMenuOptions());

  const xButton = document.querySelector('.menu-x-btn');
  xButton.addEventListener('click', toggleMobileMenuOptions);

  const refs = document.querySelectorAll('.menu-wrap a');
  refs.forEach((node) => {
    node.onclick = () => toggleMobileMenuOptions();
  });
});
