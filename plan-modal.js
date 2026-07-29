// ==========================================================================
// 🔮 מודול מודאל תוכנית עסקית (plan-modal.js)
// ==========================================================================

export function initPlanModal() {
    if (!document.getElementById('plan-modal-overlay')) {
        const modalHTML = `
            <div id="plan-modal-overlay" class="plan-modal-overlay">
                <div class="plan-modal-container">
                    
                    <!-- ✖️ כפתור סגירה GLASS -->
                    <button class="plan-modal-close-btn" id="plan-modal-close" type="button" aria-label="סגור">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                    </button>
                    
                    <div class="plan-modal-glass-layer">
                        
                        <!-- 🌟 תמונת s.png מרחפת מחוץ לשורות! -->
                        <div class="s-3d-image">
                            <img src="s.png" alt="אייקון 3D" draggable="false">
                        </div>

                        <div class="plan-modal-body" id="plan-modal-body">
                            
                            <h3 class="card-plan-title">תוכנית עסקית עם AI</h3>
                            
                            <!-- 〰️ הפס החולי המפריד -->
                            <div class="modal-sand-divider"></div>

                            <!-- 💰 1. מחיר רכישה -->
                            <div class="card-price-container modal-safe-row">
                                <span class="card-price-label">מחיר רכישה:</span>
                                <span class="card-price-value" id="modal-price-value">--</span>
                            </div>
                            
                            <!-- 🥧 2. תשואה ברוטו + תמונה מרחפת -->
                            <div class="card-yield-container modal-safe-row">
                                <span class="yield-text-label">תשואה ברוטו:</span>
                                <span class="yield-percentage-value" id="modal-yield-value">--</span>
                                <div class="yield-3d-image">
                                    <img src="c.png" alt="גרף תשואה 3D" draggable="false">
                                </div>
                            </div>
                            
                            <!-- 🏠 3. השכירות כיום -->
                            <div class="card-rent-container modal-safe-row">
                                <span class="card-rent-label">השכירות כיום:</span>
                                <span class="card-rent-value" id="modal-current-rent-value">--</span>
                            </div>

                            <!-- 📍 4. שכירות ממוצעת באזור -->
                            <div class="card-avg-rent-container modal-safe-row">
                                <span class="card-avg-rent-label" id="modal-avg-rent-label">שכירות ממוצעת באזור ל-3 חד':</span>
                                <span class="card-avg-rent-value" id="modal-avg-rent-value">--</span>
                            </div>

                            <!-- 🚀 5. צפי עליית ערך -->
                            <div class="card-appreciation-container modal-safe-row">
                                <span class="card-appreciation-label" id="modal-appreciation-label">צפי עליית ערך הנכס בשנה הקרובה:</span>
                                <span class="card-appreciation-value" id="modal-value-increase-value">--</span>
                            </div>

                            <!-- 🏙️ 6. מה צפוי לקום באזור -->
                            <div class="card-future-dev-container modal-safe-row">
                                <span class="card-future-dev-label">מה צפוי לקום באזור:</span>
                                <div class="future-dev-items-row" id="modal-future-dev-badges">
                                    <!-- התגיות יוזרקו לכאן -->
                                </div>
                            </div>
                            
                            <div style="height: 100px; width: 100%;"></div>
                        </div>
                    </div>
                </div>
            </div>
        `;
        document.body.insertAdjacentHTML('beforeend', modalHTML);
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
    }

    window.openPlanModal = function () {
        if (overlay) {
            updateModalData();
            overlay.classList.add('active');
            document.body.style.overflow = 'hidden';
            document.documentElement.style.overflow = 'hidden';
        }
    };

    window.closePlanModal = function () {
        if (overlay) {
            overlay.classList.remove('active');
            document.body.style.overflow = '';
            document.documentElement.style.overflow = '';
        }
    };

    if (closeBtn) {
        closeBtn.addEventListener('click', (e) => {
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