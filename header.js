const headerTemplate = `
<style>
    /* הופך את הלוגו של האתר ללחיץ עם סמן אצבע */
    .site-logo {
        cursor: pointer !important;
    }

    /* מוודא מעבר חלק ל-side-menu (מחשב + מובייל) */
    .side-menu {
        transition: transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1), 
                    opacity 0.3s ease, 
                    box-shadow 0.4s ease,
                    right 0.35s cubic-bezier(0.4, 0, 0.2, 1) !important;
    }

    /* מוודא מעבר חלק לכל האייקונים */
    .profile-click-box, .profile-icon-1, .profile-icon-2,
    .love-click-box, .love-icon-1, .love-icon-2,
    .bell-click-box, .bell-icon-1, .bell-icon-2 {
        transition: transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1) !important;
    }

    /* 🔒 חסימה מוחלטת ל-X במצב סגור */
    #menu-close-btn {
        display: none !important;
    }

    /* 🍔 כפתור ההמבורגר - עיצוב בסיסי */
    .hamburger-btn {
        display: flex !important;
        position: absolute !important;
        right: 15px !important; 
        top: 50% !important; 
        transform: translateY(-50%) scale(0.8) !important;
        flex-direction: column !important;
        gap: 6px !important;
        background: transparent !important;
        border: none !important;
        cursor: pointer !important;
        padding: 8px !important;
        margin: 0 !important;
        width: auto !important;
        height: auto !important;
        box-shadow: none !important;
        border-radius: 0 !important;
        z-index: 2000 !important;
        transition: all 0.35s cubic-bezier(0.25, 0.8, 0.25, 1) !important;
    }

    .hamburger-btn span {
        display: block !important;
        height: 1.5px !important; 
        background-color: #8c8c8c !important; 
        border-radius: 2px !important;
        transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1) !important;
    }
    
    .hamburger-btn .line-top { width: 32px !important; }
    .hamburger-btn .line-bottom { width: 18px !important; align-self: flex-start !important; }

    .hamburger-btn:hover span { background-color: #875b33 !important; }
    .hamburger-btn:hover .line-top { width: 18px !important; }
    .hamburger-btn:hover .line-bottom { width: 32px !important; }

    /* 🖥️ עיצוב ייחודי למחשב (מעל 768px) */
    @media (min-width: 769px) {
        .hamburger-btn {
            display: none !important;
            opacity: 0;
            right: -15px !important;
            top: 53% !important;
        }

        body.scrolled-to-search .side-menu {
            opacity: 0 !important;
            pointer-events: none !important;
            transform: translateX(60px) !important;
        }

        body.scrolled-to-search .hamburger-btn {
            display: flex !important;
            opacity: 1 !important;
            transform: translateY(-50%) scale(1) !important;
        }

        body.scrolled-to-search .profile-click-box,
        body.scrolled-to-search .profile-icon-1,
        body.scrolled-to-search .love-click-box,
        body.scrolled-to-search .love-icon-1,
        body.scrolled-to-search .bell-click-box,
        body.scrolled-to-search .bell-icon-1 {
            transform: translateX(-55px) scale(1) !important;
        }
        body.scrolled-to-search .profile-icon-2,
        body.scrolled-to-search .love-icon-2,
        body.scrolled-to-search .bell-icon-2 {
            transform: translateX(-55px) scale(1) !important;
            opacity: 0 !important;
        }

        body.scrolled-to-search .profile-click-box:hover ~ .profile-icon-1 { opacity: 0 !important; transform: translateX(-55px) scale(1.08) !important; }
        body.scrolled-to-search .profile-click-box:hover ~ .profile-icon-2 { opacity: 1 !important; transform: translateX(-55px) scale(1.08) !important; }
        body.scrolled-to-search .profile-click-box:active ~ .profile-icon-2 { transform: translateX(-55px) scale(0.96) !important; }

        body.scrolled-to-search .love-click-box:hover ~ .love-icon-1 { opacity: 0 !important; transform: translateX(-55px) scale(1.08) !important; }
        body.scrolled-to-search .love-click-box:hover ~ .love-icon-2 { opacity: 1 !important; transform: translateX(-55px) scale(1.08) !important; }
        body.scrolled-to-search .love-click-box:active ~ .love-icon-2 { transform: translateX(-55px) scale(0.96) !important; }

        body.scrolled-to-search .bell-click-box:hover ~ .bell-icon-1 { opacity: 0 !important; transform: translateX(-55px) scale(1.08) !important; }
        body.scrolled-to-search .bell-click-box:hover ~ .bell-icon-2 { opacity: 1 !important; transform: translateX(-55px) scale(1.08) !important; }
        body.scrolled-to-search .bell-click-box:active ~ .bell-icon-2 { transform: translateX(-55px) scale(0.96) !important; }
    }

    /* 🔥 עיצוב התפריט הפתוח (עובד מכל מקום - מובייל + מחשב) */
    body.sidebar-open .side-menu,
    .side-menu.open {
        position: fixed !important;
        top: 0 !important;
        right: 0 !important;
        width: 280px !important;
        height: 100vh !important;
        background: #ffffff !important;
        opacity: 1 !important;
        pointer-events: all !important;
        transform: translateX(0) !important;
        display: flex !important;
        flex-direction: column !important;
        padding: 70px 20px 20px 20px !important;
        box-shadow: -15px 0 45px rgba(0, 0, 0, 0.22) !important; 
        z-index: 100000 !important;
    }

    /* 🔥 כפתור ה-X נקי בלי CSS כפול */
    body.sidebar-open #menu-close-btn,
    .side-menu.open #menu-close-btn,
    body.sidebar-open .menu-close-btn,
    .side-menu.open .menu-close-btn {
        display: flex !important; 
        position: absolute !important;
        top: 20px !important;
        left: 20px !important;
        width: 38px !important;
        height: 38px !important;
        background-color: #f4f4f5 !important;
        border: none !important;
        border-radius: 50% !important;
        color: #8c8c8c !important;
        cursor: pointer !important;
        align-items: center !important;
        justify-content: center !important;
        padding: 0 !important;
        margin: 0 !important;
        box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05) !important;
        z-index: 100002 !important;
        transition: all 0.25s cubic-bezier(0.25, 0.8, 0.25, 1) !important;
    }

    body.sidebar-open #menu-close-btn:hover,
    .side-menu.open #menu-close-btn:hover {
        background-color: #ffffff !important;
        color: #875b33 !important;
        transform: scale(1.12) !important;
        box-shadow: 0 0 15px rgba(135, 91, 51, 0.45) !important;
    }

    body.sidebar-open #menu-close-btn:active,
    .side-menu.open #menu-close-btn:active {
        transform: scale(0.94) !important;
    }
</style>

<header class="site-header">
    <div class="header-container">
        
        <button class="hamburger-btn" id="hamburger-btn" aria-label="תפריט">
            <span class="line-top"></span>
            <span class="line-bottom"></span>
        </button>
        
        <div class="header-left-link">
            <a href="club.html" class="club-link">מועדון המשקיעים חכם</a>
        </div>

        <div class="logo-container">
            <img src="/logo.svg" alt="משקיעים חכם" class="site-logo desktop-logo">
            <img src="/logo-mobile.png" alt="משקיעים חכם" class="site-logo mobile-logo">
        </div>

        <div class="profile-click-box"></div>
        <div class="profile-icon-1"></div>
        <div class="profile-icon-2"></div>

        <div class="love-click-box"></div>
        <div class="love-icon-1"></div>
        <div class="love-icon-2"></div>

        <div class="bell-click-box"></div>
        <div class="bell-icon-1"></div>
        <div class="bell-icon-2"></div>
        
        <nav class="side-menu" id="side-menu">
            <button type="button" class="menu-close-btn" id="menu-close-btn">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.3" style="width: 20px; height: 20px; display: block;">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
            </button>
            
            <!-- 📱 אזור האייקונים במובייל (אחיד ובאמצע) -->
            <div class="mobile-thick-item">
                <div class="mobile-icons-flex">
                    <!-- פרופיל -->
                    <div class="mobile-icon-box profile-box">
                        <div class="m-click-box"></div>
                        <div class="m-icon-1 profile-bg-1"></div>
                        <div class="m-icon-2 profile-bg-2"></div>
                    </div>
                    <!-- לבבות -->
                    <div class="mobile-icon-box love-box">
                        <div class="m-click-box"></div>
                        <div class="m-icon-1 love-bg-1"></div>
                        <div class="m-icon-2 love-bg-2"></div>
                    </div>
                    <!-- פעמון -->
                    <div class="mobile-icon-box bell-box">
                        <div class="m-click-box"></div>
                        <div class="m-icon-1 bell-bg-1"></div>
                        <div class="m-icon-2 bell-bg-2"></div>
                    </div>
                </div>
            </div>
            <a href="help.html" class="menu-link">עזרה</a>
            <a href="publish.html" class="menu-link">פרסם</a>
            <a href="blog.html" class="menu-link">פודקאסטים</a>
            <a href="share-demo.html" class="menu-link">Simplex3d</a>
            <a href="israelInvestments.html" class="menu-link">השקעות בארץ</a>
            <a href="abroad.html" class="menu-link">השקעות בחו"ל</a>
            <a href="club.html" class="menu-link">מועדון המשקיעים חכם</a>
            <a href="forum.html" class="menu-link">פורום</a>
        </nav>

    </div>
</header>
`;

// הזרקת התבנית
const headerPlaceholder = document.getElementById('header-placeholder');
if (headerPlaceholder) {
    headerPlaceholder.innerHTML = headerTemplate;
}

// לחיצה על הלוגואים
document.querySelectorAll('.site-logo').forEach(logo => {
    logo.addEventListener('click', () => {
        window.location.href = 'index.html';
    });
});

// מנוע זיהוי גלילה
function handleScrollAnimations() {
    const path = window.location.pathname;
    const isHomePage = path === '/' || path.endsWith('index.html') || path === '';

    if (window.innerWidth <= 768) {
        if (isHomePage) {
            if (window.scrollY > 243) {
                document.body.classList.add('header-scrolled');
            } else {
                document.body.classList.remove('header-scrolled');
            }
        }
    } else {
        if (window.scrollY > 320) {
            document.body.classList.add('scrolled-to-search');
        } else {
            document.body.classList.remove('scrolled-to-search');
            document.body.classList.remove('sidebar-open');
            const sideMenu = document.getElementById('side-menu');
            if (sideMenu) {
                sideMenu.classList.remove('open');
            }
        }
    }
}

window.addEventListener('DOMContentLoaded', () => {
    const path = window.location.pathname;
    const isHomePage = path === '/' || path.endsWith('index.html') || path === '';
    
    if (!isHomePage) {
        document.body.classList.add('force-white-header');
    }
});

window.addEventListener('scroll', handleScrollAnimations); 
window.addEventListener('load', handleScrollAnimations);

// פתיחה וסגירה
document.addEventListener('DOMContentLoaded', () => {
    const sideMenu = document.getElementById('side-menu');
    const hamburgerBtn = document.getElementById('hamburger-btn');

    if (hamburgerBtn) {
        hamburgerBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            e.preventDefault();
            if (sideMenu) {
                sideMenu.classList.toggle('open');
            }
            document.body.classList.toggle('sidebar-open');
        });
    }

    document.addEventListener('click', (e) => {
        const isOpen = sideMenu?.classList.contains('open') || document.body.classList.contains('sidebar-open');
        if (!isOpen) return;

        if (e.target.closest('#menu-close-btn, .menu-close-btn')) {
            sideMenu?.classList.remove('open');
            document.body.classList.remove('sidebar-open');
            return;
        }

        const clickedInsideMenu = sideMenu?.contains(e.target);
        const clickedHamburger = hamburgerBtn?.contains(e.target);

        if (!clickedInsideMenu && !clickedHamburger) {
            sideMenu?.classList.remove('open');
            document.body.classList.remove('sidebar-open');
        }
    });

    document.addEventListener('click', (e) => {
        const link = e.target.closest('.menu-link');
        if (link && sideMenu) {
            if (window.innerWidth <= 768) {
                sideMenu.style.transition = 'none'; 
            }
            sideMenu.classList.remove('open');
            document.body.classList.remove('sidebar-open');
        }
    });
});

window.addEventListener('pagehide', () => {
    const sideMenu = document.getElementById('side-menu');
    if (sideMenu) {
        if (window.innerWidth <= 768) {
            sideMenu.style.transition = 'none';
        }
        sideMenu.classList.remove('open');
        document.body.classList.remove('sidebar-open');
    }
});

window.addEventListener('pageshow', () => {
    const sideMenu = document.getElementById('side-menu');
    if (sideMenu) {
        sideMenu.classList.remove('open');
        document.body.classList.remove('sidebar-open');
        setTimeout(() => {
            sideMenu.style.transition = '';
        }, 50);
    }
    handleScrollAnimations();
});

// פידבק מגע למובייל
document.addEventListener('touchstart', (e) => {
    const link = e.target.closest('.menu-link');
    if (link) { link.classList.add('is-touched'); }
}, { passive: true });

document.addEventListener('touchend', (e) => {
    const link = e.target.closest('.menu-link');
    if (link) { setTimeout(() => { link.classList.remove('is-touched'); }, 150); }
});

document.addEventListener('touchcancel', (e) => {
    const link = e.target.closest('.menu-link');
    if (link) { link.classList.remove('is-touched'); }
});