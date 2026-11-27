(function () {
  if (document.getElementById('pmCredit')) return;
  var NAME = 'Eng. Nasser', PHONE = '01503127310', INTL = '201503127310';
  var css = [
    '.pm-credit{margin:28px 14px 18px;padding:22px 16px 20px;border-radius:22px;background:radial-gradient(120% 140% at 50% 0%,#2a1016 0%,#120a0d 60%,#0c0708 100%);text-align:center;font-family:"Segoe UI",Tahoma,Arial,sans-serif;color:#fff;box-shadow:0 10px 28px rgba(0,0,0,.28);direction:ltr}',
    '@media (min-width:760px){.pm-credit{max-width:520px;margin-left:auto;margin-right:auto}}',
    '.pm-credit small{display:block;font-size:11px;letter-spacing:.28em;text-transform:uppercase;color:#c9b8bb}',
    '.pm-credit-name{margin:8px 0 14px;font-size:30px;font-weight:800;letter-spacing:.04em;color:#fff;text-shadow:0 0 4px #fff,0 0 10px #ff3d4d,0 0 22px #ff1f33,0 0 42px #e0001a;animation:pmGlow 2.6s ease-in-out infinite}',
    '@keyframes pmGlow{0%,100%{text-shadow:0 0 4px #fff,0 0 10px #ff3d4d,0 0 22px #ff1f33,0 0 42px #e0001a}50%{text-shadow:0 0 3px #fff,0 0 7px #ff3d4d,0 0 14px #ff1f33,0 0 26px #e0001a}}',
    '@media (prefers-reduced-motion:reduce){.pm-credit-name{animation:none}}',
    '.pm-credit-num{font-size:15px;letter-spacing:.12em;color:#e9dcde;margin-bottom:14px}',
    '.pm-credit-btns{display:flex;gap:10px;justify-content:center}',
    '.pm-credit-btns a{display:inline-flex;align-items:center;gap:7px;padding:10px 18px;border-radius:999px;font-weight:700;font-size:14px;text-decoration:none;color:#fff;border:1px solid rgba(255,255,255,.35)}',
    '.pm-credit-btns a.call{background:#C1121F;border-color:#C1121F;box-shadow:0 0 14px rgba(255,31,51,.45)}',
    '.pm-credit-btns a.wa{background:#1fa855;border-color:#1fa855;box-shadow:0 0 14px rgba(31,168,85,.4)}',
    '.pm-credit-btns svg{width:16px;height:16px;fill:none;stroke:#fff;stroke-width:2;stroke-linecap:round;stroke-linejoin:round}'
  ].join('\n');
  var st = document.createElement('style'); st.textContent = css; document.head.appendChild(st);
  var d = document.createElement('div'); d.id = 'pmCredit'; d.className = 'pm-credit';
  d.innerHTML = '<small>Designed &amp; developed by</small>' +
    '<div class="pm-credit-name"></div><div class="pm-credit-num"></div>' +
    '<div class="pm-credit-btns">' +
    '<a class="call" href="tel:+' + INTL + '"><svg viewBox="0 0 24 24"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.2a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z"/></svg>Call</a>' +
    '<a class="wa" href="https://wa.me/' + INTL + '" target="_blank" rel="noopener"><svg viewBox="0 0 24 24"><path d="M21 11.5a8.4 8.4 0 0 1-12.4 7.4L3 20.5l1.7-5.4A8.4 8.4 0 1 1 21 11.5z"/></svg>WhatsApp</a></div>';
  d.querySelector('.pm-credit-name').textContent = NAME;
  d.querySelector('.pm-credit-num').textContent = PHONE;
  var m = document.querySelector('main');
  if (m && m.parentNode) m.parentNode.insertBefore(d, m.nextSibling); else document.body.appendChild(d);
})();
