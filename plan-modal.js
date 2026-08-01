// ==========================================================================
// 🔮 מודול מודאל תוכנית עסקית (plan-modal.js)
// ==========================================================================

import { getExtraProjectHTML, initExtraProjectEvents } from './extra-project.js';

export function initPlanModal() {
    if (!document.getElementById('plan-modal-overlay')) {

        let extraHTML = '';
        try {
            extraHTML = getExtraProjectHTML();
        } catch (e) {
            console.warn("Extra project HTML failed to load:", e);
        }

        const modalHTML = `
            <div id="plan-modal-overlay" class="plan-modal-overlay">
                <div class="plan-modal-container">
                    
                    <button class="plan-modal-close-btn" id="plan-modal-close" type="button" aria-label="סגור">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                    </button>
                    
                    <div class="plan-modal-glass-layer">

                        <div class="plan-modal-body" id="plan-modal-body">
                            
                            <h3 class="card-plan-title">תוכנית עסקית עם AI</h3>
                            
                            <div class="modal-sand-divider"></div>

                            <div class="card-price-container modal-safe-row">
                                <span class="card-price-label">מחיר רכישה:</span>
                                <span class="card-price-value" id="modal-price-value">--</span>
                            </div>
                            
                            <div class="card-yield-container modal-safe-row">
                                <span class="yield-text-label">תשואה ברוטו:</span>
                                <span class="yield-percentage-value" id="modal-yield-value">--</span>
                                <div class="yield-3d-image">
                                    <img src="c.png" alt="גרף תשואה 3D" draggable="false">
                                </div>
                            </div>
                            
                            <div class="card-rent-container modal-safe-row">
                                <span class="card-rent-label">השכירות כיום:</span>
                                <span class="card-rent-value" id="modal-current-rent-value">--</span>
                            </div>

                            <div class="card-avg-rent-container modal-safe-row">
                                <span class="card-avg-rent-label" id="modal-avg-rent-label">שכירות ממוצעת באזור ל-3 חד':</span>
                                <span class="card-avg-rent-value" id="modal-avg-rent-value">--</span>
                            </div>

                            <div class="card-appreciation-container modal-safe-row">
                                <span class="card-appreciation-label" id="modal-appreciation-label">צפי עליית ערך הנכס בשנה הקרובה:</span>
                                <span class="card-appreciation-value" id="modal-value-increase-value">--</span>
                            </div>

                            <div class="card-future-dev-container modal-safe-row">
                                <span class="card-future-dev-label">מה צפוי לקום באזור:</span>
                                <div class="future-dev-items-row" id="modal-future-dev-badges"></div>
                            </div>

                            <div class="modal-gallery-section">
                                <div class="gallery-cards-container">
                                    <div class="gallery-card card-pos-1">
                                        <img src="png2.png" alt="תמונה 2" draggable="false">
                                    </div>
                                    <div class="gallery-card card-pos-2">
                                        <img src="png3.gif" alt="תמונה 3" draggable="false">
                                    </div>
                                    <div class="gallery-card card-pos-3">
                                        <img src="png5.jpg" alt="תמונה 5" draggable="false">
                                    </div>
                                    <div class="gallery-card card-pos-4">
                                        <img src="png1.jpg" alt="תמונה 1" draggable="false">
                                    </div>
                                    <div class="gallery-card card-pos-5">
                                        <img src="png4.gif" alt="תמונה 4" draggable="false">
                                    </div>
                                </div>

                                <div class="modal-bottom-logo-container modal-safe-row">
                                    <img src="logo-2.png" alt="לוגו" class="modal-bottom-logo" draggable="false">
                                </div>
                                
                                <div class="modal-coming-soon-container modal-safe-row">
                                    <span class="coming-soon-text">COMING SOON</span>
                                </div>
                            </div>

                            <div class="modal-arch-section">
                                <h4 class="modal-arch-title">תוכנית אדריכלית</h4>
                                <div class="modal-arch-video-container">
                                    <video class="modal-arch-video" autoplay loop muted playsinline preload="auto" draggable="false">
                                        <source src="video.mp4" type="video/mp4">
                                    </video>
                                </div>
                            </div>

                            <div id="modal-extra-project-container" style="width: 100%;">
                                ${extraHTML}
                            </div>
                            
                            <div style="height: 100px; width: 100%;"></div>
                        </div>
                    </div>
                </div>
            </div>
        `;
        document.body.insertAdjacentHTML('beforeend', modalHTML);

        initExtraProjectEvents();
    }

    const overlay = document.getElementById('plan-modal-overlay');
    const closeBtn = document.getElementById('plan-modal-close');

    function updateModalData() {
        const pagePriceEl = document.querySelector('.card-price-value');
        const pageYieldEl = document.querySelector('.yield-percentage-value');
        const pageCurrentRentEl = document.querySelector('.card-rent-value');
        const pageAvgRentEl = document.querySelector('.card-avg-rent-value');
        const pageValueIncEl = document.querySelector('.card-appreciation-value');
        const pageDevItemsEl = document.querySelector('.future-dev-items-row'); 
        
        const pageAvgRentLabelEl = document.querySelector('.card-avg-rent-label');
        const pageAppreciationLabelEl = document.querySelector('.card-appreciation-label');

        const modalPriceValEl = document.getElementById('modal-price-value');
        const modalYieldValEl = document.getElementById('modal-yield-value');
        const modalCurrentRentValEl = document.getElementById('modal-current-rent-value');
        const modalAvgRentValEl = document.getElementById('modal-avg-rent-value');
        const modalValueIncValEl = document.getElementById('modal-value-increase-value');
        const modalDevItemsEl = document.getElementById('modal-future-dev-badges');
        
        const modalAvgRentLabelEl = document.getElementById('modal-avg-rent-label');
        const modalAppreciationLabelEl = document.getElementById('modal-appreciation-label');
        
        if (pagePriceEl && modalPriceValEl) modalPriceValEl.innerText = pagePriceEl.innerText;
        if (pageYieldEl && modalYieldValEl) modalYieldValEl.innerText = pageYieldEl.innerText;
        if (pageCurrentRentEl && modalCurrentRentValEl) modalCurrentRentValEl.innerText = pageCurrentRentEl.innerText;
        if (pageAvgRentEl && modalAvgRentValEl) modalAvgRentValEl.innerText = pageAvgRentEl.innerText;
        if (pageValueIncEl && modalValueIncValEl) modalValueIncValEl.innerText = pageValueIncEl.innerText;
        
        if (pageDevItemsEl && modalDevItemsEl) {
            modalDevItemsEl.innerHTML = pageDevItemsEl.innerHTML; 
        } 

        if (pageAvgRentLabelEl && modalAvgRentLabelEl) modalAvgRentLabelEl.innerText = pageAvgRentLabelEl.innerText;
        if (pageAppreciationLabelEl && modalAppreciationLabelEl) modalAppreciationLabelEl.innerText = pageAppreciationLabelEl.innerText;

        // 🎯 הנה החלק החדש שמושך את הכתובת הדינמית מ-item.js לתוך המודאל!
        const pageAddressEl = document.querySelector('.prop-address');
        const extraDynamicAddressEl = document.getElementById('extra-project-dynamic-address');

        if (pageAddressEl && extraDynamicAddressEl) {
            // שואב רק את הטקסט ומנקה רווחים ו-SVG שיש מסביב
            let fullAddress = pageAddressEl.textContent.trim();
            // מפריד רק את שם הרחוב (כדי לשים בטבלה) - לוקח את מה שלפני הפסיק
            let streetOnly = fullAddress.split(',')[0].trim();

            // מעדכן את הכותרת הראשית במודאל (עסקאות בכתובת X)
            extraDynamicAddressEl.innerText = `עסקאות בכתובת ${fullAddress}`;

            // מעדכן אוטומטית את כל התאים בטבלה שקיבלו את הקלאס dynamic-table-address
            document.querySelectorAll('.dynamic-table-address').forEach(el => {
                el.innerText = streetOnly;
            });
        }
    }

    window.openPlanModal = function () {
        const modalOverlay = document.getElementById('plan-modal-overlay');
        if (modalOverlay) {
            updateModalData();
            modalOverlay.classList.add('active');
            document.body.style.overflow = 'hidden';
            document.documentElement.style.overflow = 'hidden';

            const archVideo = modalOverlay.querySelector('.modal-arch-video');
            if (archVideo) {
                archVideo.muted = true;
                archVideo.defaultMuted = true;
                archVideo.currentTime = 0;

                setTimeout(() => {
                    const playPromise = archVideo.play();
                    if (playPromise !== undefined) {
                        playPromise.then(() => {
                            // מנגן בהצלחה
                        }).catch(error => {
                            console.warn("Autoplay error on mobile:", error);
                            archVideo.controls = true;
                        });
                    }
                }, 100);
            }
        }
    };

    window.closePlanModal = function () {
        const modalOverlay = document.getElementById('plan-modal-overlay');
        if (modalOverlay) {
            modalOverlay.classList.remove('active');
            document.body.style.overflow = '';
            document.documentElement.style.overflow = '';

            const archVideo = modalOverlay.querySelector('.modal-arch-video');
            if (archVideo) {
                archVideo.pause();
            }
        }
    };

    if (closeBtn) {
        closeBtn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            window.closePlanModal();
        });
    }

    if (overlay) {
        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) {
                window.closePlanModal();
            }
        });
    }

    document.addEventListener('click', (e) => {
        const trigger = e.target.closest('.sand-arrow-btn') || e.target.closest('.white-shadow-card');
        if (trigger && !e.target.closest('.plan-modal-container') && !e.target.closest('.plan-modal-close-btn')) {
            e.preventDefault();
            e.stopPropagation();
            window.openPlanModal();
        }
    });
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initPlanModal);
} else {
    initPlanModal();
}