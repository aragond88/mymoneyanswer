(function () {
  function setMenuState(isOpen) {
    var burger = document.getElementById('burger');
    var menu = document.getElementById('mobile-menu');
    if (!burger || !menu) return;

    burger.classList.toggle('open', isOpen);
    menu.classList.toggle('open', isOpen);
    burger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    burger.setAttribute('aria-label', isOpen ? 'Close navigation menu' : 'Open navigation menu');
  }

  function toggleMenu() {
    var menu = document.getElementById('mobile-menu');
    setMenuState(!menu || !menu.classList.contains('open'));
  }

  window.toggleMenu = toggleMenu;

  document.addEventListener('DOMContentLoaded', function () {
    var burger = document.getElementById('burger');
    var menu = document.getElementById('mobile-menu');
    if (!burger || !menu) return;

    burger.setAttribute('aria-controls', menu.id);
    burger.setAttribute('aria-expanded', 'false');
    burger.addEventListener('click', toggleMenu);

    menu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        setMenuState(false);
      });
    });

    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape') setMenuState(false);
    });

    document.querySelectorAll('.faq-q').forEach(function (button) {
      button.setAttribute('aria-expanded', button.parentElement && button.parentElement.classList.contains('open') ? 'true' : 'false');
      button.addEventListener('click', function () {
        window.setTimeout(function () {
          button.setAttribute('aria-expanded', button.parentElement && button.parentElement.classList.contains('open') ? 'true' : 'false');
        }, 0);
      });
    });
  });
}());
