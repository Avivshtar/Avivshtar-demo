// ==========================================================================
// 🧠 מנגנון RTL + אפס טעינה + פרטי נכס ותיאור + מפה חיה סנכרונית (item.js)
// ==========================================================================
window.addEventListener('DOMContentLoaded', () => {

    // 🏠 לחיצה על הלוגו - מעבר נקי לדף הבית
    document.addEventListener('click', (e) => {
        if (e.target.closest('.logo-container') || e.target.closest('.mobile-logo')) {
            window.location.href = 'index.html';
        }
    });

    // 🛡️ חסימת גרירה ומקש ימני
    document.addEventListener('contextmenu', (e) => {
        if (e.target.tagName === 'IMG' || e.target.closest('.main-gallery-container') || e.target.closest('.thumbnails-grid')) {
            e.preventDefault();
        }
    });

    document.addEventListener('dragstart', (e) => {
        if (e.target.tagName === 'IMG') {
            e.preventDefault();
        }
    });

    // ==========================================================================
    // 🚨 מאגר נתונים פנימי לגיבוי עם קואורדינטות מדויקות
    // ==========================================================================
    const LOCAL_PROPERTIES = [
        { 
            price: "2,900,000", address: "רוטשילד 10, רמת גן", type: "דירה", rooms: "3 חד'", size: '95 מ"ר', 
            floor: "קומה 4/12", lat: 32.0812, lng: 34.8145,
            description: "נכס אסטרטגי להשקעה במיקום מרכזי ומבוקש. תשואה יציבה, ביקוש קבוע וקשיח לשכירות ופוטנציאל עליית ערך משמעותי באזור מתפתח.",
            features: ['מיזוג אוויר', 'מעלית', 'חניה', 'ממ"ד', 'מרפסת', 'משופצת', 'מחסן'],
            img1: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80", 
            img2: "https://images.unsplash.com/photo-1745794621090-d856c53b0cc2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
            img3: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=800&q=80" 
        },
        { 
            price: "3,200,000", address: "כצנלסון 45, גבעתיים", type: "פנטהאוז", rooms: "5 חד'", size: '140 מ"ר', 
            floor: "קומה 8/8", lat: 32.0731, lng: 34.8120,
            description: "נכס פרימיום יוקרתי המהווה נכס עוגן לתיק השקעות. מפרט טכני עשיר, מיקום נחשק בעל ביקוש שיא ופוטנציאל השבחה ורווח הון גבוה בטווח הארוך.",
            features: ['מיזוג אוויר', 'מעלית', 'חניה', 'ממ"ד', 'מרפסת', 'משופצת', 'מחסן'],
            img1: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80", 
            img2: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80", 
            img3: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=800&q=80" 
        },
        { 
            price: "1,850,000", address: "שדרות רגר 12, באר שבע", type: "דירה", rooms: "4 חד'", size: '100 מ"ר', 
            floor: "קומה 2/4", lat: 31.2518, lng: 34.7913,
            description: "הזדמנות השקעה מצוינת בקרבת האוניברסיטה והמרכז הרפואי. תשואת שכירות גבוהה, ביקוש קבוע משוכרים איכותיים וניהול נכס פשוט ונוח.",
            features: ['מיזוג אוויר', 'מרפסת', 'סורגים', 'משופצת', 'ריהוט מלא'],
            img1: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80", 
            img2: "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&w=800&q=80", 
            img3: "https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=800&q=80" 
        },
        { 
            price: "1,100,000", address: "האר\"י 8, צפת", type: "דירה", rooms: "3 חד'", size: '75 מ"ר', 
            floor: "קומה 1/3", project: "תמ\"א 38", lat: 32.9646, lng: 35.4960,
            description: "נכס להשקעה בלב צפת העתיקה הנמצא בתהליך מתקדם של התחדשות עירונית (תמ\"א 38). מציע מחיר כניסה נמוך, פוטנציאל השבחה משמעותי ורווח הון עתידי גבוה.",
            features: ['מיזוג אוויר', 'סורגים', 'מחסן', 'משופצת', 'דוד שמש', 'מרפסת'],
            img1: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80", 
            img2: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80", 
            img3: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80" 
        },
        { 
            price: "2,400,000", address: "אהוד מנור 2, נתניה", type: "דירת גן", rooms: "5 חד'", size: '130 מ"ר', 
            floor: "קומת קרקע", lat: 32.2814, lng: 34.8432,
            description: "נכס נדל\"ני ייחודי להשקעה בשכונה מבוקשת. ביקוש גבוה לשכירות פרימיום, שמירת ערך חזקה ופוטנציאל תשואה יציב לאורך זמן.",
            features: ['מיזוג אוויר', 'חניה פרטית', 'ממ"ד', 'מחסן', 'משופצת', 'גישה לנכים'],
            img1: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80", 
            img2: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=800&q=80", 
            img3: "https://images.unsplash.com/photo-1600210492493-0946911123ea?auto=format&fit=crop&w=800&q=80" 
        },
        { 
            price: "800,000", address: "הנשיא 24, חיפה", type: "דירה", rooms: "4 חד'", size: '110 מ"ר', 
            floor: "קומה 3/6", lat: 32.8094, lng: 34.9863,
            description: "הזדמנות להשקעה יציבה במחיר אטרקטיבי למ\"ר על ציר מרכזי בחיפה. ביקוש קבוע לשכירות, תזרים מזומנים שוטף ופוטנציאל השבחה גבוה.",
            features: ['מיזוג אוויר', 'מעלית', 'מרפסת', 'סורגים', 'משופצת'],
            img1: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=800&q=80", 
            img2: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=800&q=80", 
            img3: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=800&q=80" 
        },
        { 
            price: "1,800,000", address: "יפו 90, ירושלים", type: "דירה", rooms: "4 חד'", size: '95 מ"ר', 
            floor: "קומה 5/21", project: "פינוי בינוי", lat: 31.7850, lng: 35.2130,
            description: "השקעה אסטרטגית בלב ירושלים. מיקום נחשק בצמוד לרכבת הקלה, נכס בפרויקט פינוי בינוי המבטיח עליית ערך משמעותית ותשואת שכירות גבוהה.",
            features: ['מיזוג אוויר', 'מעלית', 'חניה', 'ממ"ד', 'מרפסת', 'מחסן', 'משופצת'],
            img1: "https://images.unsplash.com/photo-1615529182904-14819c35db37?auto=format&fit=crop&w=800&q=80", 
            img2: "https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?auto=format&fit=crop&w=800&q=80", 
            img3: "https://images.unsplash.com/photo-1616137422495-1e9e46e2aa77?auto=format&fit=crop&w=800&q=80" 
        },
        { 
            price: "2,150,000", address: "ז'בוטינסקי 5, אשדוד", type: "דירה", rooms: "3.5 חד'", size: '105 מ"ר', 
            floor: "קומה 6/9", lat: 31.8015, lng: 34.6433,
            description: "נכס מוכן להשקעה (Plug & Play) - משופץ מהיסוד ברמה גבוהה וללא צורך בהשקעה נוספת. מוכן להשכרה מיידית בתשואה גבוהה במיקום מבוקש.",
            features: ['מיזוג אוויר', 'מעלית', 'חניה', 'מרפסת', 'משופצת', 'ריהוט'],
            img1: "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?auto=format&fit=crop&w=800&q=80", 
            img2: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=80", 
            img3: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80" 
        },
        { 
            price: "2,800,000", address: "אחוזה 120, רעננה", type: "דירת גן", rooms: "5 חד'", size: '145 מ"ר', 
            floor: "קומת קרקע", lat: 32.1848, lng: 34.8712,
            description: "נכס פרימיום להשקעה ברעננה. שומר על ערכו לאורך זמן, פונה לקהל שוכרים איכותי ומציע ביטחון פיננסי, יציבות נדל\"נית ותשואה קבועה.",
            features: ['מיזוג אוויר', 'חניה', 'ממ"ד', 'מחסן', 'משופצת', 'גישה לנכים'],
            img1: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80", 
            img2: "https://plus.unsplash.com/premium_photo-1670360414483-64e6d9ba9038?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
            img3: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=80" 
        },
        { 
            price: "1,800,000", address: "רוטשילד 45, ראשון לציון", type: "דירה", rooms: "4 חד'", size: '108 מ"ר', 
            floor: "קומה 1/14", project: "תמ\"א 38", lat: 31.9642, lng: 34.8044,
            description: "הזדמנות השקעה בראשון לציון במתחם בתהליך תמ\"א 38. עליית ערך צפויה עם התקדמות הפרויקט, לצד תשואת שכר דירה עקבית ויציבה.",
            features: ['מיזוג אוויר', 'מעלית', 'מרפסת', 'מחסן', 'משופצת'],
            img1: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=800&q=80", 
            img2: "https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=800&q=80", 
            img3: "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?q=80&w=687&auto=format&fit=crop" 
        }
    ];

    const LOCAL_PROJECTS = [
        { 
            price: "החל מ-2,490,000", address: "יפה נוף 32, אשקלון", type: "פרויקט", rooms: "2-6 חד'", lat: 31.6688, lng: 34.5743,
            description: "פרויקט נדל\"ן יוקרתי להשקעה על קו הים. הזדמנות לרכישה בשלבי פרי-סייל עם פוטנציאל רווח הון גבוה, מפרט טכני עשיר ותשואת שכירות עתידית מעולה.",
            features: ['מיזוג אוויר', 'מעלית', 'חניה', 'ממ"ד', 'מרפסת', 'מחסן'],
            img1: "https://treedis-cdn.yad2.co.il/projects/1000177/assets/mainImage/fd36a7a8-9cd7-4720-95a8-402b2984b081.webp", 
            img2: "https://treedis-cdn.yad2.co.il/projects/1000177/assets/gallery/1f79564c-151f-45de-bb5f-3984b86ed0f0.webp", 
            img3: "https://treedis-cdn.yad2.co.il/projects/1000177/assets/gallery/70d98359-d48f-4cb3-92ef-adb9252acec4.webp" 
        }
    ];

    const DEV_OPTIONS = [
        'רכבת', 'קופת חולים', 'פארקים', 'בתי ספר', 'גני ילדים', 
        'מכללה', 'קניון', 'מרכז מסחרי', 'קאנטרי', 'בית כנסת', 
        'תשתיות', 'התחדשות עירונית', 'מתחם בילוי'
    ];

    // ==========================================================================
    // 🔍 1. זיהוי הדירה מהכתובת
    // ==========================================================================
    const urlParams = new URLSearchParams(window.location.search);
    let type = urlParams.get('type') || 'property';
    const idParam = urlParams.get('id'); 

    const targetList = (type === 'project') ?
        ((window.projectsData && window.projectsData.length > 0) ? window.projectsData : LOCAL_PROJECTS) :
        ((window.propertiesData && window.propertiesData.length > 0) ? window.propertiesData : LOCAL_PROPERTIES);
        
    let selectedItem = null;

    if (idParam !== null && targetList.length > 0) {
        const index = parseInt(idParam, 10);
        if (!isNaN(index) && index >= 0 && index < targetList.length) {
            selectedItem = targetList[index];
        }
    }
    if (!selectedItem && targetList.length > 0) {
        selectedItem = targetList[0];
    }

    // ==========================================================================
    // 📸 2. חילוץ התמונות ושיכפול
    // ==========================================================================
    let images = [];
    
    if (selectedItem) {
        let propertyImages = [
            selectedItem.img1, selectedItem.img2, selectedItem.img3, selectedItem.img4, selectedItem.img5
        ].filter(Boolean);

        if (propertyImages.length > 0) {
            images = [...propertyImages];
            let i = 0;
            
            while (images.length < 10) {
                let nextImg = propertyImages[i % propertyImages.length];
                if (images.length === 9 && nextImg === images[0]) {
                    nextImg = propertyImages[(i + 1) % propertyImages.length];
                }
                images.push(nextImg);
                i++;
            }
        }
    }

    // ==========================================================================
    // 🎨 3. בניית הגלריה
    // ==========================================================================
    const slider = document.getElementById('gallery-slider');
    const dotsContainer = document.getElementById('gallery-dots');
    const thumbsGrid = document.getElementById('thumbnails-grid');

    let createdSlides = []; 

    if (slider && images.length > 0) {
        slider.innerHTML = '';
        if (dotsContainer) dotsContainer.innerHTML = '';
        if (thumbsGrid) thumbsGrid.innerHTML = '';

        images.forEach((url, idx) => {
            const img = document.createElement('img');
            img.src = url; 
            img.className = `gallery-slide-img ${idx === 0 ? 'active' : ''}`;
            img.draggable = false;
            
            slider.appendChild(img);
            createdSlides.push(img);

            if (dotsContainer && images.length > 1) {
                const dot = document.createElement('div');
                dot.className = `gallery-dot ${idx === 0 ? 'active' : ''}`;
                dot.onclick = () => goToSlide(idx);
                dotsContainer.appendChild(dot);
            }
        });

        if (thumbsGrid) {
            const thumbImages = images.slice(0, 4);
            const remainingCount = images.length - 3; 

            thumbImages.forEach((url, idx) => {
                const thumbCard = document.createElement('div');
                const isLastBox = (idx === 3);
                
                thumbCard.className = `thumb-card ${isLastBox ? 'more-blur-card' : ''}`;
                
                const img = document.createElement('img');
                img.src = url;
                img.draggable = false;
                thumbCard.appendChild(img);

                if (isLastBox) {
                    const blurOverlay = document.createElement('div');
                    blurOverlay.className = 'thumb-blur-overlay';
                    const moreText = document.createElement('span');
                    moreText.className = 'thumb-more-text';
                    moreText.textContent = `${remainingCount}+`;
                    blurOverlay.appendChild(moreText);
                    thumbCard.appendChild(blurOverlay);
                }

                thumbCard.onclick = () => goToSlide(idx);
                thumbsGrid.appendChild(thumbCard);
            });
        }

        let currentIndex = 0;
        let isAnimating = false;

        const updateDots = (index) => {
            if (!dotsContainer) return;
            const dots = dotsContainer.querySelectorAll('.gallery-dot');
            dots.forEach((d, i) => d.classList.toggle('active', i === index));
        };

        const goToSlide = (targetIndex, direction = null) => {
            if (targetIndex === currentIndex || isAnimating || !createdSlides[targetIndex]) return;
            isAnimating = true;

            if (!direction) {
                if (currentIndex === images.length - 1 && targetIndex === 0) direction = 'next';
                else if (currentIndex === 0 && targetIndex === images.length - 1) direction = 'prev';
                else direction = targetIndex > currentIndex ? 'next' : 'prev';
            }

            const currentSlide = createdSlides[currentIndex];
            const targetSlide = createdSlides[targetIndex];

            const startX = (direction === 'next') ? '-100%' : '100%';
            const exitX = (direction === 'next') ? '100%' : '-100%';

            targetSlide.style.transition = 'none';
            targetSlide.style.transform = `translateX(${startX})`;
            targetSlide.style.opacity = '1';
            targetSlide.offsetHeight; 

            targetSlide.style.transition = 'transform 0.18s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.18s cubic-bezier(0.16, 1, 0.3, 1)';
            currentSlide.style.transition = 'transform 0.18s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.18s cubic-bezier(0.16, 1, 0.3, 1)';

            currentSlide.style.transform = `translateX(${exitX})`;
            currentSlide.style.opacity = '0';

            targetSlide.style.transform = 'translateX(0)';
            targetSlide.classList.add('active');

            currentIndex = targetIndex;
            updateDots(currentIndex);

            setTimeout(() => {
                currentSlide.classList.remove('active');
                isAnimating = false;
            }, 180);
        };

        const prevBtn = document.getElementById('gallery-prev-btn');
        const nextBtn = document.getElementById('gallery-next-btn');
        if (prevBtn) prevBtn.onclick = () => goToSlide((currentIndex - 1 + images.length) % images.length, 'prev');
        if (nextBtn) nextBtn.onclick = () => goToSlide((currentIndex + 1) % images.length, 'next');

        let startX = 0;
        let startY = 0;
        let isHorizontalSwipe = false;

        slider.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
            startY = e.touches[0].clientY;
            isHorizontalSwipe = false;
        }, { passive: true });

        slider.addEventListener('touchmove', (e) => {
            const diffX = Math.abs(startX - e.touches[0].clientX);
            const diffY = Math.abs(startY - e.touches[0].clientY);
            
            if (diffX > diffY && diffX > 8) {
                isHorizontalSwipe = true;
                if (e.cancelable) e.preventDefault();
            }
        }, { passive: false }); 

        slider.addEventListener('touchend', (e) => {
            const diffX = startX - e.changedTouches[0].clientX;
            if (isHorizontalSwipe && Math.abs(diffX) > 25) {
                if (diffX > 0) goToSlide((currentIndex + 1) % images.length, 'next');
                else goToSlide((currentIndex - 1 + images.length) % images.length, 'prev');
            }
        }, { passive: true });
    }

    // ==========================================================================
    // 📝 6. הזרקת פרטי הדירה + תיאור + תוכנית עסקית + מפה חיה
    // ==========================================================================
    const infoContainer = document.getElementById('main-white-page-content');
    
    if (infoContainer && selectedItem) {
        
        let priceText = selectedItem.price || "";
        if (!priceText.includes('₪') && priceText.trim() !== '') {
            priceText += ' ₪';
        }

        let roomsText = selectedItem.rooms || "";
        roomsText = roomsText.replace("חד'", "חדרים");

        const hasType = selectedItem.type ? `<span class="spec-badge">${selectedItem.type}</span>` : '';
        const hasRooms = roomsText ? `<span class="spec-badge">${roomsText}</span>` : '';
        const hasSize = selectedItem.size ? `<span class="spec-badge">${selectedItem.size}</span>` : '';
        const hasFloor = selectedItem.floor ? `<span class="spec-badge">${selectedItem.floor}</span>` : '';
        const hasProject = selectedItem.project ? `<span class="spec-badge">${selectedItem.project}</span>` : '';

        const descriptionText = selectedItem.description || 
            `נכס אסטרטגי להשקעה במיקום מרכזי ומבוקש. תשואה יציבה, ביקוש קבוע וקשיח לשכירות ופוטנציאל עליית ערך משמעותי באזור מתפתח.`;

        const yieldNum = (Math.random() * (3.3 - 2.5) + 2.5);
        const yieldPercentage = yieldNum.toFixed(1);

        let numericPrice = 2900000;
        if (selectedItem.price) {
            const clean = selectedItem.price.replace(/[^0-9]/g, '');
            if (clean) numericPrice = parseInt(clean, 10);
        }

        let calculatedRent = Math.round(((numericPrice * yieldNum) / 100 / 12) / 100) * 100;
        if (isNaN(calculatedRent) || calculatedRent < 2000) calculatedRent = 6500;
        
        const formattedRent = calculatedRent.toLocaleString('en-US') + ' ₪';

        let rawRooms = selectedItem.rooms || "3 חד'";
        let cleanRoomsText = rawRooms.replace("חדרים", "חד'").trim();

        const offsets = [-300, -200, 200, 300];
        const randomOffset = offsets[Math.floor(Math.random() * offsets.length)];
        const avgAreaRentAmount = Math.max(2000, calculatedRent + randomOffset);
        const formattedAvgAreaRent = avgAreaRentAmount.toLocaleString('en-US') + ' ₪';

        const appreciationNum = (Math.random() * (4.6 - 2.8) + 2.8).toFixed(1);
        const formattedAppreciation = appreciationNum + '%';

        const shuffledDevs = [...DEV_OPTIONS].sort(() => 0.5 - Math.random()).slice(0, 3);
        const devItemsHTML = shuffledDevs.map(label => `
            <span class="spec-badge">${label}</span>
        `).join('');

        const featureList = selectedItem.features && selectedItem.features.length >= 5 
            ? selectedItem.features.slice(0, 7) 
            : ['מיזוג אוויר', 'מעלית', 'חניה', 'ממ"ד', 'מרפסת', 'משופצת'];

        const featuresBadgesHTML = featureList.map(label => `
            <span class="spec-badge">${label}</span>
        `).join('');

        const mapAddress = selectedItem.address || "ישראל";
        const mainPropertyImage = selectedItem.img1 || (images.length > 0 ? images[0] : '');
        const lat = selectedItem.lat || 32.0812;
        const lng = selectedItem.lng || 34.8145;

        // 🏗️ הזרקת ה-HTML המלא (הכפתורים מוקמו מתחת לתיאור)
        infoContainer.innerHTML = `
            <div class="item-page-info-wrapper">
                
                <!-- 📍 1. הכתובת בראש הדף -->
                <div class="prop-address">
                    <svg class="location-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.0" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                        <circle cx="12" cy="10" r="2.5"></circle>
                    </svg>
                    ${mapAddress}
                </div>
                
                <!-- 🏷️ 2. מפרט תגיות -->
                <div class="prop-specs">
                    ${hasType}
                    ${hasRooms}
                    ${hasSize}
                    ${hasFloor}
                    ${hasProject}
                </div>

                <!-- 🏗️ 3. מעטפת חלוקה ראשית -->
                <div class="details-split-container">
                    
                    <!-- 📜 תיאור הנכס + כפתורי התקשרות מתחתיו -->
                    <div class="prop-description-section">
                        <h3 class="prop-description-title">תיאור הנכס</h3>
                        <p class="prop-description-text">${descriptionText}</p>
                        
                        <!-- 📞 כפתורי יצירת קשר (ממוקמים בדיוק מתחת לתיאור עבור דסקטופ!) -->
                        <div id="item-contact-container"></div>
                    </div>

                    <!-- 🤍 כרטיסיית GLASS (התבנית העסקית) -->
                    <div class="white-shadow-card">
                        <div class="sand-card-divider"></div>

                        <div class="glass-overlay">
                            <div class="apple-glass-layer">
                                
                                <h3 class="card-plan-title">תוכנית עסקית עם AI</h3>

                                <!-- 💰 1. מחיר רכישה -->
                                <div class="card-price-container">
                                    <span class="card-price-label">מחיר רכישה:</span>
                                    <span class="card-price-value">${priceText}</span>
                                </div>
                                
                                <!-- 🥧 2. תשואה ברוטו -->
                                <div class="card-yield-container">
                                    <span class="yield-text-label">תשואה ברוטו:</span>
                                    <span class="yield-percentage-value">${yieldPercentage}%</span>
                                    <div class="yield-3d-image">
                                        <img src="c.png" alt="גרף תשואה 3D" draggable="false">
                                    </div>
                                </div>
                                
                                <!-- 🏠 3. השכירות כיום -->
                                <div class="card-rent-container">
                                    <span class="card-rent-label">השכירות כיום:</span>
                                    <span class="card-rent-value">${formattedRent}</span>
                                </div>

                                <!-- 📍 4. שכירות ממוצעת באזור לפי חדרים -->
                                <div class="card-avg-rent-container">
                                    <span class="card-avg-rent-label">שכירות ממוצעת באזור ל-${cleanRoomsText}:</span>
                                    <span class="card-avg-rent-value">${formattedAvgAreaRent}</span>
                                </div>

                                <!-- 🚀 5. צפי עליית ערך הנכס בשנה הקרובה -->
                                <div class="card-appreciation-container">
                                    <span class="card-appreciation-label">צפי עליית ערך הנכס בשנה הקרובה:</span>
                                    <span class="card-appreciation-value">${formattedAppreciation}</span>
                                </div>

                                <!-- 🏙️ 6. מה צפוי לקום באזור: -->
                                <div class="card-future-dev-container">
                                    <span class="card-future-dev-label">מה צפוי לקום באזור:</span>
                                    <div class="future-dev-items-row">
                                        ${devItemsHTML}
                                    </div>
                                </div>

                                <!-- 🌟 תמונת s.png -->
                                <div class="s-3d-image">
                                    <img src="s.png" alt="אייקון 3D" draggable="false">
                                </div>
                                    
                            </div>

                            <button class="sand-arrow-btn" type="button" aria-label="חזרה">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                                    <path d="M20 12H4M4 12L10 6M4 12L10 18" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                <!-- 🗺️ 4. מפת LEAFLET חיה -->
                <div class="standalone-map-wrapper">
                    <div class="property-map-card">
                        <div id="item-interactive-map-container"></div>
                    </div>
                </div>

                <!-- 🏠 5. מאפייני הנכס -->
                <div class="standalone-features-wrapper">
                    <h3 class="prop-description-title">מאפייני הנכס</h3>
                    <div class="features-badges-row">
                        ${featuresBadgesHTML}
                    </div>
                </div>

                <div id="similar-properties-container"></div>
            </div>
        `;

        // 🔥 הפעלת מודול הכפתורים גם בדסקטופ וגם במובייל דרך קריאה אחת
        if (typeof window.initContactModule === 'function') {
            window.initContactModule();
        }

        // 🚀 טעינה שקטה ואוטומטית של ספריית המפה
        ensureLeafletAndInitMap(lat, lng, mainPropertyImage);
    }
});

// ==========================================================================
// ⚡ טעינה אוטומטית של Leaflet במידה וחסר + אתחול המפה החיה
// ==========================================================================
function ensureLeafletAndInitMap(lat, lng, imageUrl) {
    if (typeof L !== 'undefined') {
        initPropertyLeafletMap(lat, lng, imageUrl);
        return;
    }

    if (!document.getElementById('leaflet-auto-css')) {
        const link = document.createElement('link');
        link.id = 'leaflet-auto-css';
        link.rel = 'stylesheet';
        link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
        document.head.appendChild(link);
    }

    const script = document.createElement('script');
    script.src = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js';
    script.onload = () => {
        initPropertyLeafletMap(lat, lng, imageUrl);
    };
    document.head.appendChild(script);
}

// ==========================================================================
// 🗺️ פונקציית אתחול המפה החיה
// ==========================================================================
function initPropertyLeafletMap(lat, lng, imageUrl) {
    const container = document.getElementById('item-interactive-map-container');
    if (!container) return;

    if (window.itemLeafletInstance) {
        window.itemLeafletInstance.remove();
    }

    const map = L.map('item-interactive-map-container', {
        zoomControl: true,
        scrollWheelZoom: false,
        preferCanvas: true
    }).setView([lat, lng], 16);

    window.itemLeafletInstance = map;

    L.tileLayer('https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}&scale=2', {
        maxZoom: 20,
        tileSize: 256,
        zoomOffset: 0,
        detectRetina: true,
        attribution: '© Google Maps'
    }).addTo(map);

    const glassPinIcon = L.divIcon({
        className: 'leaflet-apple-glass-pin-wrapper',
        html: `
            <div class="map-property-pin-bubble">
                <img src="${imageUrl}" alt="תמונת הנכס במפה" draggable="false">
            </div>
        `,
        iconSize: [0, 0],
        iconAnchor: [0, 0]
    });

    L.marker([lat, lng], { icon: glassPinIcon }).addTo(map);

    setTimeout(() => {
        map.invalidateSize();
        map.setView([lat, lng], 16);
    }, 200);
}