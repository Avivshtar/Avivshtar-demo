const headerTemplate = `
<style>
    /* מוודא מעבר חלק ל-side-menu הקיים שלך */
    .side-menu {
        transition: transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1), 
                    opacity 0.3s ease, 
                    box-shadow 0.4s ease !important;
    }

    /* מוודא מעבר חלק לכל האייקונים הקיימים שלך כשהם יזוזו שמאלה */
    .profile-click-box, .profile-icon-1, .profile-icon-2,
    .love-click-box, .love-icon-1, .love-icon-2,
    .bell-click-box, .bell-icon-1, .bell-icon-2 {
        transition: transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1) !important;
    }

    /* 🔒 חסימה מוחלטת ל-X במצב רגיל שלא יקפוץ בטעות למעלה */
    #menu-close-btn {
        display: none !important;
    }

    /* 🍔 כפתור ההמבורגר - מיושר פיקס על ה-53% והמיקומים שלך */
    .hamburger-btn {
        display: none !important;
        position: absolute !important;
        right: -15px !important; 
        top: 53% !important; 
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
        opacity: 0;
        z-index: 2000 !important;
        transition: all 0.35s cubic-bezier(0.25, 0.8, 0.25, 1) !important;
    }

    /* פסים בצבע אפור בהיר - עובי 1.5px היוקרתי שלך */
    .hamburger-btn span {
        display: block !important;
        height: 1.5px !important; 
        background-color: #8c8c8c !important; 
        border-radius: 2px !important;
        transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1) !important;
    }
    
    .hamburger-btn .line-top { width: 32px !important; }
    .hamburger-btn .line-bottom { width: 18px !important; align-self: flex-start !important; }

    /* האנימציה: החלפת אורכים חלקה (מורפינג) בריחוף */
    .hamburger-btn:hover span {
        background-color: #875b33 !important; 
    }
    .hamburger-btn:hover .line-top {
        width: 18px !important; 
    }
    .hamburger-btn:hover .line-bottom {
        width: 32px !important; 
    }

    /* ------------------------------------------------------- */
    /* 🎬 האנימציות והזזות כשהגענו לחיפוש (window.scrollY > 320) */
    /* ------------------------------------------------------- */

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

    body.scrolled-to-search.sidebar-open .side-menu {
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

    /* 🔥 עיצוב ה-X החדש: עיגול אפור בהיר, זוהר וחום בריחוף באמצעות ה-ID שלו! 🔥 */
    body.scrolled-to-search.sidebar-open #menu-close-btn {
        display: flex !important; 
        position: absolute !important;
        top: 20px !important;
        left: 20px !important;
        width: 38px !important;
        height: 38px !important;
        background-color: #f4f4f5 !important; /* עיגול רקע אפור בהיר ונקי */
        border: none !important;
        border-radius: 50% !important; /* הופך לעיגול מושלם */
        color: #8c8c8c !important; /* צבע אפור בהיר ראשוני לאיקס, תואם לאייקונים */
        cursor: pointer !important;
        align-items: center !important;
        justify-content: center !important;
        padding: 0 !important;
        margin: 0 !important;
        box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05) !important;
        z-index: 100002 !important;
        transition: all 0.25s cubic-bezier(0.25, 0.8, 0.25, 1) !important; /* אנימציית מעבר חלק */
    }

    /* מעבר עכבר (Hover): הכל גדל ביחד, ה-X נהיה חום כמו בהמבורגר ומקבל אפקט זוהר חום יפה */
    body.scrolled-to-search.sidebar-open #menu-close-btn:hover {
        background-color: #ffffff !important; /* העיגול נהיה לבן להבלטה */
        color: #875b33 !important; /* ה-X הופך לחום המקורי של האתר */
        transform: scale(1.12) !important; /* גדל ב-12% באנימציה חלקה */
        box-shadow: 0 0 15px rgba(135, 91, 51, 0.45) !important; /* אפקט זוהר חום מטורף */
    }

    /* לחיצה (Active): אנימציית לחיצה קלה של פידבק (מתכווץ קצת) */
    body.scrolled-to-search.sidebar-open #menu-close-btn:active {
        transform: scale(0.94) !important;
        transition: all 0.1s !important;
    }
        /* הופך את הלוגו של האתר ללחיץ עם סמן אצבע */
.site-logo {
    cursor: pointer !important;
}
</style>

<header class="site-header">
    <div class="header-container">
        
        <button class="hamburger-btn" id="hamburger-btn" aria-label="תפריט">
            <span class="line-top"></span>
            <span class="line-bottom"></span>
        </button>
        
        <div class="header-left-link">
            <a href="#" class="club-link">מועדון המשקיעים חכם</a>
        </div>

        <div class="logo-container">
            <img src="/logo.svg" alt="משקיעים חכם" class="site-logo">
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
            
            <a href="#" class="menu-link">עזרה</a>
            <a href="#" class="menu-link">פרסם</a>
            <a href="#" class="menu-link">בלוג</a>
            <a href="#" class="menu-link">Simplex3d</a>
            <a href="israelInvestments.html" class="menu-link">השקעות בארץ</a>
            <a href="#" class="menu-link">השקעות בחו"ל</a>
            <a href="#" class="menu-link">מועדון המשקיעים חכם</a>
            <a href="#" class="menu-link">פורום</a>
        </nav>

    </div>
</header>
`;

// הזרקת התבנית לתוך ה-HTML
document.getElementById('header-placeholder').innerHTML = headerTemplate;

const hamburgerBtn = document.getElementById('hamburger-btn');
const sideMenu = document.getElementById('side-menu');
const menuCloseBtn = document.getElementById('menu-close-btn');

// 🔘 לחיצה על ההמבורגר (באזור החיפוש) פותחת את התפריט
hamburgerBtn.addEventListener('click', () => {
    document.body.classList.add('sidebar-open');
    sideMenu.classList.add('open');
});

// ❌ לחיצה על ה-X (באזור החיפוש) סוגרת את התפריט
if (menuCloseBtn) {
    menuCloseBtn.addEventListener('click', () => {
        document.body.classList.remove('sidebar-open');
        sideMenu.classList.remove('open');
    });
}
// הקשבה ללחיצה על הלוגו והחזרה לדף הבית
const siteLogo = document.querySelector('.site-logo');
if (siteLogo) {
    siteLogo.addEventListener('click', () => {
        window.location.href = 'index.html';
    });
}
// =======================================================
// 📜 מנוע זיהוי גלילה מבוסס מרחק מוחלט (320 פיקסלים)
// =======================================================
window.addEventListener('scroll', () => {
    if (window.scrollY > 320) {
        document.body.classList.add('scrolled-to-search');
    } else {
        document.body.classList.remove('scrolled-to-search');
        document.body.classList.remove('sidebar-open');
        if (sideMenu) sideMenu.classList.remove('open');
    }
});