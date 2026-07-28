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
                    --margin-top: 170px;        /* 🔝 מרחק מלמעלה במחשב */
                    --move-right: -120px;       /* הזזה ימינה להתיישרות במחשב */
                    --text-color: #555555;      /* אפור פחם נקי ודק */
                    
                    width: var(--footer-width) !important;
                    max-width: 100vw !important;
                    margin-top: var(--margin-top);
                    margin-bottom: 25px;        
                    margin-left: auto;
                    margin-right: auto;
                    
                    position: relative;
                    right: var(--move-right);
                    
                    direction: rtl;
                    box-sizing: border-box;
                }

                /* קו מפריד פשוט ונקי */
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

                /* הקישורים המשפטיים למחשב */
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

                /* ==========================================================================
                   📱 התאמה מדויקת למובייל (טלפון)
                   ========================================================================== */
                @media (max-width: 900px) {
                    #new-shortcuts-container-3 .legal-footer-wrapper {
                        width: 100% !important;
                        right: 0px !important;
                        padding: 0 15px !important;
                        margin-top: 77px !important;  /* 🔝 מרחק הפוטר ממה שמעליו במובייל */
                        margin-bottom: 30px !important;
                    }

                    #new-shortcuts-container-3 .footer-strong-divider {
                        margin-bottom: 20px !important;
                    }

                    #new-shortcuts-container-3 .footer-legal-content {
                        flex-direction: column !important;
                        gap: 16px !important;
                        text-align: center !important;
                        padding: 0 !important;
                    }

                    #new-shortcuts-container-3 .footer-legal-links {
                        justify-content: center !important;
                        flex-wrap: wrap !important;
                        gap: 16px 20px !important;
                    }

                    #new-shortcuts-container-3 .footer-legal-links a {
                        font-size: 13.5px !important;
                        -webkit-tap-highlight-color: transparent !important;
                    }

                    #new-shortcuts-container-3 .footer-copyright-text {
                        font-size: 12.5px !important;
                        line-height: 1.4 !important;
                        opacity: 0.85;
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
