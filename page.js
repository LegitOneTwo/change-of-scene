// ==================== SHARED PAGE LOGIC ====================
// Per-page content rendering + language toggle

(function () {
    const page = document.body.getAttribute('data-page');
    const systemLang = (navigator.language || 'en').startsWith('ru') ? 'ru' : 'en';
    // localStorage is an external boundary: access can be denied and the stored
    // value can be stale. Treat it as a hint, never as a trusted config source.
    function storedLang() {
        try {
            const v = localStorage.getItem('cafe-lang');
            return v === 'ru' || v === 'en' ? v : null;
        } catch (e) {
            return null;
        }
    }
    function storeLang(lang) {
        try { localStorage.setItem('cafe-lang', lang); } catch (e) { /* unavailable */ }
    }

    const savedLang = storedLang();
    let currentLang = savedLang || systemLang;
    let collapsedYears = {};
    let menuQuery = '';

    // Language notification
    if (!savedLang && systemLang !== 'en') {
        const note = document.createElement('div');
        note.className = 'lang-notify';
        note.innerHTML = '<span>🌐 This site is also available <a href="#" id="switchToEn">in English</a>.</span> <button class="lang-notify-close">&times;</button>';
        // In flow, above the content, so it can never cover controls.
        document.body.prepend(note);
        note.querySelector('#switchToEn').addEventListener('click', (e) => {
            e.preventDefault();
            setLang('en');
            note.remove();
        });
        note.querySelector('.lang-notify-close').addEventListener('click', () => note.remove());
        setTimeout(() => { if (note.parentNode) note.remove(); }, 12000);
    }

    // Page titles live in the same dictionary as the rest of the copy.
    const DOC_TITLE_KEYS = {
        menu: 'pageMenuTitle',
        archive: 'pageArchiveTitle',
        testimonies: 'pageTestimoniesTitle',
        about: 'pageAboutTitle',
        founder: 'pageFounderTitle'
    };

    function syncDocument() {
        document.documentElement.lang = currentLang;
        const t = translations[currentLang];
        const key = DOC_TITLE_KEYS[page];
        document.title = key ? `${t[key]} • Change Of Scene` : t.title;
    }

    function setLang(lang) {
        currentLang = lang;
        storeLang(lang);
        // Menu text changes with the language; a query typed in the previous
        // language would otherwise match nothing after the re-render.
        menuQuery = '';
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
    function escapeHtml(str) {
        return String(str).replace(/[&<>"']/g, ch => ({
            '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
        }[ch]));
    }

    function renderMenuSection(title, items, isCompact) {
        if (!items || items.length === 0) return '';
        const gridClass = isCompact ? 'cold-drinks-grid' : 'menu-grid';
        return `<section class="menu-section" data-section="${escapeHtml(title)}">
            <h3>${title}</h3>
            <div class="${gridClass}">${items.map(item => {
                let cls = '';
                if (item.dangerous) cls = 'dangerous';
                if (item.radiant) cls = 'radiant';
                return `<div class="menu-card ${cls}"><h4>${item.name}</h4><p>${item.desc}</p><span class="price-tag">${item.price}</span></div>`;
            }).join('')}</div>
        </section>`;
    }

    function renderArchiveSection() {
        const archive = archiveData[currentLang];
        return `<div class="archive-grid">${archive.map(entry => {
            const isCollapsed = collapsedYears[entry.date] || false;
            const entryId = `entry-${entry.date.replace(/[^\d]/g, '')}`;
            return `<article class="archive-year-card ${isCollapsed ? 'collapsed' : ''}" data-year="${entry.date}">
                <button type="button" class="archive-year-header" aria-expanded="${!isCollapsed}" aria-controls="${entryId}">
                    <span>📜 ${entry.date} — ${entry.title}</span><span class="toggle-icon">▼</span>
                </button>
                <div class="archive-year-content" id="${entryId}">
                    <div class="archive-entry-text">${entry.text}</div>
                    ${entry.quote ? `<div class="archive-quote">"${entry.quote}"</div>` : ''}
                    ${entry.tag ? `<div style="margin-top:0.4rem"><span class="archive-tag">🏷️ ${entry.tag}</span></div>` : ''}
                </div>
            </article>`;
        }).join('')}</div>`;
    }

    function attachArchiveEvents() {
        document.querySelectorAll('.archive-year-card').forEach(card => {
            const header = card.querySelector('.archive-year-header');
            header.addEventListener('click', () => {
                const collapsed = card.classList.toggle('collapsed');
                collapsedYears[card.dataset.year] = collapsed;
                header.setAttribute('aria-expanded', String(!collapsed));
            });
        });

        const tools = document.querySelector('.archive-tools');
        if (!tools) return;
        tools.querySelector('[data-archive-action="expand"]').addEventListener('click', () => {
            document.querySelectorAll('.archive-year-card').forEach(card => {
                card.classList.remove('collapsed');
                collapsedYears[card.dataset.year] = false;
                card.querySelector('.archive-year-header').setAttribute('aria-expanded', 'true');
            });
        });
        tools.querySelector('[data-archive-action="collapse"]').addEventListener('click', () => {
            document.querySelectorAll('.archive-year-card').forEach(card => {
                card.classList.add('collapsed');
                collapsedYears[card.dataset.year] = true;
                card.querySelector('.archive-year-header').setAttribute('aria-expanded', 'false');
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

    // ==================== LIVE CAFÉ STATE ====================
    // The Cycle follows the month, the Scene follows the hour.
    function currentCycleKey(date) {
        const found = cafeRhythm.cycles.find(c => c.months.includes(date.getMonth() + 1));
        return found ? found.key : 'stillness';
    }

    function currentSceneKey(date) {
        const hour = date.getHours();
        const found = cafeRhythm.scenes.find(s =>
            s.from < s.to
                ? (hour >= s.from && hour < s.to)
                : (hour >= s.from || hour < s.to));
        return found ? found.key : 'day';
    }

    function renderStatePanel() {
        const now = new Date();
        const t = translations[currentLang];
        const s = sceneData[currentLang];
        const cycle = s.cycles[currentCycleKey(now)];
        const scene = s.scenes[currentSceneKey(now)];
        const time = now.toLocaleTimeString(currentLang, { hour: '2-digit', minute: '2-digit' });
        return `<div class="state-panel">
            <div class="state-panel-head">
                <span class="state-panel-icon">✦</span>
                ${t.stateTitle}
                <span class="state-panel-time">${time}</span>
            </div>
            <div class="state-grid">
                <div class="state-item">
                    <span class="state-icon">${cycle.icon}</span>
                    <div class="state-body">
                        <span class="state-label">${t.stateCycleLabel}</span>
                        <strong>${cycle.name}</strong>
                        <p>${cycle.desc}</p>
                    </div>
                </div>
                <div class="state-item">
                    <span class="state-icon">${scene.icon}</span>
                    <div class="state-body">
                        <span class="state-label">${t.stateSceneLabel}</span>
                        <strong>${scene.name}</strong>
                        <p>${scene.desc}</p>
                    </div>
                </div>
            </div>
        </div>`;
    }

    // ==================== MENU SEARCH ====================
    function attachMenuSearch() {
        const input = document.getElementById('menuSearch');
        if (!input) return;
        const count = document.querySelector('.menu-count');
        const empty = document.getElementById('menuEmpty');
        const sections = [...document.querySelectorAll('.menu-section')];
        const total = sections.reduce((sum, s) => sum + s.querySelectorAll('.menu-card').length, 0);

        input.value = menuQuery;

        const filter = () => {
            menuQuery = input.value.trim();
            const q = menuQuery.toLowerCase();
            let visible = 0;
            sections.forEach(section => {
                let sectionVisible = 0;
                section.querySelectorAll('.menu-card').forEach(card => {
                    const match = !q || card.textContent.toLowerCase().includes(q);
                    card.hidden = !match;
                    if (match) sectionVisible++;
                });
                section.hidden = sectionVisible === 0;
                visible += sectionVisible;
            });
            if (count) count.textContent = `${visible} / ${total}`;
            if (empty) empty.hidden = visible > 0;
        };

        input.addEventListener('input', filter);
        filter();
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
        syncDocument();

        if (page === 'menu') {
            const menu = menuData[currentLang];
            document.getElementById('pageContent').innerHTML = `
                <h2>${t.menuTitle}</h2>
                <div class="menu-tools">
                    <input id="menuSearch" class="menu-search" type="search" placeholder="${t.menuSearchPlaceholder}" aria-label="${t.menuSearchPlaceholder}" autocomplete="off">
                    <span class="menu-count"></span>
                </div>
                <div id="menuEmpty" class="menu-empty" hidden>${t.menuEmpty}</div>
                ${renderMenuSection(t.hotDrinks, menu.hot, false)}
                ${renderMenuSection(t.coldDrinks, menu.cold, true)}
                ${renderMenuSection(t.desserts, menu.desserts, false)}
                ${renderMenuSection(t.savoryBites, menu.savory, false)}
                ${renderMenuSection(t.firstCourses, menu.starters, false)}
                ${renderMenuSection(t.mainCourses, menu.mains, false)}
            `;
            attachMenuSearch();
        } else if (page === 'archive') {
            document.getElementById('pageContent').innerHTML = `
                <h2>${t.archiveTitle}</h2>
                <div class="archive-tools">
                    <button type="button" class="tool-btn" data-archive-action="expand">${t.archiveExpandAll}</button>
                    <button type="button" class="tool-btn" data-archive-action="collapse">${t.archiveCollapseAll}</button>
                </div>
                ${renderArchiveSection()}
            `;
            attachArchiveEvents();
        } else if (page === 'testimonies') {
            document.getElementById('pageContent').innerHTML = `
                <h2>${t.testimoniesTitle}</h2>
                ${renderTestimoniesSection()}
            `;
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
                ${renderStatePanel()}
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

                <div class="founder-section">
                    <div class="founder-header"><span class="founder-icon">🎵</span><span class="founder-title">${t.founderTitle}</span><span class="founder-icon">♪</span></div>
                    <div class="investor-content"><p>${t.founderText1}</p><p>${t.founderText2}</p><p>${t.founderQuote}</p></div>
                </div>
            `;
        }
    }

    translateNavAndHero();
    renderPage();

    // The panel reports the current hour; refresh it so a tab left open does
    // not freeze at the load-time scene. Only the panel is replaced.
    if (page === 'home') {
        setInterval(() => {
            const panel = document.querySelector('.state-panel');
            if (panel) panel.outerHTML = renderStatePanel();
        }, 60000);
    }
})();
