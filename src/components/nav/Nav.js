
  const btn = document.getElementById('hamburger-btn');
  const menu = document.getElementById('menu');

  btn.addEventListener('click', () => {
    menu.classList.toggle('hidden');
  });
