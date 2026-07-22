// ==================== SHARED PAGE LOGIC ====================
// Per-page content rendering + language toggle

(function () {
    const page = document.body.getAttribute('data-page');
    const systemLang = (navigator.language || 'en').startsWith('ru') ? 'ru' : 'en';
    const savedLang = localStorage.getItem('cafe-lang');
    let currentLang = savedLang || systemLang;
    let collapsedYears = {};

    // Language notification
    if (!savedLang && systemLang !== 'en') {
        const note = document.createElement('div');
        note.className = 'lang-notify';
        note.innerHTML = '🌐 This site is also available <a href="#" id="switchToEn">in English</a>. <button class="lang-notify-close">&times;</button>';
        document.body.appendChild(note);
        note.querySelector('#switchToEn').addEventListener('click', (e) => {
            e.preventDefault();
            setLang('en');
            note.remove();
        });
        note.querySelector('.lang-notify-close').addEventListener('click', () => note.remove());
        setTimeout(() => { if (note.parentNode) note.remove(); }, 12000);
    }

    function setLang(lang) {
        currentLang = lang;
        localStorage.setItem('cafe-lang', lang);
        document.getElementById('langToggle').title = lang === 'ru' ? 'English' : 'Русский';
        translateNavAndHero();
        renderPage();
    }

    function toggleLang() {
        setLang(currentLang === 'ru' ? 'en' : 'ru');
    }

    document.getElementById('langToggle').addEventListener('click', toggleLang);
    document.getElementById('langToggle').title = currentLang === 'ru' ? 'English' : 'Русский';

    // ==================== HELPERS ====================
    function renderMenuSection(title, items, isCompact) {
        if (!items || items.length === 0) return '';
        const gridClass = isCompact ? 'cold-drinks-grid' : 'menu-grid';
        return `<h3>${title}</h3><div class="${gridClass}">${items.map(item => {
            let cls = '';
            if (item.dangerous) cls = 'dangerous';
            if (item.radiant) cls = 'radiant';
            return `<div class="menu-card ${cls}"><h4>${item.name}</h4><p>${item.desc}</p><span class="price-tag">${item.price}</span></div>`;
        }).join('')}</div>`;
    }

    function renderArchiveSection() {
        const archive = archiveData[currentLang];
        return `<div class="archive-grid">${archive.map(entry => {
            const isCollapsed = collapsedYears[entry.date] || false;
            return `<div class="archive-year-card ${isCollapsed ? 'collapsed' : ''}" data-year="${entry.date}"><div class="archive-year-header"><span>📜 ${entry.date} — ${entry.title}</span><span class="toggle-icon">▼</span></div><div class="archive-year-content"><div class="archive-entry-text">${entry.text}</div>${entry.quote ? `<div class="archive-quote">"${entry.quote}"</div>` : ''}<div style="margin-top:0.4rem"><span class="archive-tag">🏷️ ${entry.tag || 'Архив'}</span></div></div></div>`;
        }).join('')}</div>`;
    }

    function attachArchiveEvents() {
        document.querySelectorAll('.archive-year-card').forEach(card => {
            const header = card.querySelector('.archive-year-header');
            header.addEventListener('click', () => {
                const year = card.dataset.year;
                card.classList.toggle('collapsed');
                collapsedYears[year] = card.classList.contains('collapsed');
            });
        });
    }

    function renderTestimoniesSection() {
        const testimonies = testimoniesData[currentLang];
        const t = translations[currentLang];
        return `<div class="testimonies-section">
            <div class="testimonies-note">📖 ${t.testimoniesNote}</div>
            <div class="testimonies-list">${testimonies.map(entry => {
            const ratingHtml = `<div class="testimony-rating"><div class="rating-segments">${Array.from({length:10}, (_,i) =>
                `<span class="rating-seg ${i < entry.rating ? 'filled' : ''}" style="animation-delay:${i*0.04}s"></span>`
            ).join('')}</div><span class="rating-num">${entry.rating}<small>/10</small></span></div>`;
            return `<div class="testimony-card"><div class="testimony-card-header"><span class="testimony-card-title">${entry.title}</span>${ratingHtml}</div><blockquote>${entry.text}</blockquote></div>`;
        }).join('')}</div></div>`;
    }

    // ==================== PER-PAGE RENDERING ====================
    function updateFooter() {
        document.getElementById('footerCopyright').innerHTML = translations[currentLang].footerCopyright;
        document.getElementById('footerBadge').innerHTML = translations[currentLang].footerBadge;
    }

    function translateNavAndHero() {
        const t = translations[currentLang];
        const links = document.querySelectorAll('.nav-link');
        const keys = ['navHome', 'navFounder', 'navMenu', 'navArchive', 'navTestimonies', 'navAbout'];
        links.forEach((link, i) => {
            if (keys[i]) {
                const label = link.querySelector('.nav-label');
                if (label) label.textContent = t[keys[i]];
                link.setAttribute('aria-label', t[keys[i]]);
            }
        });

        const badge = document.querySelector('.hero-badge');
        const desc = document.querySelector('.hero-desc');
        const btnMenu = document.querySelector('.hero-actions .btn-primary');
        const btnArchive = document.querySelector('.hero-actions .btn-outline');
        if (badge) badge.textContent = t.heroBadge;
        if (desc) desc.innerHTML = t.heroDesc;
        if (btnMenu) btnMenu.textContent = t.heroBtnMenu;
        if (btnArchive) btnArchive.textContent = t.heroBtnArchive;

        const heroTitle = document.querySelector('.hero-sm .hero-title');
        const heroSub = document.querySelector('.hero-sm .hero-subtitle');
        if (heroTitle) {
            const titleMap = { menu: 'pageMenuTitle', archive: 'pageArchiveTitle', testimonies: 'pageTestimoniesTitle', about: 'pageAboutTitle', founder: 'pageFounderTitle' };
            if (titleMap[page]) heroTitle.textContent = t[titleMap[page]];
        }
        if (heroSub) {
            const subMap = { menu: 'pageMenuSub', archive: 'pageArchiveSub', testimonies: 'pageTestimoniesSub', about: 'pageAboutSub', founder: 'pageFounderSub' };
            if (subMap[page]) heroSub.textContent = t[subMap[page]];
        }

        const homeSub = document.querySelector('.hero:not(.hero-sm) .hero-subtitle');
        if (homeSub) homeSub.textContent = t.subtitle;
    }

    function renderPage() {
        const t = translations[currentLang];
        updateFooter();

        if (page === 'menu') {
            const menu = menuData[currentLang];
            document.getElementById('pageContent').innerHTML = `
                ${renderMenuSection(t.hotDrinks, menu.hot, false)}
                ${renderMenuSection(t.coldDrinks, menu.cold, true)}
                ${renderMenuSection(t.desserts, menu.desserts, false)}
                ${renderMenuSection(t.savoryBites, menu.savory, false)}
                ${renderMenuSection(t.firstCourses, menu.starters, false)}
                ${renderMenuSection(t.mainCourses, menu.mains, false)}
            `;
        } else if (page === 'archive') {
            document.getElementById('pageContent').innerHTML = renderArchiveSection();
            attachArchiveEvents();
        } else if (page === 'testimonies') {
            document.getElementById('pageContent').innerHTML = renderTestimoniesSection();
        } else if (page === 'about') {
            document.getElementById('pageContent').innerHTML = `
                <h2>${t.rulesTitle}</h2>
                <ul class="rules-list">${t.rules.map((r, i) => `<li><strong>${i+1}.</strong> ${r}</li>`).join('')}</ul>
                <hr>
                <div class="investor-section">
                    <div class="investor-header">
                        <span class="investor-icon">🔥</span>
                        <span class="investor-title">${t.studioTitle}</span>
                        <span class="investor-icon">✧</span>
                    </div>
                    <div class="investor-content">
                        <p>${t.studioText1}</p><p>${t.studioText2}</p>
                        <p>${t.studioText3}</p><p>${t.studioText4}</p>
                    </div>
                    <div class="signature">${t.signature}</div>
                </div>
                <hr>
                <h2>${t.howToFindTitle}</h2>
                <ol>${t.howToFindSteps.map(s => `<li>${s}</li>`).join('')}</ol>
                <hr>
                <h2>${t.contactsTitle}</h2>
                <p>${t.contactsText}</p>
                <div class="liminal-divider">✧ ✦ ✧</div>
                <p style="text-align:center;color:var(--ctp-overlay2);font-family:monospace;margin-top:0.8rem;font-size:0.75rem;">
                    ${t.finalPhrase}<br>
                    <span style="font-size:0.7rem;">${t.finalSub}</span><br>
                    <span style="font-size:0.6rem;color:var(--ctp-red);">${t.studioCredit}</span>
                </p>
            `;
        } else if (page === 'founder') {
            document.getElementById('pageContent').innerHTML = `
                <p>${t.founderBio1}</p>
                <p>${t.founderBio2}</p>
                <p>${t.founderBio3}</p>
                <hr>
                <h2>${t.founderMusic}</h2>
                <p>${t.founderMusicText1}</p>
                <p>${t.founderMusicText2}</p>
                <p>${t.founderMusicText3}</p>
                <hr>
                <h2>${t.founderPhilosophy}</h2>
                <p>${t.founderPhilosophyText1}</p>
                <p>${t.founderPhilosophyText2}</p>
                <hr>
                <h2>${t.founderNow}</h2>
                <p>${t.founderNowText}</p>
            `;
        } else if (page === 'home') {
            document.getElementById('pageContent').innerHTML = `
                <h2>${t.conceptTitle}</h2>
                <p>${t.conceptText}</p>
                <ul>${t.conceptItems.map(i => `<li>${i}</li>`).join('')}</ul>
                <blockquote>${t.conceptQuote}</blockquote>

                <h2>${t.sceneChangeTitle}</h2>
                <p>${t.sceneChangeText1}</p>
                <p>${t.sceneChangeText2}</p>
                <p>${t.sceneChangeText3}</p>

                <h2>${t.cyclesTitle}</h2>
                <p>${t.cyclesText1}</p>
                <ul>${t.cyclesList.map(c => `<li>${c}</li>`).join('')}</ul>
                <p>${t.cyclesText2}</p>
            `;
        }
    }

    translateNavAndHero();
    renderPage();
})();
