(function () {
  if (document.getElementById('pmBranchesBtn')) return;

  var CSS = [
    '.pm-branches-btn{position:fixed;left:12px;bottom:calc(86px + env(safe-area-inset-bottom));z-index:10;display:flex;align-items:center;gap:8px;background:#C1121F;color:#fff;font-family:"Segoe UI",Tahoma,Arial,sans-serif;font-weight:700;font-size:14px;padding:11px 16px;border-radius:999px;box-shadow:0 8px 20px rgba(193,18,31,.35);border:0;cursor:pointer}',
    '.pm-branches-btn svg{width:18px;height:18px;fill:none;stroke:#fff;stroke-width:2;stroke-linecap:round;stroke-linejoin:round}',
    '.pm-br-sheet{position:fixed;inset:0;z-index:2147483000;background:rgba(20,14,12,.5);display:flex;align-items:flex-end}',
    '.pm-br-sheet[hidden]{display:none}',
    '.pm-br-in{background:#fffdfa;width:100%;max-height:86vh;overflow:auto;border-radius:20px 20px 0 0;padding:14px 16px 22px;font-family:"Segoe UI",Tahoma,Arial,sans-serif;color:#1B1B1B}',
    '@media (min-width:760px){.pm-br-in{max-width:720px;margin:0 auto}}',
    '.pm-br-head{display:flex;align-items:center;justify-content:space-between;margin-bottom:2px}',
    '.pm-br-head h3{margin:0;font-size:16px}',
    '.pm-br-head button{background:none;border:0;font-size:24px;line-height:1;color:#6b625c;cursor:pointer;padding:0 4px}',
    '.pm-br-hello{margin:2px 2px 12px;font-size:12.5px;color:#6b625c;line-height:1.7}',
    '.pm-br{display:block;border:1px solid #eae2d6;border-radius:14px;padding:11px 12px;margin-bottom:9px;text-decoration:none;color:#1B1B1B;background:#fff}',
    '.pm-br b{display:block;font-size:14.5px;margin-bottom:3px;color:#8F0D17}',
    '.pm-br span{display:block;font-size:12.5px;line-height:1.65;color:#4a4440}',
    '.pm-br em{display:inline-block;margin-top:7px;font-style:normal;font-size:12px;font-weight:700;color:#0F7B4A}'
  ].join('\n');

  var BRANCHES = [
    { name: 'فرع طنطا 📍', addr: 'الإستاد شارع الحياة بجوار حديقة الطفل وجزارة هندي وأمام معرض أباظة للسيارات', map: 'https://maps.app.goo.gl/nVXSjhBgGNLtvV8m9' },
    { name: 'فرع ميت غمر 📍', addr: 'شارع بورسعيد أمام مطبعة السعادة', map: 'https://maps.app.goo.gl/THs2fjnDKBFiU2YG8' },
    { name: 'فرع السنبلاوين 📍', addr: 'شارع الزراعية بجوار ماك للسجاد', map: 'https://maps.app.goo.gl/mSYQ3pnscGAVcW159' },
    { name: 'فرع المنصورة 📍', addr: 'حى الجامعة - بجوار مول الجامعة', map: 'https://maps.app.goo.gl/XsWF3rUpLGX6ENLB6?g_st=aw' }
  ];

  var style = document.createElement('style');
  style.textContent = CSS;
  document.head.appendChild(style);

  var btn = document.createElement('button');
  btn.type = 'button';
  btn.className = 'pm-branches-btn';
  btn.id = 'pmBranchesBtn';
  btn.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21s7-6.1 7-11a7 7 0 1 0-14 0c0 4.9 7 11 7 11z"></path><circle cx="12" cy="10" r="2.6"></circle></svg><span>Location 📌</span>';
  document.body.appendChild(btn);

  var sheet = document.createElement('div');
  sheet.className = 'pm-br-sheet';
  sheet.id = 'pmBrSheet';
  sheet.hidden = true;

  var inner = document.createElement('div');
  inner.className = 'pm-br-in';

  var head = document.createElement('div');
  head.className = 'pm-br-head';
  var h3 = document.createElement('h3');
  h3.textContent = 'عناوين الفروع';
  var close = document.createElement('button');
  close.type = 'button';
  close.id = 'pmBrClose';
  close.setAttribute('aria-label', 'قفل');
  close.textContent = '×';
  head.appendChild(h3);
  head.appendChild(close);
  inner.appendChild(head);

  var hello = document.createElement('p');
  hello.className = 'pm-br-hello';
  hello.textContent = 'أهلاً وسهلاً بحضرتك يافندم 💙 — للوصول إلينا من خلال GPS:';
  inner.appendChild(hello);

  BRANCHES.forEach(function (b) {
    var a = document.createElement('a');
    a.className = 'pm-br';
    a.href = b.map;
    a.target = '_blank';
    a.rel = 'noopener';
    var t = document.createElement('b');
    t.textContent = b.name;
    var s = document.createElement('span');
    s.textContent = b.addr;
    var em = document.createElement('em');
    em.textContent = 'افتح الموقع على الخريطة';
    a.appendChild(t);
    a.appendChild(s);
    a.appendChild(em);
    inner.appendChild(a);
  });

  sheet.appendChild(inner);
  document.body.appendChild(sheet);

  btn.addEventListener('click', function () { sheet.hidden = false; });
  close.addEventListener('click', function () { sheet.hidden = true; });
  sheet.addEventListener('click', function (e) { if (e.target === sheet) sheet.hidden = true; });
})();
