let currentLang = 'de';

function setLang(lang) {
    currentLang = lang;
    const dict = translations[lang];
    document.documentElement.lang = lang;
    document.getElementById('metaDesc').setAttribute('content', dict.meta_desc);
    document.getElementById('btnDe').classList.toggle('active', lang === 'de');
    document.getElementById('btnEn').classList.toggle('active', lang === 'en');

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (dict[key]) el.textContent = dict[key];
    });

    document.querySelectorAll('[data-i18n-html]').forEach(el => {
        const key = el.getAttribute('data-i18n-html');
        if (dict[key]) el.innerHTML = dict[key];
    });

    document.getElementById('mailCta').href =
        'mailto:alexander.dick.dev@googlemail.com?subject=' + dict.mail_subject;
}

function switchTab(view, btn) {
    document.querySelectorAll('.arch-tab').forEach(t => t.classList.remove('active'));
    btn.classList.add('active');
    document.getElementById('topoView').style.display = view === 'topo' ? 'flex' : 'none';
    document.getElementById('codeView').style.display = view === 'code' ? 'block' : 'none';
}

function copyEmail() {
    navigator.clipboard.writeText('alexander.dick.dev@googlemail.com').then(() => {
        const btn = document.getElementById('copyMailBtn');
        btn.textContent = translations[currentLang].contact_copied;
        setTimeout(() => {
            btn.textContent = translations[currentLang].contact_btn_copy;
        }, 2200);
    });
}