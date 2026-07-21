// ==========================================================================
// 🎛️ פאנל ניהול מרכזי - המשתנים המקוריים שלך
// ==========================================================================
const CARD_MASTER_WIDTH = 250; 

const scale = CARD_MASTER_WIDTH / 250;
const px = (val) => (val * scale).toFixed(1) + 'px';

const GRAY_HEART_WIDTH  = 126;   
const GRAY_HEART_TOP    = -18;   
const GRAY_HEART_RIGHT  = -41.5; 

const BROWN_HEART_WIDTH = 126;   
const BROWN_HEART_TOP   = -21;   
const BROWN_HEART_RIGHT = -41.5; 

const CLICK_BOX_WIDTH         = 34;   
const CLICK_BOX_HEIGHT        = 34;   
const CLICK_BOX_TOP           = 10;   
const CLICK_BOX_LEFT          = 13;   

const PRICE_FONT_SIZE   = 18;         
const TEXT_FONT_SIZE    = 15.5;         
const TEXT_COLOR        = '#3a3530';  
const CONTENT_GAP       = 6;          
const CONTENT_PADDING   = `${px(10)} ${px(18)} ${px(22)} ${px(18)}`; 

const CALL_BTN_TEXT     = 'התקשרו עכשיו'; 
const WHATSAPP_BTN_TEXT = 'WhatsApp';     
const BTN_WIDTH         = '100%';         
const BTN_PADDING       = `${px(10)} ${px(10)}`; 
const BTN_FONT_SIZE     = 15;         
const BTN_BORDER_RADIUS = 12;         

// ==========================================================================
// 🏠 מאגר נתונים 1: מגוון השקעות חכמות (100% תמונות פנים יציבות ותקינות)
// ==========================================================================
const propertiesData = [
    { 
        price: "2,900,000", address: "רוטשילד 10, רמת גן", type: "דירה", rooms: "3 חד'", size: '95 מ"ר', 
        img1: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80", // סלון נורדי
        img2: "https://images.unsplash.com/photo-1745794621090-d856c53b0cc2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
        img3: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=800&q=80"  // חדר שינה נורדי
    },
    { 
        price: "3,200,000", address: "כצנלסון 45, גבעתיים", type: "פנטהאוז", rooms: "5 חד'", size: '140 מ"ר', 
        img1: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80", // סלון יוקרתי לבן
        img2: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80", // מטבח שיש אפור
        img3: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=800&q=80"  // חדר שינה יוקרתי
    },
    { 
        price: "1,850,000", address: "שדרות רגר 12, באר שבע", type: "דירה", rooms: "4 חד'", size: '100 מ"ר', 
        img1: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80", // סלון מודרני מואר
        img2: "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&w=800&q=80", // מטבח לבן נקי
        img3: "https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=800&q=80"  // חדר שינה בהיר
    },
    { 
        price: "1,100,000", address: "האר\"י 8, צפת", type: "דירה", rooms: "3 חד'", size: '75 מ"ר', 
        img1: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80", // 🔥 סודר! סלון פנים אולטרה-יציב
        img2: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80", // 🔥 סודר! מטבח שיק מודרני יציב
        img3: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80"  // חדר שינה קלאסי תואם
    },
    { 
        price: "2,400,000", address: "אהוד מנור 2, נתניה", type: "דירת גן", rooms: "5 חד'", size: '130 מ"ר', 
        img1: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80", // חלל פנים קומת קרקע גדול
        img2: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=800&q=80", // מטבח פתוח מודרני
        img3: "https://images.unsplash.com/photo-1600210492493-0946911123ea?auto=format&fit=crop&w=800&q=80"  // חדר שינה רחב מהסט
    },
    { 
        price: "800,000", address: "הנשיא 24, חיפה", type: "דירה", rooms: "4 חד'", size: '110 מ"ר', 
        img1: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=800&q=80", // חלל מגורים אורבני אלגנטי
        img2: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=800&q=80", // מטבח שיש לבן תואם
        img3: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=800&q=80"  // חדר פנימי משלים
    },
    { 
        price: "1,800,000", address: "יפו 90, ירושלים", type: "דירה", rooms: "4 חד'", size: '95 מ"ר', 
        img1: "https://images.unsplash.com/photo-1615529182904-14819c35db37?auto=format&fit=crop&w=800&q=80", // סלון שמנת קלאסי
        img2: "https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?auto=format&fit=crop&w=800&q=80", // 🔥 סודר! מטבח ביתי סופר-יציב
        img3: "https://images.unsplash.com/photo-1616137422495-1e9e46e2aa77?auto=format&fit=crop&w=800&q=80"  // חדר שינה שמנת
    },
    { 
        price: "2,150,000", address: "ז'בוטינסקי 5, אשדוד", type: "דירה", rooms: "3.5 חד'", size: '105 מ"ר', 
        img1: "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?auto=format&fit=crop&w=800&q=80", // 🔥 סודר! חלל מגורים דירתי יציב
        img2: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=80", // 🔥 סודר! מטבח שחור/בטון מודרני ויציב
        img3: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80"  // חדר פנים משלים מהסט
    },
    { 
        price: "2,800,000", address: "אחוזה 120, רעננה", type: "דירת גן", rooms: "5 חד'", size: '145 מ"ר', 
        img1: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80", // 🔥 סודר! סלון דירה פופולרי ונצחי
        img2: "https://plus.unsplash.com/premium_photo-1670360414483-64e6d9ba9038?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // מטבח שמנת מודרני
        img3: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=80"  // חדר שינה מהסט
    },
    { 
        price: "1,800,000", address: "רוטשילד 45, ראשון לציון", type: "דירה", rooms: "4 חד'", size: '108 מ"ר', 
        img1: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=800&q=80", // חלל סלון צבעוני מלא שיק
        img2: "https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=800&q=80", // 🔥 סודר! מטבח ופינת אוכל יציבה לחלוטין
        img3: "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"  // חדר שינה פנימי תואם
    }
];

// ==========================================================================
// 🏗️ מאגר נתונים 2: מגוון פרויקטים להשקעה (9 אופציות נקיות בלי מ"ר)
// ==========================================================================
const projectsData = [
    { 
        price: "YAMA - Marina", address: "יפה נוף 32, אשקלון", type: "2-6 חד'", rooms: "החל מ-2,490,000", 
        img1: "https://treedis-cdn.yad2.co.il/projects/1000177/assets/mainImage/fd36a7a8-9cd7-4720-95a8-402b2984b081.webp", 
        img2: "https://treedis-cdn.yad2.co.il/projects/1000177/assets/gallery/1f79564c-151f-45de-bb5f-3984b86ed0f0.webp", 
        img3: "https://treedis-cdn.yad2.co.il/projects/1000177/assets/gallery/70d98359-d48f-4cb3-92ef-adb9252acec4.webp", 
        developerLogo: "https://treedis-cdn.yad2.co.il/clients/1000009/logo.png" 
    },
    { 
        price: "SOHO", address: "בר יוחאי 15, ירושלים", type: "5 חד'", rooms: "החל מ-2,200,000 ₪", 
        img1: "https://treedis-cdn.yad2.co.il/projects/1000234/assets/gallery/b972e0ea-45b8-4e8d-9974-36074585463b.jpg", 
        img2: "https://treedis-cdn.yad2.co.il/projects/1000234/assets/gallery/8eb896e1-4b83-49c7-82e1-f51d8ecfdfcd.webp", 
        img3: "https://treedis-cdn.yad2.co.il/projects/1000234/assets/gallery/986a6cc1-77ea-4617-a7d0-6132afec49f4.webp", 
        developerLogo: "https://treedis-cdn.yad2.co.il/clients/1000004/logo.png" 
    },
    { 
        price: "RAMAT EFAL", address: "רב אלוף רפאל איתן 14, רמת גן", type: "2-6 חד'", rooms: "החל מ-2,300,000 ₪", 
        img1: "https://treedis-cdn.yad2.co.il/projects/1000360/assets/gallery/ff4ef75f-2d33-4fed-ae6c-15ecf0ef7b2f.webp", 
        img2: "https://treedis-cdn.yad2.co.il/projects/1000360/assets/gallery/54e16b67-31f2-4bda-ba5a-f6afc3f72c57.webp", 
        img3: "https://treedis-cdn.yad2.co.il/projects/1000360/assets/mainImage/390d5097-336f-409d-a010-03f81cc1b0ff.webp", 
        developerLogo: "https://treedis-cdn.yad2.co.il/clients/1000086/logo.png" 
    },
    { 
        price: "THE STRIP", address: "שמחה ארליך פינת בן צבי, נתניה", type: "תמ\"א 38", rooms: "החל מ-1,900,000", 
        img1: "https://treedis-cdn.yad2.co.il/projects/1019296/assets/gallery/93bb3fb6-42ee-4d41-9912-6437e8c3dd9e.webp", 
        img2: "https://treedis-cdn.yad2.co.il/projects/1019296/assets/gallery/395cb229-d3a3-44fc-8d3f-8e5f0bbaca71.webp", 
        img3: "https://treedis-cdn.yad2.co.il/projects/1019296/assets/gallery/b0b96fd9-ce71-4db7-935a-00f9d121b60b.webp", 
        developerLogo: "https://treedis-cdn.yad2.co.il/clients/1000010/logo.png" 
    },
    { 
        price: "RAINBOW - TEL AVIV", address: "מתחם שדה דב", type: "2-5 חד'", rooms: "החל מ-5,000,000", 
        img1: "https://treedis-cdn.yad2.co.il/projects/1017470/assets/mainImage/01f610d1-e87f-48fb-a6d3-ec3bbe40934f.webp", 
        img2: "https://treedis-cdn.yad2.co.il/projects/1017470/assets/gallery/8b0cf444-67c7-4779-b5f2-aaab4155237c.webp", 
        img3: "https://treedis-cdn.yad2.co.il/projects/1017470/assets/gallery/3ca1007f-29c8-4e13-86c9-057c0fed68bb.webp", 
        developerLogo: "https://treedis-cdn.yad2.co.il/clients/1000496/logo.png" 
    },
    { 
        price: "REISDOR - NETIVOT", address: "אריאל שרון 48, נתיבות", type: "6 חד'", rooms: "החל מ-1,543,750", 
        img1: "https://treedis-cdn.yad2.co.il/projects/1018845/assets/mainImage/e513dde6-b535-4653-88c6-58eaa9d6a868.webp", 
        img2: "https://treedis-cdn.yad2.co.il/projects/1018845/assets/gallery/41a02314-26e1-4cff-80e5-fdcede736ed5.webp", 
        img3: "https://treedis-cdn.yad2.co.il/projects/1018845/assets/gallery/0656b496-a456-4dbe-98ea-17ea14808a5f.webp", 
        developerLogo: "https://treedis-cdn.yad2.co.il/clients/1000012/logo.png" 
    },
    { 
        price: "NORTH STAR", address: "ז'בוטינסקי 45, אשדוד", type: "פינוי בינוי", rooms: "החל מ-3,000,000", 
        img1: "https://treedis-cdn.yad2.co.il/projects/1000159/assets/mainImage/7f3a2f9b-171d-4e2e-96b4-663fe66f6c1b.webp", 
        img2: "https://treedis-cdn.yad2.co.il/projects/1000159/assets/gallery/b284db22-4bd2-4709-a35f-3450e8c899e1.webp", 
        img3: "https://treedis-cdn.yad2.co.il/projects/1000159/assets/gallery/de1fe349-131a-4316-8438-7076f5674be1.webp", 
        developerLogo: "https://treedis-cdn.yad2.co.il/clients/1000037/logo.png" 
    },
    { 
        price: "RIVERSIDE", address: "גדות, יהוד מונסון", type: "3-6 חד'", rooms: "החל מ-3,250,000", 
        img1: "https://treedis-cdn.yad2.co.il/projects/1019060/assets/mainImage/702e76d1-f0a5-43a4-9fa4-3527c79bf999.webp", 
        img2: "https://treedis-cdn.yad2.co.il/projects/1019060/assets/gallery/1207076a-6cda-4071-aeb7-4cc56f782612.webp", 
        img3: "https://treedis-cdn.yad2.co.il/projects/1019060/assets/gallery/23e96817-5b04-4f90-9bb7-8c829db1ec09.webp", 
        developerLogo: "https://treedis-cdn.yad2.co.il/clients/1001189/logo.png" 
    },
    { 
        price: "NOFIM", address: "שכונת אבוקדו, קרית אתא", type: "3-5 חד'", rooms: "החל מ-1,790,000", 
        img1: "https://treedis-cdn.yad2.co.il/projects/1019279/assets/gallery/f2f92d28-62cf-4558-a5f8-177428ad1af8.webp", 
        img2: "https://treedis-cdn.yad2.co.il/projects/1019279/assets/gallery/5886a73c-a1ca-45aa-91c6-1f526f5184aa.webp", 
        img3: "https://treedis-cdn.yad2.co.il/projects/1019279/assets/mainImage/e2ff8220-d4ed-4aed-bcd0-84713deb6e80.webp", 
        developerLogo: "https://treedis-cdn.yad2.co.il/clients/1000087/logo.png" 
    }
];

// ==========================================================================
// 🎨 פונקציה לייצור כרטיסייה על בסיס הנתונים דינמית
// ==========================================================================
const createPropertyCard = (data, index, type) => `
<div class="property-card" data-index="${index}" data-type="${type}" style="cursor: pointer;">
    <div class="card-media">
        <div class="image-container">
            <img src="${data.img1}" class="carousel-img active" alt="תמונה 1">
            <img src="${data.img2}" class="carousel-img" alt="תמונה 2">
            <img src="${data.img3}" class="carousel-img" alt="תמונה 3">
        </div>

        <button class="carousel-arrow prev-arrow js-carousel-prev">&#10094;</button>
        <button class="carousel-arrow next-arrow js-carousel-next">&#10095;</button>

        <div class="card-love-container js-love-btn">
            <div class="card-love-click-box js-click-box"></div> 
            <div class="card-love-hearts-anchor"> 
                <img src="/1.png" class="card-love-icon-1" alt="לב אפור">
                <img src="/2.png" class="card-love-icon-2" alt="לב חום">
            </div>
        </div>
    </div>

<div class="card-content" style="position: relative !important;">
        ${data.developerLogo ? `<img src="${data.developerLogo}" class="developer-logo" alt="לוגו קבלן">` : ''}
        
        <div class="prop-price">${data.price}</div>
        
        <div class="prop-address">
            <svg class="location-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.0" stroke-linecap="round" stroke-linejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="2.5"></circle>
            </svg>
            ${data.address}
        </div>
        
        <div class="prop-specs">
            <span>${data.type}</span>
            <div class="spec-divider"></div>
            <span>${data.rooms}</span>
            ${data.size ? `
                <div class="spec-divider"></div>
                <span>${data.size}</span>
            ` : ''}
        </div>
    </div>

    <div class="card-actions">
        <button type="button" class="btn-call js-call-trigger">
            <span>${CALL_BTN_TEXT}</span>
            <svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
        </button>
        
        <button type="button" class="btn-whatsapp js-whatsapp-trigger">
            <span>${WHATSAPP_BTN_TEXT}</span>
            <svg class="btn-icon-wa" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.004 2C6.48 2 2 6.48 2 12.004c0 1.91.48 3.71 1.39 5.32L2 22l4.83-1.27c1.55.85 3.32 1.31 5.17 1.31 5.52 0 10.004-4.48 10.004-10.004C22.008 6.48 17.524 2 12.004 2zm5.95 14.39c-.25.7-.99 1.25-1.73 1.46-.51.15-1.17.26-3.41-.73-2.86-1.27-4.66-4.15-4.81-4.34-.14-.2-1.12-1.49-1.12-2.85 0-1.36.71-2.03.96-2.31.25-.28.53-.35.71-.35.18 0 .35.01.5.02.16.01.37-.06.58.45.21.52.74 1.81.81 1.95.07.14.11.31.02.49-.09.18-.21.36-.36.53-.15.18-.32.37-.16.66.16.28.73 1.21 1.57 1.96.84.75 1.54 1.23 1.83 1.37.28.14.45.12.62-.07.17-.2.74-.86.94-1.15.2-.29.41-.24.69-.14.28.1.1.79.52 1.56 1.48.51 2.21.75 2.5.54.29-.21.29-.62.04-.92z"/>
            </svg>
        </button>
    </div>
</div>
`;

const styles = `
<style>
    .property-card {
        font-family: 'Heebo', sans-serif;
        direction: rtl !important;
        background: #ffffff;
        overflow: hidden;
        border: ${px(1)} solid #f3f3f3; 
        border-radius: ${px(16)};
        box-shadow: 0 ${px(4)} ${px(20)} rgba(0, 0, 0, 0.05); 
        padding: 0;
        box-sizing: border-box;
        position: relative;
    }
    .property-card:hover { transform: none !important; box-shadow: 0 ${px(4)} ${px(20)} rgba(0, 0, 0, 0.05) !important; }
    .card-media { position: relative; width: 100%; height: ${px(180)}; overflow: hidden; padding: ${px(8)}; box-sizing: border-box; }
    .image-container { width: 100%; height: 100%; position: relative; border-radius: ${px(12)}; overflow: hidden; border: ${px(1)} solid rgba(0, 0, 0, 0.02); }
    .carousel-img { width: 100%; height: 100%; object-fit: cover; position: absolute; top: 0; left: 0; opacity: 0; transition: opacity 0.3s ease-in-out; z-index: 1; }
    .carousel-img.active { opacity: 1; z-index: 2; }
    .carousel-arrow { position: absolute; top: 50%; transform: translateY(-50%); background: rgba(255, 255, 255, 0.65); backdrop-filter: blur(3px); border: none; width: ${px(28)}; height: ${px(28)}; border-radius: 50%; cursor: pointer; z-index: 10; display: flex; align-items: center; justify-content: center; font-size: ${px(14)}; color: #333; opacity: 0; transition: all 0.25s ease !important; box-shadow: 0 ${px(1)} ${px(4)} rgba(0,0,0,0.1); }
    .card-media:hover .carousel-arrow { opacity: 1; }
    .prev-arrow { right: ${px(20)}; }
    .next-arrow { left: ${px(20)}; }
    .carousel-arrow:hover { background: rgba(255, 255, 255, 0.85); transform: translateY(-50%) scale(1.1); box-shadow: 0 ${px(4)} ${px(8)} rgba(0,0,0,0.12); }
    .carousel-arrow:active { transform: translateY(-50%) scale(0.96); }
    .card-love-container { position: absolute; top: 0; left: 0; width: 100%; height: 100%; pointer-events: none; z-index: 15; }
    .card-love-click-box { position: absolute; pointer-events: auto; cursor: pointer; z-index: 3; background-color: transparent !important; top: ${px(CLICK_BOX_TOP)} !important; left: ${px(CLICK_BOX_LEFT)} !important; width: ${px(CLICK_BOX_WIDTH)} !important; height: ${px(CLICK_BOX_HEIGHT)} !important; border-radius: 50% !important; }
    .card-love-hearts-anchor { position: absolute; top: ${px(15)}; left: ${px(15)}; width: ${px(36)}; height: ${px(36)}; z-index: 1; }
    .card-love-icon-1, .card-love-icon-2 { position: absolute; object-fit: contain; transition: all 0.25s ease; filter: drop-shadow(0 ${px(3)} ${px(5)} rgba(0, 0, 0, 0.13)) !important; }
    .card-love-icon-1 { opacity: 1; z-index: 1; width: ${px(GRAY_HEART_WIDTH)} !important; height: auto !important; top: ${px(GRAY_HEART_TOP)} !important; right: ${px(GRAY_HEART_RIGHT)} !important; }
    .card-love-icon-2 { opacity: 0; z-index: 2; width: ${px(BROWN_HEART_WIDTH)} !important; height: auto !important; top: ${px(BROWN_HEART_TOP)} !important; right: ${px(BROWN_HEART_RIGHT)} !important; }
    .card-love-click-box:hover ~ .card-love-hearts-anchor .card-love-icon-1 { opacity: 0 !important; }
    .card-love-click-box:hover ~ .card-love-hearts-anchor .card-love-icon-2 { opacity: 1 !important; transform: scale(1.05) !important; filter: drop-shadow(0 ${px(4)} ${px(8)} rgba(0, 0, 0, 0.18)) !important; }
    .card-love-container.favorited .card-love-icon-1 { opacity: 0 !important; }
    .card-love-container.favorited .card-love-icon-2 { opacity: 1 !important; }
    .card-content { padding: ${CONTENT_PADDING} !important; display: flex !important; flex-direction: column !important; align-items: flex-start !important; box-sizing: border-box; gap: ${px(CONTENT_GAP)} !important; }
    .prop-price, .prop-address, .prop-specs { color: ${TEXT_COLOR} !important; margin: 0 !important; line-height: 1.3 !important; text-align: right !important; }
    .prop-price { font-size: ${px(PRICE_FONT_SIZE)} !important; font-weight: 700 !important; }
    .prop-address { font-size: ${px(TEXT_FONT_SIZE)} !important; font-weight: 400 !important; display: flex !important; align-items: center !important; justify-content: flex-start !important; gap: ${px(6)} !important; }
    .location-icon { width: ${px(15)} !important; height: ${px(15)} !important; flex-shrink: 0 !important; color: ${TEXT_COLOR} !important; transform: translateY(${px(-1.5)}) !important; }
    .prop-specs { font-size: ${px(TEXT_FONT_SIZE)} !important; font-weight: 400 !important; display: flex !important; align-items: center !important; justify-content: flex-start !important; gap: ${px(7)} !important; width: auto !important; }
    .spec-divider { width: ${px(1)} !important; height: ${px(17)} !important; background-color: #d4d4d8 !important; box-shadow: ${px(0.5)} ${px(0.5)} ${px(1)} rgba(0, 0, 0, 0.1) !important; flex-shrink: 0 !important; }
    .card-actions { width: 100%; box-sizing: border-box; padding: 0 ${px(18)} ${px(20)} ${px(18)}; display: flex !important; flex-direction: column !important; gap: ${px(8)} !important; }
    .btn-call { width: ${BTN_WIDTH} !important; display: flex; align-items: center; justify-content: center; gap: ${px(8)}; font-family: 'Heebo', sans-serif; font-size: ${px(BTN_FONT_SIZE)} !important; border-radius: ${px(BTN_BORDER_RADIUS)} !important; padding: ${BTN_PADDING} !important; cursor: pointer; box-sizing: border-box; font-weight: 500; color: ${TEXT_COLOR}; border: ${px(0.5)} solid rgba(0, 0, 0, 0.05) !important; background: linear-gradient(to bottom, #ffffff, #fcfcfc) !important; box-shadow: 0 ${px(1)} ${px(2)} rgba(0, 0, 0, 0.02) !important; margin-top: ${px(-3)} !important; transition: all 0.2s ease !important; }
    .btn-call:hover { background: linear-gradient(to bottom, #fafafa, #f5f5f5) !important; box-shadow: 0 ${px(4)} ${px(8)} rgba(0, 0, 0, 0.04) !important; border-color: rgba(0, 0, 0, 0.08) !important; }
    .btn-call:active { transform: scale(0.92) !important; box-shadow: inset 0 ${px(2)} ${px(4)} rgba(0, 0, 0, 0.06) !important; }
    .btn-whatsapp { width: ${BTN_WIDTH} !important; display: flex; align-items: center; justify-content: center; gap: ${px(8)}; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; font-size: ${px(BTN_FONT_SIZE)} !important; border-radius: ${px(BTN_BORDER_RADIUS)} !important; padding: ${BTN_PADDING} !important; cursor: pointer; box-sizing: border-box; font-weight: 600; color: #ffffff !important; border: none !important; background: linear-gradient(to bottom, #25d366, #1ebd59) !important; box-shadow: 0 ${px(1)} ${px(3)} rgba(37, 211, 102, 0.15) !important; transition: all 0.2s ease !important; }
    .btn-whatsapp:hover { background: linear-gradient(to bottom, #22c358, #1aab50) !important; box-shadow: 0 ${px(3)} ${px(6)} rgba(37, 211, 102, 0.25) !important; }
    .btn-icon, .btn-icon-wa { width: ${px(15)} !important; height: ${px(15)} !important; flex-shrink: 0; }
</style>
`;

function bindCardListeners(container) {
    container.querySelectorAll('.property-card').forEach(card => {
        const prev = card.querySelector('.js-carousel-prev');
        const next = card.querySelector('.js-carousel-next');
        const imgs = card.querySelectorAll('.carousel-img');
        let idx = 0;

        if (prev && next && imgs.length) {
            prev.onclick = (e) => {
                e.stopPropagation();
                idx = (idx - 1 + imgs.length) % imgs.length;
                imgs.forEach((img, i) => img.classList.toggle('active', i === idx));
            };
            next.onclick = (e) => {
                e.stopPropagation();
                idx = (idx + 1) % imgs.length;
                imgs.forEach((img, i) => img.classList.toggle('active', i === idx));
            };
        }

        const call = card.querySelector('.js-call-trigger');
        if (call) {
            call.onclick = (e) => {
                e.stopPropagation();
                const span = call.querySelector('span');
                if (span) { span.textContent = '052-8095900'; call.disabled = true; }
            };
        }
        const wa = card.querySelector('.js-whatsapp-trigger');
        if (wa) { wa.onclick = (e) => e.stopPropagation(); }

        const love = card.querySelector('.js-love-btn');
        const clickBox = card.querySelector('.js-click-box');
        if (clickBox && love) {
            clickBox.onclick = (e) => { e.stopPropagation(); love.classList.toggle('favorited'); };
        }

        // =======================================================
        // 🔥 החיבור של שלב 3: מעבר לדף הכרטיסייה המורחב בלחיצה
        // =======================================================
        card.onclick = () => {
            const index = card.getAttribute('data-index');
            const type = card.getAttribute('data-type');
            if (index !== null && type) {
                window.location.href = `item.html?type=${type}&id=${index}`;
            }
        };
    });
}

function renderFeed(containerId, dataArray, includeStyles, dataType) {
    const container = document.getElementById(containerId);
    if (!container) return;

    // מעבירים גם את ה-index וגם את ה-dataType לתוך createPropertyCard
    const cardsHTML = dataArray.map((data, index) => createPropertyCard(data, index, dataType)).join('');
    container.innerHTML = includeStyles ? styles + cardsHTML : cardsHTML;
    bindCardListeners(container);
}

// מזרים אוטומטית לשני המקטעים בנפרד!
window.addEventListener('DOMContentLoaded', () => {
    // הוספנו 'property' בסוף
    renderFeed('property-card-demo-container', propertiesData, true, 'property');
    
    // הוספנו 'project' בסוף
    renderFeed('projects-card-demo-container', projectsData, false, 'project');
});