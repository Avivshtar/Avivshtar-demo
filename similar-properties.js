// ==========================================================================
// 🏠 מודול ניהול דירות דומות - נעילת מחוות מותאמת למובייל
// ==========================================================================

const SIMILAR_PROPERTIES_FALLBACK = [
    { 
        images: [
            "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80"
        ],
        type: "דירה", rooms: "3 חד'", size: "95 מ\"ר", price: "2,900,000", city: "רוטשילד 10, רמת גן"
    },
    { 
        images: [
            "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80"
        ],
        type: "פנטהאוז", rooms: "5 חד'", size: "140 מ\"ר", price: "5,850,000", city: "כצנלסון 45, גבעתיים"
    },
    { 
        images: [
            "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80"
        ],
        type: "דירה", rooms: "4 חד'", size: "100 מ\"ר", price: "4,100,000", city: "הירקון 120, תל אביב"
    },
    { 
        images: [
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80"
        ],
        type: "דירת גן", rooms: "4.5 חד'", size: "115 מ\"ר", price: "3,450,000", city: "אחוזה 80, רעננה"
    },
    { 
        images: [
            "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80"
        ],
        type: "דופלקס", rooms: "6 חד'", size: "160 מ\"ר", price: "4,900,000", city: "האורנים 12, הרצליה"
    }
];

window.addEventListener('DOMContentLoaded', () => {
    initSimilarProperties();
});

function initSimilarProperties() {
    const container = document.getElementById('similar-properties-container');
    if (!container) return;

    const urlParams = new URLSearchParams(window.location.search);
    const currentId = parseInt(urlParams.get('id'), 10) || 0;
    const currentType = urlParams.get('type') || 'property';

    let dataSource = (window.propertiesData && window.propertiesData.length > 0) 
        ? window.propertiesData 
        : SIMILAR_PROPERTIES_FALLBACK;

    const similarItems = dataSource
        .map((item, index) => ({ ...item, originalIndex: index }))
        .filter(item => item.originalIndex !== currentId)
        .slice(0, 5);

    const cardsHTML = similarItems.map(item => createBareFadeTemplate(item, currentType)).join('');

    container.innerHTML = `
        <div class="similar-section-wrapper">
            <h3 class="prop-description-title similar-section-title">דירות דומות באזור</h3>
            <div class="similar-cards-list">
                ${cardsHTML}
            </div>
        </div>
    `;

    container.querySelectorAll('.similar-card-template').forEach(card => {
        setupCardEvents(card);
    });

    setupDynamicScrollFade(container);
}

function createBareFadeTemplate(item, type) {
    let imagesList = item.images || [item.img1 || item.img || ''];
    if (imagesList.length === 0) imagesList = [item.img1 || item.img || ''];

    const propType = item.type || 'דירה';
    const rooms = item.rooms || "3 חד'";
    const size = item.size || '90 מ"ר';
    const location = item.city || item.location || item.address || 'רוטשילד 10, רמת גן';

    let price = item.price 
        ? (typeof item.price === 'number' ? item.price.toLocaleString() : item.price) 
        : '2,900,000';

    return `
        <div class="similar-card-template" 
             data-index="${item.originalIndex}" 
             data-type="${type}"
             data-images='${JSON.stringify(imagesList)}'
             data-current-img="0">
            
            <div class="template-image-box">
                <img src="${imagesList[0]}" alt="תמונת נכס" draggable="false" class="active-card-img">
            </div>

            <!-- ↔️ כפתורי גלריה (מחשב) -->
            ${imagesList.length > 1 ? `
                <button class="carousel-btn prev-btn" type="button" aria-label="תמונה קודמת">
                    <svg viewBox="0 0 24 24"><path d="M9 18l6-6-6-6"></path></svg>
                </button>
                <button class="carousel-btn next-btn" type="button" aria-label="תמונה הבאה">
                    <svg viewBox="0 0 24 24"><path d="M15 18l-6-6 6-6"></path></svg>
                </button>
            ` : ''}

            <!-- ✨ כפתור לב -->
            <button class="glass-btn glass-heart-btn" type="button" aria-label="שמור נכס">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54z"></path>
                </svg>
            </button>

            <!-- 💬 כפתור ווטסאפ -->
            <button class="glass-btn glass-whatsapp-btn" type="button" aria-label="שלח הודעה בווטסאפ">
                <svg viewBox="0 0 24 24">
                    <path d="M12.012 2c-5.508 0-9.988 4.48-9.988 9.988 0 1.83.493 3.55 1.353 5.03l-1.377 5.03 5.163-1.352c1.428.78 3.06 1.23 4.849 1.23 5.508 0 9.988-4.48 9.988-9.988 0-5.508-4.48-9.988-9.988-9.988zm0 18.272c-1.57 0-3.03-.43-4.29-1.18l-.31-.18-3.08.81.82-3-.2-.32c-.83-1.31-1.28-2.83-1.28-4.42 0-4.57 3.71-8.28 8.28-8.28s8.28 3.71 8.28 8.28-3.71 8.29-8.22 8.29zm4.53-6.2c-.25-.12-1.47-.72-1.7-.81-.23-.08-.39-.12-.56.12-.17.25-.65.81-.8 1-.15.18-.3.2-.55.08-.25-.12-1.05-.39-2-1.23-.74-.66-1.24-1.48-1.39-1.73-.15-.25-.02-.38.1-.5.11-.11.25-.29.37-.43.12-.15.17-.25.25-.42.08-.17.04-.31-.02-.43s-.56-1.35-.77-1.85c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.12.17 1.77 2.71 4.29 3.8.6.26 1.07.41 1.44.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.06-.11-.22-.17-.47-.3z"/>
                </svg>
            </button>

            <!-- 📞 כפתור טלפון -->
            <button class="glass-btn glass-phone-btn" type="button" aria-label="חייג אלינו">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
            </button>

            <!-- 💰 1. מחיר -->
            <div class="card-price-row">${price}</div>

            <!-- 📍 2. מיקום -->
            <div class="card-location-row">
                <svg class="location-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <span class="location-text">${location}</span>
            </div>

            <!-- 🏷️ 3. תגיות מפרט -->
            <div class="card-specs-row">
                <span class="mini-spec-badge">${propType}</span>
                <span class="mini-spec-badge">${rooms}</span>
                <span class="mini-spec-badge">${size}</span>
            </div>

        </div>
    `;
}

// 🎯 מנגנון FADE דינמי במובייל
function setupDynamicScrollFade(container) {
    const wrapper = container.querySelector('.similar-section-wrapper');
    const cardsList = container.querySelector('.similar-cards-list');
    const cards = container.querySelectorAll('.similar-card-template');

    if (!wrapper || !cardsList || cards.length === 0) return;

    const firstCard = cards[0];
    const lastCard = cards[cards.length - 1];

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.target === firstCard) {
                wrapper.classList.toggle('hide-fade-right', entry.isIntersecting);
            }
            if (entry.target === lastCard) {
                wrapper.classList.toggle('hide-fade-left', entry.isIntersecting);
            }
        });
    }, {
        root: cardsList,
        threshold: 0.6
    });

    observer.observe(firstCard);
    observer.observe(lastCard);
}

function setupCardEvents(card) {
    const images = JSON.parse(card.getAttribute('data-images') || '[]');
    const imgEl = card.querySelector('.active-card-img');
    const imageBox = card.querySelector('.template-image-box');
    const prevBtn = card.querySelector('.prev-btn');
    const nextBtn = card.querySelector('.next-btn');
    
    const heartBtn = card.querySelector('.glass-heart-btn');
    const waBtn = card.querySelector('.glass-whatsapp-btn');
    const phoneBtn = card.querySelector('.glass-phone-btn');

    // 1. מעבר דף בלחיצה על הכרטיסייה
    card.addEventListener('click', () => {
        const index = card.getAttribute('data-index');
        const type = card.getAttribute('data-type');
        window.location.href = `item.html?type=${type}&id=${index}`;
    });

    // 2. כפתור לב
    if (heartBtn) {
        heartBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            heartBtn.classList.toggle('active');
        });
    }

    // 3. כפתור ווטסאפ
    if (waBtn) {
        waBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            window.open('https://wa.me/972500000000', '_blank'); 
        });
    }

    // 4. כפתור טלפון
    if (phoneBtn) {
        phoneBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            window.location.href = 'tel:0500000000'; 
        });
    }

    // 🔄 פונקציית החלפת תמונות
    function changeImage(direction) {
        if (images.length <= 1) return;
        let currentIndex = parseInt(card.getAttribute('data-current-img') || '0', 10);
        
        if (direction === 'next') {
            currentIndex = (currentIndex + 1) % images.length;
        } else {
            currentIndex = (currentIndex - 1 + images.length) % images.length;
        }

        card.setAttribute('data-current-img', currentIndex);
        
        imgEl.style.opacity = '0.3';
        setTimeout(() => {
            imgEl.src = images[currentIndex];
            imgEl.style.opacity = '1';
        }, 100);
    }

    // ↔️ כפתורי חיצים (מחשב)
    if (prevBtn) {
        prevBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            changeImage('prev');
        });
    }
    if (nextBtn) {
        nextBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            changeImage('next');
        });
    }

    // 🔒 מנגנון נעילת החלקה אופקית (מובייל) - פעיל רק כשיש יותר מתמונה אחת!
    if (images.length > 1 && imageBox) {
        // מאפשר גלילה רגילה אם יש רק תמונה אחת
        imageBox.style.touchAction = 'pan-y';

        let touchStartX = 0;
        let touchStartY = 0;

        imageBox.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].clientX;
            touchStartY = e.changedTouches[0].clientY;
        }, { passive: true });

        imageBox.addEventListener('touchmove', (e) => {
            const currentX = e.changedTouches[0].clientX;
            const currentY = e.changedTouches[0].clientY;
            const deltaX = currentX - touchStartX;
            const deltaY = currentY - touchStartY;

            // אם הזזת האצבע היא בעיקרה אופקית על התמונה - מונעים תזוזה של רשימת הכרטיסיות
            if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 10) {
                e.stopPropagation();
            }
        }, { passive: true });

        imageBox.addEventListener('touchend', (e) => {
            const touchEndX = e.changedTouches[0].clientX;
            const touchEndY = e.changedTouches[0].clientY;
            
            const deltaX = touchEndX - touchStartX;
            const deltaY = touchEndY - touchStartY;

            // החלפה חלקה של התמונות באצבע
            if (Math.abs(deltaX) > 35 && Math.abs(deltaX) > Math.abs(deltaY)) {
                e.stopPropagation();
                if (deltaX < 0) {
                    changeImage('next');
                } else {
                    changeImage('prev');
                }
            }
        }, { passive: true });
    } else if (imageBox) {
        // אם יש תמונה אחת בלבד - שומרים על גלילה חופשית של הכרטיסייה
        imageBox.style.touchAction = 'auto';
    }
}