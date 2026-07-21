document.addEventListener("DOMContentLoaded", () => {
    const container3 = document.getElementById("new-shortcuts-container-3");
    
    if (container3) {
        // משחררים את הקונטיינר האב כדי שלא יקרוס
        container3.style.maxWidth = "none";
        container3.style.width = "100%";
        container3.style.overflow = "visible";

        container3.innerHTML = `
            <style>
                /* ========================================================= */
                /* === אזור הניהול של אזור תחתית העמוד (Footer) === */
                /* ========================================================= */
                #new-shortcuts-container-3 .legal-footer-wrapper {
                    --footer-width: 1000px;     /* רוחב זהה לחלוטין לכרטיסיות שמעליו */
                    --margin-top: 170px;        /* 🔥 עודכן ל-170px לבקשתך 🔥 */
                    --move-right: -120px;       /* הזזה ימינה כדי להתיישר בול עם השאר */
                    --text-color: #555555;      /* אפור פחם נקי ודק */
                    
                    width: var(--footer-width) !important;
                    max-width: 100vw !important;
                    margin-top: var(--margin-top);
                    margin-bottom: 25px;        /* 🔥 קוצר מ-60px כדי לצמצם את הגלילה המיותרת אחרי 🔥 */
                    margin-left: auto;
                    margin-right: auto;
                    
                    position: relative;
                    right: var(--move-right);
                    
                    direction: rtl;
                    box-sizing: border-box;
                }

                /* קו לבן מפריד פשוט ונקי (בלי שום צל) */
                #new-shortcuts-container-3 .footer-strong-divider {
                    width: 100%;
                    height: 2px;
                    background: #ffffff;
                    margin-bottom: 25px;
                }

                /* סידור התוכן בפנים */
                #new-shortcuts-container-3 .footer-legal-content {
                    display: flex;
                    justify-content: space-between; 
                    align-items: center;
                    flex-wrap: wrap;
                    padding: 0 10px;
                }

                /* הקישורים המשפטיים */
                #new-shortcuts-container-3 .footer-legal-links {
                    display: flex;
                    gap: 30px; 
                }

                #new-shortcuts-container-3 .footer-legal-links a {
                    font-family: 'Heebo', sans-serif;
                    font-size: 14px;
                    font-weight: 300; 
                    color: var(--text-color);
                    text-decoration: none;
                    transition: color 0.2s ease;
                }

                #new-shortcuts-container-3 .footer-legal-links a:hover {
                    color: #000000;
                    text-decoration: underline;
                }

                /* טקסט זכויות היוצרים */
                #new-shortcuts-container-3 .footer-copyright-text {
                    font-family: 'Heebo', sans-serif;
                    font-size: 14px;
                    font-weight: 300; 
                    color: var(--text-color);
                    letter-spacing: 0.2px;
                }

                /* ================== התאמה למובייל ================== */
                @media (max-width: 900px) {
                    #new-shortcuts-container-3 .legal-footer-wrapper {
                        width: 100% !important;
                        right: 0px !important;
                        padding: 0 20px;
                        margin-top: 60px;
                        margin-bottom: 20px;
                    }
                    #new-shortcuts-container-3 .footer-legal-content {
                        flex-direction: column;
                        gap: 15px;
                        text-align: center;
                    }
                    #new-shortcuts-container-3 .footer-legal-links {
                        justify-content: center;
                        gap: 20px;
                    }
                }
            </style>

            <div class="legal-footer-wrapper">
                <div class="footer-strong-divider"></div>
                
                <div class="footer-legal-content">
                    <div class="footer-legal-links">
                        <a href="#">תנאי שימוש</a>
                        <a href="#">מדיניות הפרטיות</a>
                        <a href="#">הצהרת נגישות</a>
                        <a href="#">עוגיות</a>
                    </div>
                    
                    <div class="footer-copyright-text">
                        © 2026 All rights reserved to Smart Investors - Beta Version
                    </div>
                </div>
            </div>
        `;
    }
});