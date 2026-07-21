// ==========================================================================
// 🧠 קובץ ניהול ולוגיקה - דף הכרטיסייה המורחב (item.js)
// ==========================================================================
window.addEventListener('DOMContentLoaded', () => {
    // 1. חילוץ הפרמטרים מכתובת ה-URL (הסוג והאינדקס של הכרטיס שנלחץ)
    const urlParams = new URLSearchParams(window.location.search);
    const type = urlParams.get('type'); // 'property' או 'project'
    const id = parseInt(urlParams.get('id'), 10); // המיקום שלו במערך

    let data = null;

    // 2. שליפת הנתונים מהמערך המתאים (propertiesData או projectsData)
    if (type === 'property' && typeof propertiesData !== 'undefined') {
        data = propertiesData[id];
    } else if (type === 'project' && typeof projectsData !== 'undefined') {
        data = projectsData[id];
    }

    // הגנה במקרה שהנכס לא נמצא או שיש שגיאה בקישור
    if (!data) {
        const container = document.getElementById('item-details-container');
        if (container) {
            container.innerHTML = `
                <div style="text-align:center; padding:80px; font-family:'Heebo';">
                    <h2>אופס! הנכס לא נמצא או שהקישור אינו תקין.</h2>
                    <a href="javascript:history.back()" style="color:#875b33; font-weight:600; text-decoration:underline;">חזרה ללוח הנכסים</a>
                </div>`;
        }
        return;
    }

    // 3. הזרקה דינמית של הנתונים לתוך אלמנטי ה-HTML בדף
    
    // מחיר, כתובת ומפרט בסיסי
    document.getElementById('display-price').textContent = data.price + (type === 'property' ? ' ₪' : '');
    document.getElementById('display-address').textContent = data.address;
    document.getElementById('display-type').textContent = data.type;
    document.getElementById('display-rooms').textContent = data.rooms;
    
    // ניהול גודל הנכס (מציג מ"ר רק אם קיים בנתונים, כמו בדירות רגילות)
    const sizeWrapper = document.getElementById('display-size-wrapper');
    if (data.size) {
        document.getElementById('display-size').textContent = data.size;
        sizeWrapper.style.display = 'block';
    } else {
        sizeWrapper.style.display = 'none';
    }

    // ניהול לוגו קבלן (מציג רק אם קיים בנתונים, כמו בפרויקטים)
    const logoImg = document.getElementById('display-developer-logo');
    if (data.developerLogo) {
        logoImg.src = data.developerLogo;
        logoImg.style.display = 'block';
    } else {
        logoImg.style.display = 'none';
    }

    // טעינת גלריית 3 התמונות של הנכס
    document.getElementById('main-img-1').src = data.img1;
    document.getElementById('main-img-2').src = data.img2;
    document.getElementById('main-img-3').src = data.img3;

    // 4. ניהול כפתורי יצירת הקשר הדינמיים
    document.getElementById('btn-action-call').onclick = () => {
        window.location.href = 'tel:0528095900'; // מספר הטלפון שלך
    };
    
    document.getElementById('btn-action-wa').onclick = () => {
        const message = encodeURIComponent(`היי, אשמח לקבל פרטים נוספים על הנכס ב${data.address}`);
        window.open(`https://wa.me/972528095900?text=${message}`, '_blank');
    };
});