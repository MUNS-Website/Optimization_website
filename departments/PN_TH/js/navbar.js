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
            <span class="mobile-nav-title">เมนูหลัก</span>
            <button class="mobile-close" id="mobileClose" aria-label="ปิดเมนู">×</button>
        </div>
        <nav class="mobile-nav-list">
            <div class="mobile-nav-item"><a href="{prefix}index.html" class="mobile-nav-link">หน้าหลัก</a></div>
            <div class="mobile-nav-item">
                <div class="mobile-nav-link" onclick="toggleMobileDropdown(this)">เกี่ยวกับภาควิชา <span>▾</span></div>
                <div class="mobile-dropdown">
                    <a href="{prefix}about.html">ประวัติและความเป็นมา</a>
                    <a href="{prefix}vision.html">วิสัยทัศน์ / พันธกิจ</a>
                    <a href="{prefix}head_dept.html">ทำเนียบหัวหน้าภาค</a>
                    <a href="{prefix}staff.html">บุคลากร</a>
                    <a href="{prefix}contact.html">ติดต่อเรา</a>
                </div>
            </div>
            <div class="mobile-nav-item">
                <div class="mobile-nav-link" onclick="toggleMobileDropdown(this)">การศึกษา <span>▾</span></div>
                <div class="mobile-dropdown">
                    <a href="{prefix}degree_bns.html">หลักสูตรปริญญาตรี</a>
                    <a href="{prefix}degree_mns.html">หลักสูตรปริญญาโท</a>
                    <a href="{prefix}degree_phd.html">หลักสูตรปริญญาเอก</a>
                    <a href="https://ns.mahidol.ac.th/nurse_th/Specialty/specialty_program.html" target="_blank">หลักสูตรการพยาบาลเฉพาะทาง</a>
                    <a href="{prefix}scholarship.html">ทุนการศึกษา</a>
                </div>
            </div>
            <div class="mobile-nav-item"><a href="{prefix}research.html" class="mobile-nav-link">วิจัยและนวัตกรรม</a></div>
            <div class="mobile-nav-item"><a href="{prefix}academic.html" class="mobile-nav-link">บริการวิชาการ</a></div>
            <div class="mobile-nav-item">
                <div class="mobile-nav-link" onclick="toggleMobileDropdown(this)">การจัดการความรู้ <span>▾</span></div>
                <div class="mobile-dropdown">
                    <a href="{prefix}km/km_PN.html">การจัดการความรู้ของภาควิชาฯ</a>
                    <a href="{prefix}km.html">วัตถุประสงค์ / กระบวนการ</a>
                </div>
            </div>
            <div class="mobile-nav-item"><a href="{prefix}activities.html" class="mobile-nav-link">ภาพกิจกรรม</a></div>
        </nav>
    </div>
`;

const headerRaw = `
    <div class="topbar">
        <div class="topbar-links">
            <a href="https://ns.mahidol.ac.th/" target="_blank">คณะพยาบาลศาสตร์</a>
            <span class="sep">|</span>
            <a href="https://mahidol.ac.th/" target="_blank">มหาวิทยาลัยมหิดล</a>
        </div>
        <div class="topbar-social" style="display:flex; gap:8px; align-items:center;">
            <a href="https://web.facebook.com/%E0%B9%80%E0%B8%A5%E0%B8%B5%E0%B9%89%E0%B8%A2%E0%B8%87%E0%B8%A5%E0%B8%B9%E0%B8%81%E0%B8%A3%E0%B8%AD%E0%B8%9A%E0%B9%82%E0%B8%A5%E0%B8%81_Care4kid-107980808251682" target="_blank" title="Facebook" style="transition:transform 0.2s; background:transparent !important;" onmouseover="this.style.transform='scale(1.1)'" onmouseout="this.style.transform='scale(1)'"><img src="{prefix}img/template/fb.png" alt="Facebook" style="width:24px; height:24px; border-radius:50%; object-fit:cover; filter:none !important;"></a>
            <a href="https://twitter.com/Care4kid" target="_blank" title="Twitter" style="transition:transform 0.2s; background:transparent !important;" onmouseover="this.style.transform='scale(1.1)'" onmouseout="this.style.transform='scale(1)'"><img src="{prefix}img/template/twitter.png" alt="Twitter" style="width:24px; height:24px; border-radius:50%; object-fit:cover; filter:none !important;"></a>
            <a href="https://www.instagram.com/care4kids.pednsmu/" target="_blank" title="Instagram" style="transition:transform 0.2s; background:transparent !important;" onmouseover="this.style.transform='scale(1.1)'" onmouseout="this.style.transform='scale(1)'"><img src="{prefix}img/template/ig.png" alt="Instagram" style="width:24px; height:24px; border-radius:50%; object-fit:cover; filter:none !important;"></a>
            <a href="https://lin.ee/EuSGVWA" target="_blank" title="Line" style="transition:transform 0.2s; background:transparent !important;" onmouseover="this.style.transform='scale(1.1)'" onmouseout="this.style.transform='scale(1)'"><img src="{prefix}img/template/line.png" alt="Line" style="width:24px; height:24px; border-radius:50%; object-fit:cover; filter:none !important;"></a>
            <a href="https://www.youtube.com/channel/UCrVgXKB_J63NwayAdfOH-2A" target="_blank" title="Youtube" style="transition:transform 0.2s; background:transparent !important;" onmouseover="this.style.transform='scale(1.1)'" onmouseout="this.style.transform='scale(1)'"><img src="{prefix}img/template/youtube.png" alt="Youtube" style="width:24px; height:24px; border-radius:50%; object-fit:cover; filter:none !important;"></a>
        </div>
        <div class="topbar-lang">
            <a href="https://ns.mahidol.ac.th/department/pn_dept_en/" target="_parent" title="English version">
                <img src="{prefix}img/template/en.png" alt="EN"> EN
            </a>
        </div>
    </div>

    <header class="site-header">
        <div class="header-logo">
            <img src="{prefix}../FN_TH/img/logo/logo.png" alt="โลโก้มหาวิทยาลัยมหิดล" onerror="this.src='{prefix}img/logo/logo.png'">
        </div>
        <div class="header-text" style="text-align: right;">
            <div class="header-dept-name">ภาควิชาการพยาบาลกุมารเวชศาสตร์</div>
        </div>
    </header>

    <nav class="navbar" id="mainNav">
        <div class="navbar-inner">
            <span class="navbar-brand" style="display:none" id="navBrand">ภาควิชาการพยาบาลกุมารเวชศาสตร์</span>
            <ul class="nav-menu">
                <li class="nav-item"><a href="{prefix}index.html" class="nav-link">หน้าหลัก</a></li>
                <li class="nav-item">
                    <span class="nav-link">เกี่ยวกับภาควิชา <span class="nav-arrow">▾</span></span>
                    <ul class="dropdown">
                        <li><a href="{prefix}about.html" class="dropdown-item">ประวัติและความเป็นมา</a></li>
                        <li><a href="{prefix}vision.html" class="dropdown-item">วิสัยทัศน์ / พันธกิจ</a></li>
                        <li><a href="{prefix}head_dept.html" class="dropdown-item">ทำเนียบหัวหน้าภาค</a></li>
                        <li><a href="{prefix}staff.html" class="dropdown-item">บุคลากร</a></li>
                        <li><a href="{prefix}contact.html" class="dropdown-item">ติดต่อเรา</a></li>
                    </ul>
                </li>
                <li class="nav-item">
                    <span class="nav-link">การศึกษา <span class="nav-arrow">▾</span></span>
                    <ul class="dropdown">
                        <li><a href="{prefix}degree_bns.html" class="dropdown-item">หลักสูตรปริญญาตรี</a></li>
                        <li><a href="{prefix}degree_mns.html" class="dropdown-item">หลักสูตรปริญญาโท</a></li>
                        <li><a href="{prefix}degree_phd.html" class="dropdown-item">หลักสูตรปริญญาเอก</a></li>
                        <li><a href="https://ns.mahidol.ac.th/nurse_th/Specialty/specialty_program.html" target="_blank" class="dropdown-item">หลักสูตรการพยาบาลเฉพาะทาง</a></li>
                        <li><a href="{prefix}scholarship.html" class="dropdown-item">ทุนการศึกษา</a></li>
                    </ul>
                </li>
                <li class="nav-item"><a href="{prefix}research.html" class="nav-link">วิจัยและนวัตกรรม</a></li>
                <li class="nav-item"><a href="{prefix}academic.html" class="nav-link">บริการวิชาการ</a></li>
                <li class="nav-item">
                    <span class="nav-link">การจัดการความรู้ <span class="nav-arrow">▾</span></span>
                    <ul class="dropdown">
                        <li><a href="{prefix}km/km_PN.html" class="dropdown-item">การจัดการความรู้ของภาควิชาฯ</a></li>
                        <li><a href="{prefix}km.html" class="dropdown-item">วัตถุประสงค์ / กระบวนการ</a></li>
                    </ul>
                </li>
                <li class="nav-item"><a href="{prefix}activities.html" class="nav-link">ภาพกิจกรรม</a></li>
            </ul>
            <button class="hamburger" id="hamburger" aria-label="เปิด/ปิดเมนู">
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
});
