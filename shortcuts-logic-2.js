document.addEventListener("DOMContentLoaded", () => {
    const container2 = document.getElementById("new-shortcuts-container-2");
    
    if (container2) {
        container2.innerHTML = `
            <style>
                /* ========================================================= */
                /* === אזור הניהול שלך - הכל נעול וסגור רק לכאן! === */
                /* ========================================================= */
                
                #new-shortcuts-container-2 .clean-card-wrapper-2 {
                    /* -- הגדרות הכרטיסייה למחשב -- */
                    --card-width: 1000px;     
                    --card-height: 370px;     
                    --margin-top: 77px;       /* 🔝 מרחק הכרטיסייה מלמעלה במחשב */
                    --move-right: -120px;     
                    --image-width: 45%;       
                    
                    /* -- הגדרות טקסט למחשב -- */
                    --title-size: 46px;       
                    --subtitle-size: 20px;    
                    --text-move-up: -40px;    
                    
                    /* -- הגדרות כפתור "התחילו" למחשב -- */
                    --btn-width: 160px;       
                    --btn-height: 50px;       
                    --btn-right: 470px;       
                    --btn-bottom: 30px;       
                    
                    width: var(--card-width) !important;
                    max-width: 100vw !important; 
                    height: var(--card-height) !important;
                    margin-top: var(--margin-top);
                    position: relative;
                    right: var(--move-right);
                    direction: rtl; 
                    box-sizing: border-box;
                }

                #new-shortcuts-container-2 .clean-card-2 {
                    display: flex;
                    background: #ffffff;
                    border-radius: 24px;
                    width: 100%;
                    height: 100%;
                    position: relative; 
                    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.02), 0 10px 20px rgba(0, 0, 0, 0.03), 0 20px 40px rgba(0, 0, 0, 0.04), 0 30px 60px rgba(0, 0, 0, 0.05);
                    overflow: hidden; 
                }

                /* ==========================================================================
                   📝 אזור הטקסט (צד ימין)
                   ========================================================================== */
                #new-shortcuts-container-2 .clean-card-white-2 {
                    width: calc(100% - var(--image-width)); 
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                    justify-content: center; 
                    align-items: flex-start; 
                    text-align: right;       
                    padding: 40px 70px; 
                    box-sizing: border-box;
                }

                #new-shortcuts-container-2 .clean-card-text-inner-2 {
                    transform: translateY(var(--text-move-up));
                }

                #new-shortcuts-container-2 .card-main-title-2 {
                    font-family: 'Heebo', sans-serif;
                    font-size: var(--title-size);
                    font-weight: 300; 
                    color: #555555; 
                    margin: 0 0 12px 0;
                    line-height: 1.1;
                    letter-spacing: -0.5px;
                }

                #new-shortcuts-container-2 .card-sub-title-2 {
                    font-family: 'Heebo', sans-serif;
                    font-size: var(--subtitle-size);
                    color: #666666; 
                    font-weight: 300; 
                    margin: 0;
                    line-height: 1.5;
                    white-space: nowrap; 
                }

                /* ==========================================================================
                   🖼️ אזור התמונה (צד שמאל)
                   ========================================================================== */
                #new-shortcuts-container-2 .clean-card-image-container-2 {
                    width: var(--image-width); 
                    height: 100%;
                }

                #new-shortcuts-container-2 .clean-card-img-2 {
                    width: 100%;
                    height: 100%;
                    object-fit: cover; 
                    display: block;
                }

                /* ==========================================================================
                   🔘 כפתור "התחילו" למחשב
                   ========================================================================== */
                #new-shortcuts-container-2 .custom-map-glass-btn-2 {
                    position: absolute;
                    width: var(--btn-width);
                    height: var(--btn-height);
                    right: var(--btn-right);
                    bottom: var(--btn-bottom);
                    background: rgba(255, 255, 255, 0.55);
                    backdrop-filter: blur(12px) saturate(160%);
                    -webkit-backdrop-filter: blur(12px) saturate(160%);
                    border: 1px solid rgba(255, 255, 255, 0.8);
                    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15), 0 5px 15px rgba(0, 0, 0, 0.08), inset 0 0 0 1px rgba(255, 255, 255, 0.5);
                    border-radius: 50px;
                    color: #1a1a1a; 
                    font-family: 'Heebo', sans-serif;
                    font-size: 16px;
                    font-weight: 400; 
                    letter-spacing: 1px; 
                    text-decoration: none;
                    z-index: 10;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: all 0.35s cubic-bezier(0.25, 0.8, 0.25, 1);
                }

                #new-shortcuts-container-2 .custom-map-glass-btn-2:hover {
                    background: rgba(255, 255, 255, 0.8); 
                    box-shadow: 0 20px 45px rgba(0, 0, 0, 0.2), 0 8px 20px rgba(0, 0, 0, 0.12), inset 0 0 0 1px rgba(255, 255, 255, 0.8);
                    transform: translateY(-4px); 
                    color: #555555; 
                    letter-spacing: 1.5px; 
                }

                #new-shortcuts-container-2 .custom-map-glass-btn-2:active {
                    transform: translateY(0) scale(0.96); 
                }

                /* ==========================================================================
                   📱 התאמה מדויקת למובייל (טלפון)
                   ========================================================================== */
                @media (max-width: 900px) {
                    #new-shortcuts-container-2 .clean-card-wrapper-2 { 
                        width: 100% !important; 
                        right: 0px !important; 
                        height: auto !important; 
                        padding: 0 10px !important;
                        margin-top: 50px !important;  /* 🔝 מרחק מלמעלה במובייל */
                    }

                    #new-shortcuts-container-2 .clean-card-2 { 
                        flex-direction: column !important; 
                        border-radius: 20px !important;
                    }

                    #new-shortcuts-container-2 .clean-card-white-2 { 
                        width: 100% !important; 
                        min-height: auto !important; 
                        padding: 30px 20px 20px 20px !important; 
                    }

                    #new-shortcuts-container-2 .clean-card-text-inner-2 { 
                        transform: translateY(0) !important; 
                    }

                    #new-shortcuts-container-2 .card-main-title-2 { 
                        font-size: 28px !important; 
                        margin-bottom: 8px !important;
                    }

                    #new-shortcuts-container-2 .card-sub-title-2 { 
                        font-size: 15px !important; 
                        white-space: normal !important; 
                    }

                    #new-shortcuts-container-2 .clean-card-image-container-2 { 
                        width: 100% !important; 
                        height: 200px !important; 
                    }

                    /* 🔘 שליטה בלעדית בגודל ובמיקום הכפתור במובייל */
                    #new-shortcuts-container-2 .custom-map-glass-btn-2 { 
                        width: 140px !important;        /* 📏 רוחב הכפתור במובייל */
                        height: 44px !important;       /* 📏 גובה הכפתור במובייל */
                        font-size: 15px !important;     /* 🔤 גודל הפונט בכפתור */
                        right: 50% !important; 
                        transform: translateX(50%) !important; 
                        bottom: 18px !important;       /* ⬇️ מרחק מלמטה במובייל */
                        -webkit-tap-highlight-color: transparent !important;
                    }

                    #new-shortcuts-container-2 .custom-map-glass-btn-2:hover { 
                        transform: translateX(50%) translateY(-2px) !important; 
                    }
                }
            </style>

            <div class="clean-card-wrapper-2">
                <div class="clean-card-2">
                    <div class="clean-card-white-2">
                        <div class="clean-card-text-inner-2">
                            <h2 class="card-main-title-2"> לצייר אזור </h2>
                            <p class="card-sub-title-2">ציירו את האזור הרצוי להשקעתכם במפה </p>
                        </div>
                    </div>
                    <div class="clean-card-image-container-2">
                        <img src="/hi.gif" class="clean-card-img-2" alt="תמונה">
                    </div>
                    <a href="https://www.immobiliare.it/" target="_blank" class="custom-map-glass-btn-2">התחילו</a>
                </div>
            </div>
        `;
    }
});