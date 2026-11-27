(function () {
  if (document.getElementById('pmCredit')) return;
  var NAME = 'Eng. Nasser', PHONE = '01503127310', INTL = '201503127310';
  var css = [
    '.pm-credit{margin:20px auto 70px;width:min(80%,300px);padding:17px 14px 15px;border-radius:14px;background:#0a0507;border:1px solid rgba(255,60,80,.28);box-shadow:0 12px 30px rgba(0,0,0,.5),inset 0 0 26px rgba(255,31,51,.07);text-align:center;font-family:"Segoe UI",Tahoma,Arial,sans-serif;color:#fff;direction:ltr;box-sizing:border-box}',
    '.pm-credit small{display:block;font-size:8px;letter-spacing:.32em;text-transform:uppercase;color:#8f7e82}',
    '.pm-credit-name{margin:7px 0 2px;font-size:22px;font-weight:800;letter-spacing:.05em;color:#fff;text-shadow:0 0 2px #fff,0 0 8px #ff4d5e,0 0 16px #ff1f33,0 0 32px #ff1f33,0 0 58px #c00018;animation:pmNeon 3.6s linear infinite}',
    '@keyframes pmNeon{0%,100%{opacity:1}3%{opacity:.55}5%{opacity:1}42%{opacity:1}44%{opacity:.7}46%{opacity:1}}',
    '@media (prefers-reduced-motion:reduce){.pm-credit-name{animation:none}}',
    '.pm-credit-line{width:52px;height:2px;margin:7px auto 2px;border-radius:2px;background:linear-gradient(90deg,transparent,#ff2f42,transparent);box-shadow:0 0 10px rgba(255,47,66,.8)}',
    '.pm-credit-num{margin-top:6px;font-size:11px;letter-spacing:.3em;color:#d8c9cc}',
    '.pm-credit-btns{display:flex;gap:8px;justify-content:center;margin-top:10px}',
    '.pm-credit-btns a{display:inline-flex;align-items:center;gap:7px;padding:7px 15px;border-radius:999px;font-weight:700;font-size:12px;letter-spacing:.04em;text-decoration:none;background:transparent;transition:transform .15s ease}',
    '.pm-credit-btns a:hover{transform:translateY(-1px)}',
    '.pm-credit-btns a.call{color:#ff5c6c;border:1px solid rgba(255,60,80,.75);box-shadow:0 0 12px rgba(255,31,51,.35),inset 0 0 8px rgba(255,31,51,.12);text-shadow:0 0 6px rgba(255,60,80,.8)}',
    '.pm-credit-btns a.wa{color:#4be38a;border:1px solid rgba(46,204,113,.65);box-shadow:0 0 12px rgba(46,204,113,.3),inset 0 0 8px rgba(46,204,113,.1);text-shadow:0 0 6px rgba(75,227,138,.8)}',
    '.pm-credit-btns a.call svg{stroke:#ff5c6c;filter:drop-shadow(0 0 4px rgba(255,60,80,.8))}',
    '.pm-credit-btns a.wa svg{stroke:#4be38a;filter:drop-shadow(0 0 4px rgba(75,227,138,.8))}',
    '.pm-credit-btns svg{width:13px;height:13px;fill:none;stroke-width:2;stroke-linecap:round;stroke-linejoin:round}'
  ].join('\n');
  var st = document.createElement('style'); st.textContent = css; document.head.appendChild(st);
  var d = document.createElement('div'); d.id = 'pmCredit'; d.className = 'pm-credit';
  d.innerHTML = '<small>Designed &amp; developed by</small>' +
    '<div class="pm-credit-name"></div><div class="pm-credit-line"></div><div class="pm-credit-num"></div>' +
    '<div class="pm-credit-btns">' +
    '<a class="call" href="tel:+' + INTL + '"><svg viewBox="0 0 24 24"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.2a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z"/></svg>Call</a>' +
    '<a class="wa" href="https://wa.me/' + INTL + '" target="_blank" rel="noopener"><svg viewBox="0 0 24 24"><path d="M21 11.5a8.4 8.4 0 0 1-12.4 7.4L3 20.5l1.7-5.4A8.4 8.4 0 1 1 21 11.5z"/></svg>WhatsApp</a></div>';
  d.querySelector('.pm-credit-name').textContent = NAME;
  d.querySelector('.pm-credit-num').textContent = PHONE;
  var m = document.querySelector('main');
  if (m && m.parentNode) m.parentNode.insertBefore(d, m.nextSibling); else document.body.appendChild(d);
})();
