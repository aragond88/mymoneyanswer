(function () {
  function trackEvent(name, params) {
    if (!name) return;
    var payload = Object.assign({
      page_path: window.location.pathname,
      page_title: document.title
    }, params || {});

    if (typeof window.gtag === 'function') {
      window.gtag('event', name, payload);
    }
  }

  window.trackEvent = trackEvent;

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
    if (burger && menu) {
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
    }

    document.querySelectorAll('.faq-q').forEach(function (button) {
      button.setAttribute('aria-expanded', button.parentElement && button.parentElement.classList.contains('open') ? 'true' : 'false');
      button.addEventListener('click', function () {
        window.setTimeout(function () {
          button.setAttribute('aria-expanded', button.parentElement && button.parentElement.classList.contains('open') ? 'true' : 'false');
        }, 0);
      });
    });

    document.addEventListener('click', function (event) {
      var link = event.target.closest && event.target.closest('a[href]');
      if (!link) return;

      var href = link.getAttribute('href') || '';

      if (href.indexOf('wealthsimple.com/invite') !== -1) {
        trackEvent('wealthsimple_affiliate_clicked', {
          link_url: href,
          link_text: (link.textContent || '').trim().slice(0, 120)
        });
      }

      if (link.classList.contains('tool-card')) {
        trackEvent('tool_card_clicked', {
          tool_url: href,
          tool_name: (link.querySelector('h2') ? link.querySelector('h2').textContent : link.textContent || '').trim().slice(0, 120)
        });
      }
    });
  });
}());
