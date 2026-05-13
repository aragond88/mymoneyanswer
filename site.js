(function () {
  var toolPages = {
    '/': 'money_decision_tool',
    '/index.html': 'money_decision_tool',
    '/tools.html': 'tools_hub',
    '/calculator.html': 'investment_calculator',
    '/budget-planner.html': 'budget_planner',
    '/debt-payoff-calculator.html': 'debt_payoff_calculator',
    '/emergency-fund-calculator.html': 'emergency_fund_calculator'
  };
  var trackedOnce = {};
  var ahrefsAnalyticsKey = 'mVdGLqmc3H9Ja8AnUwhA4w';

  function loadAhrefsAnalytics() {
    if (document.querySelector('script[src="https://analytics.ahrefs.com/analytics.js"][data-key="' + ahrefsAnalyticsKey + '"]')) return;

    var script = document.createElement('script');
    script.async = true;
    script.src = 'https://analytics.ahrefs.com/analytics.js';
    script.setAttribute('data-key', ahrefsAnalyticsKey);
    document.head.appendChild(script);
  }

  function currentPath() {
    return window.location.pathname || '/';
  }

  function currentToolName() {
    var path = currentPath();
    return toolPages[path] || toolPages[path.replace(/\/$/, '/index.html')] || '';
  }

  function trackEvent(name, params) {
    if (!name) return;
    var payload = Object.assign({
      page_path: currentPath(),
      page_title: document.title
    }, params || {});

    if (typeof window.gtag === 'function') {
      window.gtag('event', name, payload);
    }
  }

  window.trackEvent = trackEvent;

  function trackOnce(key, name, params) {
    if (trackedOnce[key]) return;
    trackedOnce[key] = true;
    trackEvent(name, params);
  }

  window.trackOnce = trackOnce;

  function linkText(link) {
    return (link.textContent || '').replace(/\s+/g, ' ').trim().slice(0, 120);
  }

  function isExternalUrl(url) {
    try {
      return new URL(url, window.location.href).origin !== window.location.origin;
    } catch (error) {
      return false;
    }
  }

  function isPriorityInternalLink(href) {
    return /(?:index|tools|calculator|budget-planner|debt-payoff-calculator|emergency-fund-calculator|wealthsimple-review)\.html(?:#.*)?$/.test(href);
  }

  function isCtaLink(link) {
    return link.classList.contains('btn') ||
      link.classList.contains('btn-cta') ||
      link.classList.contains('tool-btn') ||
      link.classList.contains('tool-card') ||
      link.classList.contains('next-card') ||
      link.classList.contains('related-card') ||
      link.classList.contains('lesson-card') ||
      link.classList.contains('open-acct-card') ||
      link.classList.contains('aff-mini') ||
      link.classList.contains('drawer-link') ||
      link.classList.contains('res-card') ||
      Boolean(link.closest('.hero-cta'));
  }

  function trackToolStart(source) {
    var toolName = currentToolName();
    if (!toolName) return;
    trackOnce('tool_started:' + toolName, 'tool_started', {
      tool_name: toolName,
      start_source: source || 'interaction'
    });
  }

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
    loadAhrefsAnalytics();

    var toolName = currentToolName();
    if (toolName) {
      trackEvent('tool_page_viewed', {
        tool_name: toolName
      });
    }

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
      var button = event.target.closest && event.target.closest('button');

      if (button) {
        if (button.matches('.country-btn, .ctry-btn, [data-country], [data-c]')) {
          trackEvent('country_toggle_clicked', {
            tool_name: currentToolName(),
            country: button.dataset.country || button.dataset.c || ''
          });
        }

        if (button.matches('.method-btn, [data-method], [data-preset]')) {
          trackToolStart('option');
          trackEvent('tool_option_selected', {
            tool_name: currentToolName(),
            option_type: button.dataset.method ? 'method' : (button.dataset.preset ? 'preset' : 'option'),
            option_value: button.dataset.method || button.dataset.preset || ''
          });
        }

        if (button.matches('.opt')) {
          trackOnce('money_tool_started', 'money_tool_started', {
            tool_name: 'money_decision_tool',
            start_source: 'answer'
          });
        }

        if ((button.textContent || '').toLowerCase().indexOf('download') !== -1) {
          trackEvent('tool_download_clicked', {
            tool_name: currentToolName(),
            button_text: (button.textContent || '').replace(/\s+/g, ' ').trim().slice(0, 80)
          });
        }
      }

      if (!link) return;

      var href = link.getAttribute('href') || '';
      var text = linkText(link);

      if (href.indexOf('wealthsimple.com/invite') !== -1) {
        trackEvent('wealthsimple_affiliate_clicked', {
          link_url: href,
          link_text: text
        });
      }

      if (isExternalUrl(href) && href.indexOf('wealthsimple.com/invite') === -1) {
        trackEvent('outbound_link_clicked', {
          link_url: href,
          link_text: text
        });
      }

      if (link.classList.contains('tool-card')) {
        trackEvent('tool_card_clicked', {
          tool_url: href,
          tool_name: linkText(link.querySelector('h2') || link)
        });
      }

      if (link.classList.contains('open-acct-card') || link.classList.contains('aff-mini')) {
        trackEvent('account_resource_clicked', {
          link_url: href,
          link_text: text,
          is_affiliate: href.indexOf('wealthsimple.com/invite') !== -1
        });
      }

      if (link.classList.contains('next-card') || link.classList.contains('related-card') || link.classList.contains('lesson-card')) {
        trackEvent('internal_recommendation_clicked', {
          link_url: href,
          link_text: text
        });
      }

      if (isCtaLink(link) || isPriorityInternalLink(href)) {
        trackEvent('internal_cta_clicked', {
          link_url: href,
          link_text: text,
          source_tool: currentToolName()
        });
      }
    });

    document.addEventListener('input', function (event) {
      if (!event.target.closest('form, .tool-grid, .planner-grid, .calculator-card, #app')) return;
      trackToolStart('input');
    });

    document.addEventListener('change', function (event) {
      if (!event.target.closest('form, .tool-grid, .planner-grid, .calculator-card, #app')) return;
      trackToolStart('change');
    });

    document.addEventListener('click', function (event) {
      var faqButton = event.target.closest && event.target.closest('.faq-q');
      if (!faqButton) return;
      window.setTimeout(function () {
        var item = faqButton.parentElement;
        if (item && item.classList.contains('open')) {
          trackEvent('faq_opened', {
            question: (faqButton.textContent || '').replace(/\s+/g, ' ').trim().slice(0, 120)
          });
        }
      }, 0);
    });
  });
}());
