// ==========================================================================
// 📞 מודול יצירת קשר רספונסיבי - Item Page
// ==========================================================================

const DEFAULT_PHONE_NUMBER = "052-8095900";
const DEFAULT_WA_NUMBER = "972528095900";

function initContactModule() {
    // 1. קריאת נתוני המספרים
    const phoneNumber = window.currentPropertyPhone || DEFAULT_PHONE_NUMBER;
    const waNumber = window.currentPropertyWA || DEFAULT_WA_NUMBER;

    // 2. הזרקת כפתורי המחשב (Desktop) אל תוך הקונטיינר הריק שיושב ב-item.js
    const desktopContainer = document.getElementById('item-contact-container');
    if (desktopContainer) {
        desktopContainer.innerHTML = `
            <div class="contact-buttons-wrapper">
                
                <!-- 📞 כפתור התקשרו עכשיו -->
                <button type="button" class="desktop-contact-btn btn-desktop-call js-desktop-call">
                    <span class="btn-text">התקשרו עכשיו</span>
                    <svg viewBox="0 0 24 24" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                </button>

                <!-- 💬 כפתור ווטסאפ -->
                <button type="button" class="desktop-contact-btn btn-desktop-wa js-desktop-wa">
                    <span>WhatsApp</span>
                    <svg viewBox="0 0 24 24">
                        <path d="M12.004 2C6.48 2 2 6.48 2 12.004c0 1.91.48 3.71 1.39 5.32L2 22l4.83-1.27c1.55.85 3.32 1.31 5.17 1.31 5.52 0 10.004-4.48 10.004-10.004C22.008 6.48 17.524 2 12.004 2zm5.95 14.39c-.25.7-.99 1.25-1.73 1.46-.51.15-1.17.26-3.41-.73-2.86-1.27-4.66-4.15-4.81-4.34-.14-.2-1.12-1.49-1.12-2.85 0-1.36.71-2.03.96-2.31.25-.28.53-.35.71-.35.18 0 .35.01.5.02.16.01.37-.06.58.45.21.52.74 1.81.81 1.95.07.14.11.31.02.49-.09.18-.21.36-.36.53-.15.18-.32.37-.16.66.16.28.73 1.21 1.57 1.96.84.75 1.54 1.23 1.83 1.37.28.14.45.12.62-.07.17-.2.74-.86.94-1.15.2-.29.41-.24.69-.14.28.1.1.79.52 1.56 1.48.51 2.21.75 2.5.54.29-.21.29-.62.04-.92z"/>
                    </svg>
                </button>

            </div>
        `;
    }

    // 3. חיבור אירועי הלחיצה במקביל: גם לדסקטופ (שהוזרק עכשיו) וגם למובייל (GLASS)
    
    // פונקציונליות כפתורי הטלפון
    const callButtons = document.querySelectorAll('.js-desktop-call, .js-mobile-call');
    callButtons.forEach(btn => {
        // מניעת כפילויות של מאזינים
        const newBtn = btn.cloneNode(true);
        btn.parentNode.replaceChild(newBtn, btn);

        newBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            const btnText = newBtn.querySelector('.btn-text');
            if (btnText && btnText.textContent !== phoneNumber) {
                // לחיצה ראשונה - הצגת המספר
                btnText.textContent = phoneNumber;
            } else {
                // לחיצה שנייה - חיוג
                window.location.href = `tel:${phoneNumber.replace(/-/g, '')}`;
            }
        });
    });

    // פונקציונליות כפתורי הוואטסאפ
    const waButtons = document.querySelectorAll('.js-desktop-wa, .js-mobile-wa');
    waButtons.forEach(btn => {
        // מניעת כפילויות של מאזינים
        const newBtn = btn.cloneNode(true);
        btn.parentNode.replaceChild(newBtn, btn);

        newBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            window.open(`https://wa.me/${waNumber}`, '_blank');
        });
    });
}

// 🌐 חשיפה גלובלית לשימוש ה-item.js
window.initContactModule = initContactModule;
window.initDesktopContactModule = initContactModule; // תאימות לאחור

window.addEventListener('DOMContentLoaded', () => {
    initContactModule();
});