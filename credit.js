(function () {
  if (document.getElementById('pmCredit')) return;
  var NAME = 'Eng. Nasser', PHONE = '01503127310', INTL = '201503127310';
  var css = [
    '.pm-credit{margin:20px auto 70px;width:min(80%,300px);padding:17px 14px 15px;border-radius:14px;background:#FFF6E8;border:1px solid rgba(193,18,31,.25);box-shadow:0 6px 18px rgba(80,20,0,.12);text-align:center;font-family:"Segoe UI",Tahoma,Arial,sans-serif;color:#1B1B1B;direction:ltr;box-sizing:border-box}',
    '.pm-credit small{display:block;font-size:8px;letter-spacing:.32em;text-transform:uppercase;color:#7a6a60}',
    '.pm-credit-name{margin:7px 0 2px;font-size:22px;font-weight:800;letter-spacing:.05em;color:#C1121F;text-shadow:none}',
    '@keyframes pmNeon{0%,100%{opacity:1}3%{opacity:.55}5%{opacity:1}42%{opacity:1}44%{opacity:.7}46%{opacity:1}}',
    '@media (prefers-reduced-motion:reduce){.pm-credit-name{animation:none}}',
    '.pm-credit-line{width:52px;height:2px;margin:7px auto 2px;border-radius:2px;background:linear-gradient(90deg,transparent,#C1121F,transparent)}',
    '.pm-credit-num{margin-top:6px;font-size:11px;letter-spacing:.3em;color:#5a4a42}',
    '.pm-credit-btns{display:flex;gap:8px;justify-content:center;margin-top:10px}',
    '.pm-credit-btns a{display:inline-flex;align-items:center;gap:7px;padding:7px 15px;border-radius:999px;font-weight:700;font-size:12px;letter-spacing:.04em;text-decoration:none;background:transparent;transition:transform .15s ease}',
    '.pm-credit-btns a:hover{transform:translateY(-1px)}',
    '.pm-credit-btns a.call{color:#C1121F;border:1px solid #C1121F}',
    '.pm-credit-btns a.wa{color:#0F7B4A;border:1px solid #0F7B4A}',
    '.pm-credit-btns a.call svg{stroke:#C1121F}',
    '.pm-credit-btns a.wa svg{stroke:#0F7B4A}',
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
