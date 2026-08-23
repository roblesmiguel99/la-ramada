// La Ramada — mobile nav and live open/closed status.
(function () {
  'use strict';

  // Mobile nav toggle
  var toggle = document.querySelector('.nav-toggle');
  var panel = document.querySelector('.mobile-panel');
  if (toggle && panel) {
    toggle.addEventListener('click', function () {
      var open = panel.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    panel.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        panel.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Live hours status — Mon–Thu & Sun 10:00–22:00, Fri–Sat 10:00–23:00 (local time)
  var statusEl = document.querySelector('[data-hours-status]');
  var rowEls = document.querySelectorAll('[data-hours-day]');
  if (statusEl || rowEls.length) {
    var now = new Date();
    var day = now.getDay(); // 0 Sun .. 6 Sat
    var minutes = now.getHours() * 60 + now.getMinutes();
    var closeMinutes = (day === 5 || day === 6) ? 23 * 60 : 22 * 60;
    var openMinutes = 10 * 60;
    var isOpen = minutes >= openMinutes && minutes < closeMinutes;

    if (statusEl) {
      statusEl.textContent = isOpen ? 'Open now' : 'Closed now';
      var dot = statusEl.querySelector('.dot');
      if (dot) dot.style.background = isOpen ? 'var(--lime-bright)' : 'var(--ember-dim)';
    }
    rowEls.forEach(function (row) {
      if (parseInt(row.getAttribute('data-hours-day'), 10) === day) {
        row.classList.add('today');
      }
    });
  }
})();
