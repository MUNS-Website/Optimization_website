let prefix = "";
const scripts = document.getElementsByTagName("script");
for (let i = 0; i < scripts.length; i++) {
    const src = scripts[i].getAttribute("src");
    if (src && src.endsWith("js/navbar.js")) {
        prefix = src.replace("js/navbar.js", "");
        break;
    }
}

const mobileMenuRaw = `
    <div class="mobile-nav-panel">
        <div class="mobile-nav-header">
            <span class="mobile-nav-title">Main Menu</span>
            <button class="mobile-close" id="mobileClose" aria-label="Close menu">×</button>
        </div>
        <nav class="mobile-nav-list">
            <div class="mobile-nav-item"><a href="{prefix}index.html" class="mobile-nav-link">Home</a></div>
            <div class="mobile-nav-item"><a href="{prefix}about.html" class="mobile-nav-link">About Us</a></div>
            <div class="mobile-nav-item"><a href="{prefix}staff.html" class="mobile-nav-link">Staff</a></div>
            <div class="mobile-nav-item">
                <div class="mobile-nav-link" onclick="toggleMobileDropdown(this)">Education <span>▾</span></div>
                <div class="mobile-dropdown">
                    <a href="{prefix}degree_BNS.html">Bachelor's Degree</a>
                    <a href="{prefix}degree_mns.html">Master's Degree</a>
                    <a href="{prefix}degree_phd.html">Doctorate Degree</a>
                    <a href="https://ns.mahidol.ac.th/nurse_en/Specialty_Programs/specialty_programs.html" target="_blank">Nursing Specialty Programs</a>
                </div>
            </div>
            <div class="mobile-nav-item"><a href="{prefix}research.html" class="mobile-nav-link">Research</a></div>
            <div class="mobile-nav-item"><a href="{prefix}academic.html" class="mobile-nav-link">Academic</a></div>
            <div class="mobile-nav-item"><a href="{prefix}contact.html" class="mobile-nav-link">Contact Us</a></div>
        </nav>
    </div>
`;

const headerRaw = `
    <div class="topbar">
        <div class="topbar-links">
            <a href="https://ns.mahidol.ac.th/nurse_en/" target="_blank">Faculty of Nursing</a>
            <span class="sep">|</span>
            <a href="https://mahidol.ac.th/" target="_blank">Mahidol University</a>
        </div>
        <div class="topbar-social" style="display:flex; gap:8px; align-items:center;">
            <a href="https://web.facebook.com/%E0%B9%80%E0%B8%A5%E0%B8%B5%E0%B9%89%E0%B8%A2%E0%B8%87%E0%B8%A5%E0%B8%B9%E0%B8%81%E0%B8%A3%E0%B8%AD%E0%B8%9A%E0%B9%82%E0%B8%A5%E0%B8%81_Care4kid-107980808251682" target="_blank" title="Facebook" style="transition:transform 0.2s; background:transparent !important;" onmouseover="this.style.transform='scale(1.1)'" onmouseout="this.style.transform='scale(1)'"><img src="{prefix}img/template/fb.png" alt="Facebook" style="width:24px; height:24px; border-radius:50%; object-fit:cover; filter:none !important;"></a>
            <a href="https://twitter.com/Care4kid" target="_blank" title="Twitter" style="transition:transform 0.2s; background:transparent !important;" onmouseover="this.style.transform='scale(1.1)'" onmouseout="this.style.transform='scale(1)'"><img src="{prefix}img/template/twitter.png" alt="Twitter" style="width:24px; height:24px; border-radius:50%; object-fit:cover; filter:none !important;"></a>
            <a href="https://www.instagram.com/care4kids.pednsmu/" target="_blank" title="Instagram" style="transition:transform 0.2s; background:transparent !important;" onmouseover="this.style.transform='scale(1.1)'" onmouseout="this.style.transform='scale(1)'"><img src="{prefix}img/template/ig.png" alt="Instagram" style="width:24px; height:24px; border-radius:50%; object-fit:cover; filter:none !important;"></a>
            <a href="https://lin.ee/EuSGVWA" target="_blank" title="Line" style="transition:transform 0.2s; background:transparent !important;" onmouseover="this.style.transform='scale(1.1)'" onmouseout="this.style.transform='scale(1)'"><img src="{prefix}img/template/line.png" alt="Line" style="width:24px; height:24px; border-radius:50%; object-fit:cover; filter:none !important;"></a>
            <a href="https://www.youtube.com/channel/UCrVgXKB_J63NwayAdfOH-2A" target="_blank" title="Youtube" style="transition:transform 0.2s; background:transparent !important;" onmouseover="this.style.transform='scale(1.1)'" onmouseout="this.style.transform='scale(1)'"><img src="{prefix}img/template/youtube.png" alt="Youtube" style="width:24px; height:24px; border-radius:50%; object-fit:cover; filter:none !important;"></a>
        </div>
        <div class="topbar-lang">
            <a href="{prefix}../PN_TH/index.html" target="_parent" title="Thai version">
                <img src="{prefix}img/template/th.jpg" alt="TH"> TH
            </a>
        </div>
    </div>

    <header class="site-header">
        <div class="header-logo">
            <img src="{prefix}img/logo/logo.png" alt="Mahidol University Logo" onerror="this.src='{prefix}img/logo/logo.png'">
        </div>
        <div class="header-text" style="text-align: right;">
            <div class="header-dept-name">Department of Pediatric Nursing</div>
        </div>
    </header>

    <nav class="navbar" id="mainNav">
        <div class="navbar-inner">
            <span class="navbar-brand" style="display:none" id="navBrand">Department of Pediatric Nursing</span>
            <ul class="nav-menu">
                <li class="nav-item"><a href="{prefix}index.html" class="nav-link">Home</a></li>
                <li class="nav-item"><a href="{prefix}about.html" class="nav-link">About Us</a></li>
                <li class="nav-item"><a href="{prefix}staff.html" class="nav-link">Staff</a></li>
                <li class="nav-item">
                    <span class="nav-link">Education <span class="nav-arrow">▾</span></span>
                    <ul class="dropdown">
                        <li><a href="{prefix}degree_BNS.html" class="dropdown-item">Bachelor's Degree</a></li>
                        <li><a href="{prefix}degree_mns.html" class="dropdown-item">Master's Degree</a></li>
                        <li><a href="{prefix}degree_phd.html" class="dropdown-item">Doctorate Degree</a></li>
                        <li><a href="https://ns.mahidol.ac.th/nurse_en/Specialty_Programs/specialty_programs.html" target="_blank" class="dropdown-item">Nursing Specialty Programs</a></li>
                    </ul>
                </li>
                <li class="nav-item"><a href="{prefix}research.html" class="nav-link">Research</a></li>
                <li class="nav-item"><a href="{prefix}academic.html" class="nav-link">Academic</a></li>
                <li class="nav-item"><a href="{prefix}contact.html" class="nav-link">Contact Us</a></li>
            </ul>
            <button class="hamburger" id="hamburger" aria-label="Open/Close menu">
                <span></span><span></span><span></span>
            </button>
        </div>
    </nav>
    <div id="header-placeholder"></div>
`;

const mobileMenuHTML = mobileMenuRaw.replace(/\{prefix\}/g, prefix);
const headerHTML = headerRaw.replace(/\{prefix\}/g, prefix);

// Wait until DOM is fully loaded before injecting
document.addEventListener("DOMContentLoaded", function() {
    
    // Inject Mobile Menu
    const mobileContainer = document.getElementById('mobile-menu-container');
    if (mobileContainer) {
        mobileContainer.classList.add('mobile-menu');
        mobileContainer.id = 'mobileMenu';
        mobileContainer.innerHTML = mobileMenuHTML;
    }

    // Inject Header
    const headerContainer = document.getElementById('header-container');
    if (headerContainer) {
        headerContainer.innerHTML = headerHTML;
    }

    // Set Active Link Logic
    let currentPage = window.location.pathname.split('/').pop() || 'index.html';
    if (currentPage === '' || currentPage === '/') {
        currentPage = 'index.html';
    }

    // Handle desktop nav active states
    const desktopLinks = document.querySelectorAll('.nav-menu a');
    desktopLinks.forEach(link => {
        const href = link.getAttribute('href') || '';
        // match exact file name regardless of prefix
        if (href.endsWith(currentPage) && !href.startsWith('http')) {
            link.classList.add('active');
            if (link.classList.contains('dropdown-item')) {
                const parentNav = link.closest('.nav-item');
                if (parentNav) {
                    const parentSpan = parentNav.querySelector('.nav-link');
                    if (parentSpan) parentSpan.classList.add('active');
                }
            }
        }
    });
    
    // Handle mobile nav active states
    const mobileLinks = document.querySelectorAll('.mobile-nav-list a');
    mobileLinks.forEach(link => {
        const href = link.getAttribute('href') || '';
        if (href.endsWith(currentPage) && !href.startsWith('http')) {
            link.classList.add('active');
            if (link.closest('.mobile-dropdown')) {
                const parentNav = link.closest('.mobile-nav-item');
                if (parentNav) {
                    const parentDiv = parentNav.querySelector('.mobile-nav-link');
                    if (parentDiv) parentDiv.classList.add('active');
                }
            }
        }
    });

    // Bind Mobile Menu Interactions
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobileMenu');
    const mobileClose = document.getElementById('mobileClose');

    if (hamburger && mobileMenu && mobileClose) {
        function openMobileMenu() {
            mobileMenu.classList.add('open');
            hamburger.classList.add('open');
            document.body.style.overflow = 'hidden';
        }

        function closeMobileMenu() {
            mobileMenu.classList.remove('open');
            hamburger.classList.remove('open');
            document.body.style.overflow = '';
        }

        hamburger.addEventListener('click', openMobileMenu);
        mobileClose.addEventListener('click', closeMobileMenu);

        mobileMenu.addEventListener('click', function (e) {
            if (e.target === mobileMenu) closeMobileMenu();
        });

        document.addEventListener('keydown', e => {
            if (e.key === 'Escape') closeMobileMenu();
        });
    }

    // Bind Mobile Dropdown Interaction
    window.toggleMobileDropdown = function(el) {
        const dropdown = el.nextElementSibling;
        if (dropdown) {
            dropdown.classList.toggle('open');
            el.classList.toggle('active');
        }
    };

    // Bind Sticky Nav Interaction
    const navBrand = document.getElementById('navBrand');
    window.addEventListener('scroll', () => {
        const header = document.querySelector('.site-header');
        if (header) {
            const headerBottom = header.getBoundingClientRect().bottom;
            if (navBrand) navBrand.style.display = headerBottom < 0 ? 'block' : 'none';
        }
    }, { passive: true });

    // Dynamic Footer Language Switcher
    const footerLangSwitchers = document.querySelectorAll('a[href="https://ns.mahidol.ac.th/department/pn_dept_en/"], a[href="https://ns.mahidol.ac.th/department/pn_dept/"]');
    footerLangSwitchers.forEach(el => {
        el.href = prefix + "../PN_TH/index.html";
        // Fix incorrect English text/flag if present in EN footer
        if (el.innerHTML.includes('English') || el.innerHTML.includes('EN')) {
            el.innerHTML = '<img src="' + prefix + 'img/template/th.jpg" alt="TH" style="width:22px;height:15px;border-radius:2px;">\n                        Thai';
        }
    });
});
