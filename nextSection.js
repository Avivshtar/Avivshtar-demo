window.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('next-section-container');
    if (!container) return;

  const shortcutsData = [
        // 🏠 שורה ראשונה (מימין לשמאל)
        { text: "דירות בארץ", src: "/israelrealestate.png", url: "israelInvestments.html" },
        { text: "דירות בחו\"ל", src: "/globalrealestate.png", url: "abroad.html" },
        { text: "קרקעות", src: "/karkaot.png", url: "lands.html" },
        { text: "הצטרפות כחבר מועדון", src: "/memberchip.png", url: "club.html" },
        
        // 🏢 שורה שנייה (מימין לשמאל)
        { text: "מסחרי ומשרדים", src: "/office.png", url: "commercial.html" },
        { text: "SIMPLEX3D", src: "/netonim.png", url: "share-demo.html" },
        { text: "פודקאסטים", src: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=600", url: "podcasts.html" },
        { text: "עזרה", src: "/help.png", url: "help.html" }
    ];

    // יצירת ה-HTML של הכרטיסיות עם בדיקה: אם יש URL, מוסיף פקודת מעבר בלחיצה
    const shortcutsHTML = shortcutsData.map(item => `
        <div class="shortcut-item" ${item.url ? `onclick="window.location.href='${item.url}'"` : ''}>
            <img src="${item.src}" alt="${item.text}" class="shortcut-img">
            <div class="shortcut-overlay">
                <span class="shortcut-text">${item.text}</span>
            </div>
        </div>
    `).join('');

    // הזרקת המבנה הסופי למסך
    container.innerHTML = `
        <div class="shortcuts-wrapper">
            <h2 class="shortcuts-title">קיצורי דרך</h2>
            <div class="shortcuts-grid">
                ${shortcutsHTML}
            </div>
        </div>
    `;
});
// קוד שמקשיב לכפתור הזכוכית בדף הבית בלי לגעת בעיצוב שלו
document.addEventListener('DOMContentLoaded', () => {
    const glassButtons = document.querySelectorAll('.glass-btn');
    glassButtons.forEach(btn => {
        if (btn.textContent.trim() === 'השקעות בארץ') {
            btn.addEventListener('click', () => {
                window.location.href = 'israelInvestments.html';
            });
        }
    });
});