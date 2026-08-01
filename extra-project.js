// ==========================================================================
// 🚀 היסטוריית עסקאות ומגמות באזור (extra-project.js) 
// (עיצוב מקורי ונקי + טבלאות + סרגל טאבים בעל יכולת פריצה חופשית מעבר ל-100% רוחב בכל מכשיר)
// ==========================================================================

// 1. 🎨 הזרקת העיצוב
const extraProjectStyle = document.createElement('style');
extraProjectStyle.innerHTML = `
    /* ==========================================================================
       🎛️ לוח בקרת עיצוב מרכזי - שליטה מותאמת לפי מכשיר (Mobile / Tablet / Laptop / Desktop)
       ========================================================================== */

    /* 📱 1. מובייל (Mobile - עד 767px) */
    @media (max-width: 767px) {
        #plan-modal-overlay {
            --extra-mt-mob: 20px;          
            --extra-x-mob: 0px;            
            --extra-chart-height: 300px;      /* גובה גרף מותאם למובייל */
            --extra-node-r: 5.2px;            /* גודל כדורים */
            --extra-node-r-active: 7px;       /* גודל כדורים פעילים */
            --extra-year-size: 18.2px;        /* גודל שנים 18.2px */
            --extra-price-size: 12.5px;       /* גודל מחיר בציר Y */

            /* 📌 🎛️ שליטה בסרגל הטאבים הראשי למובייל (ניתן להגדיל מעבר ל-100%!) */
            --tabs-top-mob: -80px;                                   /* מרחק מלמעלה במצב Sticky */
            --tabs-width-mob: 120%;                                /* רוחב הסרגל (פורץ מעבר ל-100%!) */
            --tabs-height-mob: 90px;                               /* גובה הסרגל */
            --tabs-x-mob: 0px;                                     /* הזזה אופקית (ימינה / שמאלה) */
            --tabs-shadow-mob: 0 4px 18px rgba(0, 0, 0, 0.08);     /* צל עדין מתחת לסרגל */
        }
    }

  /* 📑 2. טאבלט (Tablet - 768px עד 1023px) */
    @media (min-width: 768px) and (max-width: 1023px) {
        #plan-modal-overlay {
            --extra-mt-tab: 35px;          
            --extra-x-tab: 0px;            
            --extra-chart-height: 340px;      
            --extra-node-r: 5.2px;            
            --extra-node-r-active: 8px;       
            --extra-year-size: 15.5px;        
            --extra-price-size: 12.5px;       

            /* 📌 🎛️ שליטה בסרגל הטאבים הראשי לטאבלט */
            --tabs-mt-tab: 0px;                                    /* 🌟 מזיז את הסרגל למעלה/למטה בלי לגעת בכותרת! */
            --tabs-mb-tab: 25px;                                   /* מרווח מתחת לסרגל */
            --tabs-top-tab: 0px;                                   /* נקודת עגינה בחלק העליון בגלילה */
            --tabs-width-tab: 105%;                                /* רוחב הסרגל */
            --tabs-height-tab: auto;                               /* גובה קבוע לסרגל (או auto) */
            --tabs-pad-top-tab: 12px;                              /* עובי אנכי מלמעלה */
            --tabs-pad-bottom-tab: 8px;                            /* עובי אנכי מלמטה */
            --tabs-x-tab: 0px;                                     /* הזזה אופקית (ימינה / שמאלה) */
            --tabs-shadow-tab: 0 4px 18px rgba(0, 0, 0, 0.08);     /* צל עדין */
        }
        /* 🎯 מרווחים נקיים ואיזון פרופורציונלי לטבלה בטאבלט ללא דחיסה וללא גלילה */
        #plan-modal-overlay .table-section,
        #plan-modal-overlay .extra-table-card,
        #plan-modal-overlay .extra-table-scroll-wrapper {
            width: 100% !important;
            max-width: 100% !important;
            box-sizing: border-box !important;
            overflow-x: hidden !important;
        }

        #plan-modal-overlay .extra-data-table {
            min-width: 0 !important;
            width: 100% !important;
            max-width: 100% !important;
            table-layout: auto !important;
        }

        #plan-modal-overlay .extra-data-table th, 
        #plan-modal-overlay .extra-data-table td {
            padding: 10px 6px !important;
            font-size: 12px !important;
            white-space: nowrap !important;
        }
    }

    /* 💻 3. נייד (Laptop - 1024px עד 1439px) */
    @media (min-width: 1024px) and (max-width: 1439px) {
        #plan-modal-overlay {
            --extra-width-lap: 980px;      
            --extra-mt-lap: 55px;          
            --extra-x-lap: 0px;            
            --extra-chart-height: 360px;      /* גודל גרף */
            --extra-node-r: 5.2px;            /* גודל כדורים */
            --extra-node-r-active: 7px;       /* גודל כדורים פעילים */
            --extra-year-size: 16px;          /* גודל שנה */
            --extra-price-size: 13.5px;       /* גודל מחיר */

            /* 📌 🎛️ שליטה בסרגל הטאבים הראשי למחשב נייד */
            --tabs-top-lap: -50px;                                   /* מרחק מלמעלה במצב Sticky */
            --tabs-width-lap: 104%;                                /* רוחב הסרגל */
            --tabs-height-lap: 75px;                               /* גובה הסרגל */
            --tabs-x-lap: 0px;                                     /* הזזה אופקית (ימינה / שמאלה) */
            --tabs-shadow-lap: 0 4px 18px rgba(0, 0, 0, 0.08);     /* צל עדין מתחת לסרגל */
        }
    }

    /* 🖥️ 4. נייח (Desktop - 1440px ומעלה) */
    @media (min-width: 1440px) {
        #plan-modal-overlay {
            --extra-width-desk: 1000px;    
            --extra-mt-desk: 65px;         
            --extra-x-desk: 0px;            
            --extra-chart-height: 380px;      /* גודל גרף */
            --extra-node-r: 5.2px;            /* גודל כדורים */
            --extra-node-r-active: 8px;       /* גודל כדורים פעילים */
            --extra-year-size: 16px;          /* גודל שנה */
            --extra-price-size: 13.5px;       /* גודל מחיר */

            /* 📌 🎛️ שליטה בסרגל הטאבים הראשי למחשב נייח */
            --tabs-top-desk: -50px;                                  /* מרחק מלמעלה במצב Sticky */
            --tabs-width-desk: 124%;                               /* רוחב הסרגל */
            --tabs-height-desk: 77px;                              /* גובה הסרגל */
            --tabs-x-desk: 0px;                                    /* הזזה אופקית (ימינה / שמאלה) */
            --tabs-shadow-desk: 0 4px 18px rgba(0, 0, 0, 0.08);    /* צל עדין מתחת לסרגל */
        }
    }

    #plan-modal-overlay .extra-project-container {
        position: relative !important; box-sizing: border-box !important; display: flex !important;
        flex-direction: column !important; align-items: center !important; justify-content: center !important;
        direction: rtl !important; z-index: 10 !important; margin-left: auto !important; margin-right: auto !important; flex-shrink: 0 !important;
    }

    @media (max-width: 767px) { #plan-modal-overlay .extra-project-container { width: 100% !important; margin-top: var(--extra-mt-mob) !important; transform: translateX(var(--extra-x-mob)) !important; padding: 0 6px !important; } }
    @media (min-width: 768px) and (max-width: 1023px) { #plan-modal-overlay .extra-project-container { width: 100% !important; margin-top: var(--extra-mt-tab) !important; transform: translateX(var(--extra-x-tab)) !important; } }
    @media (min-width: 1024px) and (max-width: 1439px) { #plan-modal-overlay .extra-project-container { width: var(--extra-width-lap) !important; margin-right: calc(50% - (var(--extra-width-lap) / 2)) !important; margin-left: calc(50% - (var(--extra-width-lap) / 2)) !important; margin-top: var(--extra-mt-lap) !important; transform: translateX(var(--extra-x-lap)) !important; } }
    @media (min-width: 1440px) { #plan-modal-overlay .extra-project-container { width: var(--extra-width-desk) !important; margin-right: calc(50% - (var(--extra-width-desk) / 2)) !important; margin-left: calc(50% - (var(--extra-width-desk) / 2)) !important; margin-top: var(--extra-mt-desk) !important; transform: translateX(var(--extra-x-desk)) !important; } }

    /* כותרות */
    #plan-modal-overlay .extra-project-main-title { font-family: 'Heebo', sans-serif !important; font-size: 26px !important; font-weight: 300 !important; color: #3a3530 !important; text-align: center !important; margin: 0 0 15px 0 !important; letter-spacing: 0.5px !important; }

    /* 📌 🌟 סרגל הטאבים הראשי הבסיסי */
    #plan-modal-overlay .extra-project-tabs-bar { 
        position: sticky !important;
        z-index: 250 !important; 
        background: transparent !important; 
        display: flex !important; 
        flex-direction: row !important; 
        justify-content: center !important; 
        align-items: center !important; 
        gap: 35px !important; 
        border-bottom: 1.5px solid rgba(28, 55, 73, 0.12) !important; 
        margin-bottom: 25px !important; 
        padding-top: 10px !important; 
        padding-bottom: 6px !important; 
        box-sizing: border-box !important;
        transition: background 0.2s ease, box-shadow 0.2s ease, padding 0.2s ease, border-color 0.2s ease !important;
    }

    /* 📱 1. התאמת סרגל הטאבים למובייל (עם מנגנון פריצה מחוץ ל-100%) */
    @media (max-width: 767px) {
        #plan-modal-overlay .extra-project-tabs-bar {
            top: var(--tabs-top-mob, 0px) !important;
            width: var(--tabs-width-mob, 100%) !important;
            height: var(--tabs-height-mob, auto) !important;
            margin-left: calc((100% - var(--tabs-width-mob, 100%)) / 2) !important;
            margin-right: calc((100% - var(--tabs-width-mob, 100%)) / 2) !important;
            transform: translateX(var(--tabs-x-mob, 0px)) !important;
        }
        #plan-modal-overlay .extra-project-tabs-bar.is-sticky {
            background: #ffffff !important; 
            box-shadow: var(--tabs-shadow-mob, 0 4px 18px rgba(0, 0, 0, 0.08)) !important;
            padding-top: 12px !important; padding-bottom: 8px !important;
            border-bottom: 1px solid #e2e8f0 !important;
        }
    }

    /* 📑 2. התאמת סרגל הטאבים לטאבלט */
    @media (min-width: 768px) and (max-width: 1023px) {
        #plan-modal-overlay .extra-project-tabs-bar {
            top: var(--tabs-top-tab, 0px) !important;
            width: var(--tabs-width-tab, 100%) !important;
            height: var(--tabs-height-tab, auto) !important;
            margin-left: calc((100% - var(--tabs-width-tab, 100%)) / 2) !important;
            margin-right: calc((100% - var(--tabs-width-tab, 100%)) / 2) !important;
            transform: translateX(var(--tabs-x-tab, 0px)) !important;
        }
        #plan-modal-overlay .extra-project-tabs-bar.is-sticky {
            background: #ffffff !important; 
            box-shadow: var(--tabs-shadow-tab, 0 4px 18px rgba(0, 0, 0, 0.08)) !important;
            padding-top: 14px !important; padding-bottom: 10px !important;
            border-bottom: 1px solid #e2e8f0 !important;
        }
    }

    /* 💻 3. התאמת סרגל הטאבים למחשב נייד */
    @media (min-width: 1024px) and (max-width: 1439px) {
        #plan-modal-overlay .extra-project-tabs-bar {
            top: var(--tabs-top-lap, 0px) !important;
            width: var(--tabs-width-lap, 100%) !important;
            height: var(--tabs-height-lap, auto) !important;
            margin-left: calc((100% - var(--tabs-width-lap, 100%)) / 2) !important;
            margin-right: calc((100% - var(--tabs-width-lap, 100%)) / 2) !important;
            transform: translateX(var(--tabs-x-lap, 0px)) !important;
        }
        #plan-modal-overlay .extra-project-tabs-bar.is-sticky {
            background: #ffffff !important; 
            box-shadow: var(--tabs-shadow-lap, 0 4px 18px rgba(0, 0, 0, 0.08)) !important;
            padding-top: 14px !important; padding-bottom: 10px !important;
            border-bottom: 1px solid #e2e8f0 !important;
        }
    }

    /* 🖥️ 4. התאמת סרגל הטאבים למחשב נייח */
    @media (min-width: 1440px) {
        #plan-modal-overlay .extra-project-tabs-bar {
            top: var(--tabs-top-desk, 0px) !important;
            width: var(--tabs-width-desk, 100%) !important;
            height: var(--tabs-height-desk, auto) !important;
            margin-left: calc((100% - var(--tabs-width-desk, 100%)) / 2) !important;
            margin-right: calc((100% - var(--tabs-width-desk, 100%)) / 2) !important;
            transform: translateX(var(--tabs-x-desk, 0px)) !important;
        }
        #plan-modal-overlay .extra-project-tabs-bar.is-sticky {
            background: #ffffff !important; 
            box-shadow: var(--tabs-shadow-desk, 0 4px 18px rgba(0, 0, 0, 0.08)) !important;
            padding-top: 14px !important; padding-bottom: 10px !important;
            border-bottom: 1px solid #e2e8f0 !important;
        }
    }

    #plan-modal-overlay .extra-tab-btn { background: transparent !important; border: none !important; font-family: 'Heebo', sans-serif !important; font-size: 18px !important; font-weight: 500 !important; color: #1c3749 !important; padding: 8px 12px !important; cursor: pointer !important; position: relative !important; transition: color 0.25s ease !important; }
    #plan-modal-overlay .extra-tab-btn.active { color: #0056b3 !important; font-weight: 700 !important; }
    #plan-modal-overlay .extra-tab-btn.active::after { content: '' !important; position: absolute !important; bottom: -7.5px !important; left: 0 !important; width: 100% !important; height: 3px !important; background-color: #0056b3 !important; border-radius: 4px 4px 0 0 !important; }

    #plan-modal-overlay .extra-project-sub-title { font-family: 'Heebo', sans-serif !important; font-size: 28px !important; font-weight: 700 !important; color: #1c3749 !important; text-align: center !important; margin: 0 0 20px 0 !important; transition: opacity 0.3s ease !important; }

    #plan-modal-overlay .table-section { width: 100% !important; margin-bottom: 50px !important; display: flex; flex-direction: column; }
    #plan-modal-overlay .extra-project-filters-row { display: flex !important; flex-direction: row !important; justify-content: center !important; align-items: center !important; gap: 12px !important; margin-bottom: 25px !important; width: 100% !important; flex-wrap: wrap !important; }

    /* כפתורי הסינון העליונים - עיצוב מקורי ונקי */
    #plan-modal-overlay .extra-filter-btn { display: inline-flex !important; align-items: center !important; justify-content: center !important; gap: 6px !important; background: #ffffff !important; border: 1.5px solid #0056b3 !important; border-radius: 30px !important; padding: 6px 20px !important; font-family: 'Heebo', sans-serif !important; font-size: 15px !important; font-weight: 500 !important; color: #0056b3 !important; cursor: pointer !important; box-shadow: 0 2px 8px rgba(0, 86, 179, 0.06) !important; transition: all 0.2s ease !important; }
    #plan-modal-overlay .extra-filter-btn:hover { background: #0056b3 !important; color: #ffffff !important; }
    #plan-modal-overlay .extra-filter-btn:hover svg { stroke: #ffffff !important; }
    #plan-modal-overlay .btn-arrow { font-size: 9px !important; margin-left: 2px !important; }

    /* חלוניות קופצות (סינון/מיון) */
    #plan-modal-overlay .extra-filter-wrapper { position: relative !important; display: inline-block !important; }
    #plan-modal-overlay .extra-filter-panel { display: none !important; position: absolute !important; top: calc(100% + 12px) !important; right: 0 !important; background: #ffffff !important; border: 1px solid rgba(0, 86, 179, 0.15) !important; border-radius: 16px !important; box-shadow: 0 15px 45px rgba(0, 0, 0, 0.22) !important; padding: 20px !important; z-index: 100 !important; min-width: 280px !important; flex-direction: column !important; gap: 18px !important; text-align: right !important; }
    #plan-modal-overlay .extra-filter-panel.active { display: flex !important; }
    #plan-modal-overlay .custom-list-panel { padding: 10px 0 !important; gap: 0 !important; min-width: 240px !important; }
    #plan-modal-overlay .custom-list-item { padding: 12px 24px !important; color: #1c3749 !important; font-family: 'Heebo', sans-serif !important; font-size: 15px !important; font-weight: 500 !important; cursor: pointer !important; transition: background 0.2s, color 0.2s !important; }
    #plan-modal-overlay .custom-list-item:hover, #plan-modal-overlay .custom-list-item.selected { background: #f1f5f9 !important; color: #0056b3 !important; font-weight: 700 !important; }
    #plan-modal-overlay .filter-select-group { display: flex !important; flex-direction: column !important; gap: 6px !important; }
    #plan-modal-overlay .filter-select-group label { font-family: 'Heebo', sans-serif !important; font-size: 14px !important; color: #1c3749 !important; font-weight: 700 !important; }
    #plan-modal-overlay .filter-select-group select { appearance: none !important; padding: 10px 14px !important; padding-left: 36px !important; border-radius: 10px !important; border: 1px solid #e2e8f0 !important; background-color: #f8fafc !important; background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%230056b3' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E") !important; background-repeat: no-repeat !important; background-position: left 14px center !important; background-size: 16px !important; font-family: 'Heebo', sans-serif !important; font-size: 14px !important; color: #1c3749 !important; outline: none !important; cursor: pointer !important; transition: all 0.2s !important; width: 100% !important; }
    #plan-modal-overlay .filter-select-group select:hover, #plan-modal-overlay .filter-select-group select:focus { border-color: #0056b3 !important; background-color: #ffffff !important; box-shadow: 0 0 0 3px rgba(0, 86, 179, 0.15) !important; }
    #plan-modal-overlay .filter-select-group option { background-color: #ffffff !important; color: #1c3749 !important; font-weight: 500 !important; padding: 10px !important; }
    #plan-modal-overlay .extra-filter-apply-btn { display: flex !important; align-items: center !important; justify-content: center !important; background: #ffffff !important; border: 1.5px solid #0056b3 !important; border-radius: 30px !important; padding: 10px 20px !important; font-family: 'Heebo', sans-serif !important; font-size: 15px !important; font-weight: 700 !important; color: #0056b3 !important; cursor: pointer !important; box-shadow: 0 2px 8px rgba(0, 86, 179, 0.06) !important; transition: all 0.2s ease !important; margin-top: 5px !important; width: 100% !important; }
    #plan-modal-overlay .extra-filter-apply-btn:hover { background: #0056b3 !important; color: #ffffff !important; }

    /* 📊 טבלה מקורית ויציבה */
    #plan-modal-overlay .extra-tab-content { display: none !important; width: 100% !important; }
    #plan-modal-overlay .extra-tab-content.active { display: block !important; }
    #plan-modal-overlay .extra-table-card { background: #ffffff !important; border-radius: 20px !important; padding: 24px !important; box-shadow: 0 12px 35px rgba(0, 0, 0, 0.07), 0 2px 8px rgba(0, 0, 0, 0.03) !important; border: 1px solid rgba(226, 232, 240, 0.8) !important; width: 100% !important; box-sizing: border-box !important; margin: 0 auto !important; }
    
    #plan-modal-overlay .extra-table-scroll-wrapper { width: 100% !important; overflow-x: auto !important; -webkit-overflow-scrolling: touch !important; padding-bottom: 5px !important; }
    
    #plan-modal-overlay .extra-data-table { 
        width: 100% !important; 
        min-width: 820px !important; 
        border-collapse: collapse !important; 
        direction: rtl !important; 
        text-align: center !important; 
        font-family: 'Heebo', sans-serif !important; 
    }
    #plan-modal-overlay .extra-data-table thead tr { background-color: #f1f5f9 !important; }
    
    #plan-modal-overlay .extra-data-table th, 
    #plan-modal-overlay .extra-data-table td { 
        white-space: nowrap !important; 
        word-break: keep-all !important; 
        text-align: center !important; 
        padding: 14px 10px !important; 
    }

    #plan-modal-overlay .extra-data-table th { font-size: 14px !important; font-weight: 600 !important; color: #1c3749 !important; border: none !important; }
    #plan-modal-overlay .extra-data-table th:first-child { border-radius: 0 10px 10px 0 !important; }
    #plan-modal-overlay .extra-data-table th:last-child { border-radius: 10px 0 0 10px !important; }
    #plan-modal-overlay .extra-data-table tbody tr { border-bottom: 1px solid #edf2f7 !important; transition: opacity 0.3s ease; }
    #plan-modal-overlay .extra-data-table tbody tr:last-child { border-bottom: none !important; }
    #plan-modal-overlay .extra-data-table td { font-size: 15px !important; color: #2d3748 !important; }
    #plan-modal-overlay .price-cell { font-weight: 700 !important; color: #1a202c !important; }
    #plan-modal-overlay .extra-table-footer { display: flex !important; flex-direction: row !important; justify-content: space-between !important; align-items: center !important; width: 100% !important; margin-top: 18px !important; padding-top: 12px !important; font-family: 'Heebo', sans-serif !important; font-size: 14px !important; color: #718096 !important; box-sizing: border-box !important; }
    #plan-modal-overlay .extra-placeholder-box { padding: 40px 20px !important; text-align: center !important; font-family: 'Heebo', sans-serif !important; font-size: 16px !important; color: #4a5568 !important; }

    /* כפתור חזור לבן, עגול, נקי */
    #plan-modal-overlay .back-btn-container {
        display: none; 
        width: 100% !important; 
        justify-content: flex-start !important; 
        padding: 0 10px !important; 
        margin-bottom: 0px !important;
        opacity: 0;
        transition: opacity 0.3s ease;
    }
    
    #plan-modal-overlay .clean-back-btn {
        display: flex !important;
        align-items: center !important;
        justify-content: center !important;
        width: 48px !important;
        height: 48px !important;
        background: #ffffff !important;
        border: none !important;
        border-radius: 50% !important;
        box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08), 0 1px 4px rgba(0, 0, 0, 0.02) !important;
        cursor: pointer !important;
        transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1) !important;
        outline: none !important;
    }
    
    #plan-modal-overlay .clean-back-btn:hover { 
        box-shadow: 0 6px 20px rgba(0, 0, 0, 0.12) !important;
        transform: scale(1.05) !important; 
    }
    
    #plan-modal-overlay .clean-back-btn:active { 
        transform: scale(0.9) !important; 
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1) !important;
    }
    
    #plan-modal-overlay .clean-back-btn svg { 
        width: 24px !important; 
        height: 24px !important; 
        stroke: #333333 !important; 
        transition: stroke 0.2s ease !important; 
    }
    
    #plan-modal-overlay .clean-back-btn:hover svg {
        stroke: #875b33 !important; 
    }

    /* ==========================================================================
       📈 🌟 עיצוב מורחב, גבוה וגדול לאזור "מגמות מחירים"
       ========================================================================== */
    #plan-modal-overlay .trends-section {
        width: 100% !important;
        margin-top: 75px !important;
        padding-top: 45px !important;
        border-top: 1px solid #edf2f7 !important;
        display: flex !important;
        flex-direction: column !important;
        align-items: center !important;
    }

    /* 🎛️ 🌟 סרגל סינון חדרים במגמות מחירים */
    #plan-modal-overlay .trends-room-tabs-bar {
        display: flex !important;
        flex-direction: row !important;
        justify-content: center !important;
        align-items: center !important;
        gap: 32px !important;
        margin-bottom: 22px !important;
        direction: rtl !important;
        width: 100% !important;
        overflow-x: auto !important;
        -webkit-overflow-scrolling: touch !important;
        padding-bottom: 4px !important;
    }

    #plan-modal-overlay .trends-room-tab-btn,
    #plan-modal-overlay .rent-room-tab-btn {
        background: transparent !important;
        border: none !important;
        font-family: 'Heebo', sans-serif !important;
        font-size: 18px !important;
        font-weight: 500 !important;
        color: #0f172a !important;
        padding: 6px 4px !important;
        cursor: pointer !important;
        position: relative !important;
        transition: color 0.25s ease !important;
        white-space: nowrap !important;
        flex-shrink: 0 !important;
    }

    #plan-modal-overlay .trends-room-tab-btn:hover,
    #plan-modal-overlay .rent-room-tab-btn:hover {
        color: #0056b3 !important;
    }

    #plan-modal-overlay .trends-room-tab-btn.active,
    #plan-modal-overlay .rent-room-tab-btn.active {
        color: #0056b3 !important;
        font-weight: 700 !important;
    }

    #plan-modal-overlay .trends-room-tab-btn.active::after,
    #plan-modal-overlay .rent-room-tab-btn.active::after {
        content: '' !important;
        position: absolute !important;
        bottom: -3px !important;
        left: 0 !important;
        width: 100% !important;
        height: 3px !important;
        background-color: #0056b3 !important;
        border-radius: 4px 4px 0 0 !important;
        transition: all 0.25s ease !important;
    }

    #plan-modal-overlay .trends-split-wrapper {
        display: flex !important;
        flex-direction: row !important;
        gap: 25px !important;
        width: 100% !important;
        align-items: stretch !important;
        margin-top: 15px !important;
    }

    /* 📋 1. תבניות נתונים מצד ימין */
    #plan-modal-overlay .trends-side-cards {
        flex: 1 !important;
        display: flex !important;
        flex-direction: column !important;
        gap: 16px !important;
        min-width: 290px !important;
    }

    #plan-modal-overlay .trends-info-card {
        background: #ffffff !important;
        border-radius: 20px !important;
        padding: 20px 22px !important;
        box-shadow: 0 8px 25px rgba(0, 0, 0, 0.03) !important;
        border: 1px solid rgba(226, 232, 240, 0.8) !important;
        display: flex !important;
        flex-direction: column !important;
        gap: 10px !important;
        text-align: right !important;
        transition: opacity 0.25s ease !important;
    }

    #plan-modal-overlay .trends-card-header {
        font-family: 'Heebo', sans-serif !important;
        font-size: 18px !important;
        font-weight: 400 !important;
        color: #1c3749 !important;
        margin: 0 !important;
        padding-bottom: 8px !important;
        border-bottom: 1px solid #f1f5f9 !important;
        letter-spacing: 0.2px !important;
    }

    #plan-modal-overlay .trends-data-list {
        display: flex !important;
        flex-direction: column !important;
        gap: 6px !important;
        font-family: 'Heebo', sans-serif !important;
        font-size: 14.5px !important;
    }

    #plan-modal-overlay .trends-data-row {
        display: flex !important;
        justify-content: space-between !important;
        align-items: center !important;
        line-height: 1.4 !important;
    }

    #plan-modal-overlay .trends-data-label {
        font-weight: 300 !important;
        color: #64748b !important;
    }

    #plan-modal-overlay .trends-data-value {
        font-weight: 400 !important;
        color: #0f172a !important;
    }

    #plan-modal-overlay .trends-card-footer {
        font-family: 'Heebo', sans-serif !important;
        font-size: 12px !important;
        font-weight: 300 !important;
        color: #94a3b8 !important;
        margin-top: 2px !important;
    }

    /* 📊 2. הגרף הגדול והגבוה מצד שמאל (בעזרת HTML Y-Axis) */
    #plan-modal-overlay .trends-chart-card {
        flex: 2.2 !important;
        background: #ffffff !important;
        border-radius: 20px !important;
        padding: 24px 20px 18px 20px !important;
        box-shadow: 0 12px 35px rgba(0, 0, 0, 0.04) !important;
        border: 1px solid rgba(226, 232, 240, 0.8) !important;
        display: flex !important;
        flex-direction: column !important;
        justify-content: space-between !important;
        touch-action: pan-y !important;
    }

    #plan-modal-overlay .chart-body-wrapper {
        display: flex !important;
        flex-direction: row !important; /* שמאל: HTML Y-axis, ימין: SVG Chart */
        align-items: stretch !important;
        width: 100% !important;
        height: var(--extra-chart-height, 380px) !important;
        position: relative !important;
    }

    /* 🎯 🌟 עמודת HTML נקייה וחסינה לציר Y */
    #plan-modal-overlay .html-y-axis {
        display: flex !important;
        flex-direction: column !important;
        justify-content: space-between !important;
        margin-top: calc(var(--extra-chart-height, 380px) * 0.062) !important;
        height: calc(var(--extra-chart-height, 380px) * 0.743) !important;
        padding-left: 8px !important;
        padding-right: 2px !important;
        flex-shrink: 0 !important;
        text-align: left !important;
        direction: rtl !important;
    }

    #plan-modal-overlay .y-label {
        font-family: 'Heebo', sans-serif !important;
        font-size: var(--extra-price-size, 13.5px) !important;
        color: #475569 !important;
        white-space: nowrap !important;
        line-height: 1 !important;
        font-weight: 400 !important;
        transition: opacity 0.25s ease !important;
    }

    #plan-modal-overlay .svg-chart-container {
        flex: 1 !important;
        height: 100% !important;
        position: relative !important;
        transition: opacity 0.25s ease, transform 0.25s ease !important;
    }

    /* 🌟 מניעת חיתוך טקסטים בצדי ה-SVG */
    #plan-modal-overlay .svg-chart-container svg {
        width: 100% !important;
        height: 100% !important;
        display: block !important;
        overflow: visible !important;
    }

    #plan-modal-overlay .svg-year-text {
        font-size: var(--extra-year-size, 14px) !important;
        font-family: 'Heebo', sans-serif !important;
    }

    /* 🎯 1:1 נקי ללא דיליי לקו האנכי הדינמי וכרטיס המיקום */
    #plan-modal-overlay #chart-guide-line,
    #plan-modal-overlay #chart-highlight-band,
    #plan-modal-overlay #rent-chart-guide-line,
    #plan-modal-overlay #rent-chart-highlight-band {
        transition: none !important;
        pointer-events: none !important;
    }

    /* נקודות בגרף */
    #plan-modal-overlay .chart-node {
        transition: r 0.15s ease, stroke-width 0.15s ease !important;
        r: var(--extra-node-r, 5.2px) !important;
    }
    
    #plan-modal-overlay .chart-node.highlighted {
        r: var(--extra-node-r-active, 8px) !important;
        stroke-width: 2.5px !important;
    }

    #plan-modal-overlay .chart-hover-col {
        cursor: pointer !important;
        fill: transparent !important;
    }

    /* מקרא בתחתית הגרף */
    #plan-modal-overlay .trends-legend {
        display: flex !important;
        flex-direction: row !important;
        justify-content: center !important;
        align-items: center !important;
        gap: 25px !important;
        margin-top: 15px !important;
        width: 100% !important;
        flex-wrap: wrap !important;
        direction: rtl !important;
    }

    #plan-modal-overlay .legend-item {
        display: inline-flex !important;
        align-items: center !important;
        gap: 8px !important;
        font-family: 'Heebo', sans-serif !important;
        font-size: 13.5px !important;
        font-weight: 300 !important;
        color: #334155 !important;
        direction: rtl !important;
        unicode-bidi: isolate !important;
    }

    #plan-modal-overlay .legend-color-dot {
        width: 10px !important;
        height: 10px !important;
        border-radius: 50% !important;
        flex-shrink: 0 !important;
    }
    #plan-modal-overlay .legend-color-dot.sela { background-color: #0066ff !important; }      
    #plan-modal-overlay .legend-color-dot.city { background-color: #38bdf8 !important; }      
    #plan-modal-overlay .legend-color-dot.national { background-color: #0b2545 !important; }  

    /* ==========================================================================
       🌟 סרגל שכונות חכם 
       ========================================================================== */
    #plan-modal-overlay .neighborhoods-section {
        width: 100% !important; margin-top: 60px !important; padding-top: 40px !important;
        border-top: 1px solid #edf2f7 !important; display: flex !important; flex-direction: column !important; align-items: center !important;
    }

    #plan-modal-overlay .neighborhoods-title {
        font-family: 'Heebo', sans-serif !important; font-size: 26px !important; font-weight: 800 !important;
        color: #0f172a !important; margin-bottom: 25px !important; text-align: center !important;
    }

    #plan-modal-overlay .carousel-wrapper {
        position: relative !important; display: flex !important; align-items: center !important;
        width: 100% !important; max-width: 900px !important; margin: 0 auto !important;
    }

    #plan-modal-overlay .neighborhoods-carousel {
        display: flex !important; flex-direction: row !important; width: 100% !important;
        overflow-x: auto !important; gap: 12px !important; padding: 10px 15px !important;
        scroll-behavior: smooth !important; scrollbar-width: none !important; -ms-overflow-style: none !important;
    }
    #plan-modal-overlay .neighborhoods-carousel::-webkit-scrollbar { display: none !important; }

    #plan-modal-overlay .fade-mask {
        position: absolute !important; top: 0 !important; bottom: 0 !important; width: 45px !important; pointer-events: none !important; z-index: 2 !important;
    }
    #plan-modal-overlay .fade-right { right: 30px !important; background: linear-gradient(to left, #ffffff, transparent) !important; }
    #plan-modal-overlay .fade-left { left: 30px !important; background: linear-gradient(to right, #ffffff, transparent) !important; }

    #plan-modal-overlay .carousel-nav-btn {
        background: #ffffff !important; border: 1px solid #cbd5e1 !important; border-radius: 50% !important;
        width: 34px !important; height: 34px !important; display: flex !important; align-items: center !important; justify-content: center !important;
        cursor: pointer !important; z-index: 3 !important; box-shadow: 0 2px 6px rgba(0,0,0,0.05) !important; transition: all 0.2s ease !important; flex-shrink: 0 !important;
    }
    #plan-modal-overlay .carousel-nav-btn:hover { background: #f8fafc !important; border-color: #0f172a !important; }
    #plan-modal-overlay .carousel-nav-btn svg { stroke: #334155 !important; }
    
    #plan-modal-overlay .carousel-nav-btn.disabled {
        opacity: 0.3 !important; cursor: default !important; pointer-events: none !important; box-shadow: none !important;
    }

    #plan-modal-overlay .hood-pill {
        flex-shrink: 0 !important; background: #ffffff !important; border: 1px solid #cbd5e1 !important;
        border-radius: 30px !important; padding: 10px 22px !important; font-family: 'Heebo', sans-serif !important;
        font-size: 16px !important; font-weight: 500 !important; color: #334155 !important; cursor: pointer !important; transition: all 0.2s ease !important;
    }
    #plan-modal-overlay .hood-pill:hover,
    #plan-modal-overlay .hood-pill.active {
        border-color: #0f172a !important; color: #0f172a !important; font-weight: 700 !important; background: #f8fafc !important;
    }

    #plan-modal-overlay .neighborhoods-total-badge {
        background: #e2e8f0 !important; color: #1e293b !important; font-family: 'Heebo', sans-serif !important;
        font-size: 15px !important; font-weight: 600 !important; padding: 6px 18px !important; border-radius: 20px !important; margin-top: 15px !important;
    }

    /* ==========================================================================
       🌟 מה בסביבה (Coming Soon Cards)
       ========================================================================== */
    #plan-modal-overlay .cs-list-container { display: flex !important; flex-direction: column !important; gap: 20px !important; width: 100% !important; margin-bottom: 40px !important; }
    #plan-modal-overlay .cs-card { background: #ffffff !important; border-radius: 16px !important; padding: 24px !important; box-shadow: 0 8px 25px rgba(0, 0, 0, 0.03) !important; border: 1px solid rgba(226, 232, 240, 0.8) !important; width: 100% !important; box-sizing: border-box !important; text-align: center !important; transition: transform 0.2s ease !important; }
    #plan-modal-overlay .cs-card:hover { transform: translateY(-2px) !important; }
    #plan-modal-overlay .cs-card-title { font-family: 'Heebo', sans-serif !important; font-size: 22px !important; font-weight: 700 !important; color: #1c3749 !important; margin: 0 0 16px 0 !important; padding-bottom: 16px !important; border-bottom: 1.5px solid #edf2f7 !important; }
    #plan-modal-overlay .cs-text { font-family: 'Heebo', sans-serif !important; font-size: 16px !important; font-weight: 600 !important; color: #a0aec0 !important; letter-spacing: 2.5px !important; }

    /* 📱 💻 התאמות מיוחדות לטאבלט ולמובייל */
    @media (min-width: 768px) and (max-width: 1023px) {
        #plan-modal-overlay .trends-split-wrapper { flex-direction: column !important; }
        #plan-modal-overlay .chart-body-wrapper { height: 340px !important; }
        #plan-modal-overlay .trends-side-cards { width: 100% !important; display: flex !important; flex-direction: row !important; gap: 15px !important; }
        #plan-modal-overlay .trends-info-card { flex: 1 !important; }
    }

    @media (max-width: 767px) {
        #plan-modal-overlay .extra-project-filters-row { position: relative !important; gap: 10px !important; }
        #plan-modal-overlay .extra-filter-wrapper { position: static !important; }
        #plan-modal-overlay .extra-filter-panel { top: calc(100% + 5px) !important; right: 0 !important; left: 0 !important; margin: 0 auto !important; transform: none !important; min-width: 280px !important; width: 90vw !important; max-width: 350px !important; z-index: 105 !important; }
        #plan-modal-overlay .extra-table-card { padding: 15px 10px !important; }
        #plan-modal-overlay .extra-project-main-title { font-size: 22px !important; }
        #plan-modal-overlay .neighborhoods-title { font-size: 22px !important; }
        #plan-modal-overlay .extra-project-tabs-bar { gap: 15px !important; padding-top: 10px !important; }
        #plan-modal-overlay .extra-tab-btn { font-size: 15px !important; padding: 6px 4px !important; }
        
        #plan-modal-overlay .trends-chart-card { padding: 16px 8px 12px 8px !important; }
        #plan-modal-overlay .trends-split-wrapper { flex-direction: column !important; }
        #plan-modal-overlay .chart-body-wrapper { height: 300px !important; }
        #plan-modal-overlay .trends-side-cards { min-width: 100% !important; }

        #plan-modal-overlay .trends-room-tabs-bar { gap: 18px !important; justify-content: flex-start !important; padding-left: 10px !important; padding-right: 10px !important; }
        #plan-modal-overlay .trends-room-tab-btn,
        #plan-modal-overlay .rent-room-tab-btn { font-size: 15px !important; }

        #plan-modal-overlay .carousel-nav-btn { display: none !important; }
        #plan-modal-overlay .fade-mask { display: block !important; width: 25px !important; }
        #plan-modal-overlay .fade-right { right: 0 !important; background: linear-gradient(to left, #ffffff 20%, transparent) !important; }
        #plan-modal-overlay .fade-left { left: 0 !important; background: linear-gradient(to right, #ffffff 20%, transparent) !important; }
    }
`;

if (!document.getElementById('extra-project-styles')) {
    extraProjectStyle.id = 'extra-project-styles';
    document.head.appendChild(extraProjectStyle);
}

// ==========================================================================
// 2. 📝 יצירת ה-HTML המלא
// ==========================================================================
export function getExtraProjectHTML() {
    return `
        <div class="extra-project-container">
            <h4 class="extra-project-main-title">היסטוריית עסקאות באזור</h4>
            
            <!-- 🎯 חיישן מיוחד לזיהוי רגע ההידבקות בזמן גלילה -->
            <div id="tabs-bar-sentinel" style="height: 1px; width: 100%; pointer-events: none; opacity: 0; margin-top: -1px;"></div>

            <!-- 📌 סרגל הטאבים המקורי -->
            <div class="extra-project-tabs-bar" id="extra-project-tabs-bar">
                <button class="extra-tab-btn active" data-tab="sales">עסקאות מכירה</button>
                <button class="extra-tab-btn" data-tab="rent">שכירות</button>
                <button class="extra-tab-btn" data-tab="nearby">מה בסביבה</button>
            </div>
            
            <!-- 🟩 טאב מכירה מרכזי -->
            <div class="extra-tab-content active" id="tab-content-sales">
                
                <!-- כפתור חזור לבן ונקי -->
                <div class="back-btn-container" id="back-btn-container">
                    <button class="clean-back-btn" id="btn-back-to-property" aria-label="חזור">
                        <svg viewBox="0 0 24 24"><path d="M4 12h16M13 5l7 7-7 7" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" fill="none"/></svg>
                    </button>
                </div>

                <!-- 🏠 חלק 1: עסקאות בכתובת הנכס -->
                <div class="table-section" id="section-main-sales">
                    <h3 class="extra-project-sub-title" id="extra-project-dynamic-address">עסקאות באזור</h3>
                    
                    <div class="extra-project-filters-row">
                        <div class="extra-filter-wrapper">
                            <button class="extra-filter-btn btn-filter-toggle">
                                <span>סינון</span>
                                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="4" y1="6" x2="20" y2="6"></line><line x1="7" y1="12" x2="17" y2="12"></line><line x1="10" y1="18" x2="14" y2="18"></line></svg>
                            </button>
                            <div class="extra-filter-panel panel-filter">
                                <div class="filter-select-group">
                                    <label>סוג עסקה</label>
                                    <select class="filter-transaction-type">
                                        <option>כל העסקאות</option>
                                        <option>יד ראשונה</option>
                                        <option>יד שנייה</option>
                                    </select>
                                </div>
                                <div class="filter-select-group">
                                    <label>סוג הנכס</label>
                                    <select class="filter-property-type">
                                        <option>כל סוגי הנכסים</option>
                                        <option>דירה</option>
                                        <option>דירת גן</option>
                                        <option>פנטהאוז</option>
                                        <option>בית פרטי</option>
                                        <option>מיני - פנטהאוז</option>
                                        <option>דו - משפחתי</option>
                                        <option>קוטג'</option>
                                        <option>דופלקס</option>
                                        <option>טרילפקס</option>
                                        <option>שונות</option>
                                    </select>
                                </div>
                                <div class="filter-select-group">
                                    <label>תקופה</label>
                                    <select class="filter-period">
                                        <option>כל העסקאות</option>
                                        <option>עסקאות שבוצעו ב-3 חודשים האחרונים</option>
                                        <option>עסקאות שבוצעו ב-חצי שנה האחרונה</option>
                                        <option>עסקאות שבוצעו ב-שנה האחרונה</option>
                                        <option>עסקאות שבוצעו ב-3 שנים האחרונות</option>
                                        <option>עסקאות שבוצעו ב-5 שנים האחרונות</option>
                                    </select>
                                </div>
                                <button class="extra-filter-apply-btn btn-apply-filters">החל סינון</button>
                            </div>
                        </div>
                        
                        <div class="extra-filter-wrapper">
                            <button class="extra-filter-btn btn-sort-toggle">
                                <span class="sort-text">מיון</span>
                                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 5h10M11 9h7M11 13h4M3 17l3 3m0 0l3-3m-3 3V4"></path></svg>
                            </button>
                            <div class="extra-filter-panel custom-list-panel panel-sort">
                                <div class="custom-list-item" data-sort="date-desc">תאריך העסקה - סדר יורד</div>
                                <div class="custom-list-item" data-sort="date-asc">תאריך העסקה - סדר עולה</div>
                                <div class="custom-list-item" data-sort="price-desc">מחיר העסקה - סדר יורד</div>
                                <div class="custom-list-item" data-sort="price-asc">מחיר העסקה - סדר עולה</div>
                                <div class="custom-list-item" data-sort="rooms-desc">מס' החדרים - סדר יורד</div>
                                <div class="custom-list-item" data-sort="rooms-asc">מס' החדרים - סדר עולה</div>
                            </div>
                        </div>

                        <div class="extra-filter-wrapper">
                            <button class="extra-filter-btn btn-rooms-toggle">
                                <span class="btn-arrow">▲</span>
                                <span class="rooms-text">כל החדרים</span>
                            </button>
                            <div class="extra-filter-panel custom-list-panel panel-rooms">
                                <div class="custom-list-item selected" data-rooms="all">כל החדרים</div>
                                <div class="custom-list-item" data-rooms="1">1 חדרים</div>
                                <div class="custom-list-item" data-rooms="2">2 חדרים</div>
                                <div class="custom-list-item" data-rooms="3">3 חדרים</div>
                                <div class="custom-list-item" data-rooms="4">4 חדרים</div>
                                <div class="custom-list-item" data-rooms="5">5 חדרים</div>
                                <div class="custom-list-item" data-rooms="6">6 חדרים</div>
                                <div class="custom-list-item" data-rooms="7+">7+ חדרים</div>
                            </div>
                        </div>
                    </div>

                    <div class="extra-table-card">
                        <div class="extra-table-scroll-wrapper">
                            <table class="extra-data-table">
                                <thead>
                                    <tr>
                                        <th>מספר סידורי</th>
                                        <th>כתובת</th>
                                        <th>שטח במ"ר</th>
                                        <th>תאריך העסקה</th>
                                        <th>מחיר העסקה</th>
                                        <th>גוש/חלקה</th>
                                        <th>סוג נכס</th>
                                        <th>חדרים</th>
                                        <th>קומה</th>
                                    </tr>
                                </thead>
                                <tbody id="main-sales-tbody">
                                    <tr><td>1</td><td><strong class="dynamic-table-address">הנכס</strong></td><td>109</td><td class="nowrap-cell">17/03/2026</td><td class="price-cell">₪ 2,690,000</td><td class="nowrap-cell">3654-12-1218</td><td>דירה בבית קומות</td><td>4</td><td>שש עשרה</td></tr>
                                    <tr><td>2</td><td><strong class="dynamic-table-address">הנכס</strong></td><td>108</td><td class="nowrap-cell">16/02/2026</td><td class="price-cell">₪ 2,518,000</td><td class="nowrap-cell">3654-12-1205</td><td>דירה בבית קומות</td><td>4</td><td>חמש עשרה</td></tr>
                                    <tr><td>3</td><td><strong class="dynamic-table-address">הנכס</strong></td><td>139</td><td class="nowrap-cell">12/08/2025</td><td class="price-cell">₪ 3,470,000</td><td class="nowrap-cell">3654-12-1192</td><td>דירה בבית קומות</td><td>6</td><td>שמונה עשרה</td></tr>
                                    <tr><td>4</td><td><strong class="dynamic-table-address">הנכס</strong></td><td>126</td><td class="nowrap-cell">28/03/2025</td><td class="price-cell">₪ 2,880,000</td><td class="nowrap-cell">3654-12-1169</td><td>דירה בבית קומות</td><td>5</td><td>רביעית</td></tr>
                                    <tr><td>5</td><td><strong class="dynamic-table-address">הנכס</strong></td><td>137</td><td class="nowrap-cell">30/01/2025</td><td class="price-cell">₪ 3,020,000</td><td class="nowrap-cell">3654-12-1225</td><td>דירה בבית קומות</td><td>6</td><td>שביעית</td></tr>
                                    <tr><td>6</td><td><strong class="dynamic-table-address">הנכס</strong></td><td>138</td><td class="nowrap-cell">17/08/2018</td><td class="price-cell">₪ 2,127,000</td><td class="nowrap-cell">3654-12-1450</td><td>דירה בבית קומות</td><td>6</td><td>תשיעית</td></tr>
                                </tbody>
                            </table>
                        </div>
                        <div class="extra-table-footer">
                            <span class="footer-count">נמצאו 6 עסקאות</span>
                            <span class="footer-pagination">1 / 1</span>
                        </div>
                    </div>
                </div>

                <!-- 🏘️ חלק 2: עסקאות נוספות בשכונה (הטבלה השנייה) -->
                <div class="table-section" id="section-neighborhood-sales">
                    <h3 class="extra-project-sub-title" id="neighborhood-table-title" style="margin-top: 40px;">עסקאות נוספות בשכונה</h3>
                    
                    <div class="extra-project-filters-row">
                        <div class="extra-filter-wrapper">
                            <button class="extra-filter-btn btn-filter-toggle">
                                <span>סינון</span>
                                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="4" y1="6" x2="20" y2="6"></line><line x1="7" y1="12" x2="17" y2="12"></line><line x1="10" y1="18" x2="14" y2="18"></line></svg>
                            </button>
                            <div class="extra-filter-panel panel-filter">
                                <div class="filter-select-group">
                                    <label>סוג עסקה</label>
                                    <select class="filter-transaction-type">
                                        <option>כל העסקאות</option>
                                        <option>יד ראשונה</option>
                                        <option>יד שנייה</option>
                                    </select>
                                </div>
                                <div class="filter-select-group">
                                    <label>סוג הנכס</label>
                                    <select class="filter-property-type">
                                        <option>כל סוגי הנכסים</option>
                                        <option>דירה</option>
                                        <option>דירת גן</option>
                                        <option>פנטהאוז</option>
                                        <option>בית פרטי</option>
                                        <option>מיני - פנטהאוז</option>
                                        <option>דו - משפחתי</option>
                                        <option>קוטג'</option>
                                        <option>דופלקס</option>
                                        <option>טרילפקס</option>
                                        <option>שונות</option>
                                    </select>
                                </div>
                                <div class="filter-select-group">
                                    <label>תקופה</label>
                                    <select class="filter-period">
                                        <option>כל העסקאות</option>
                                        <option>עסקאות שבוצעו ב-3 חודשים האחרונים</option>
                                        <option>עסקאות שבוצעו ב-חצי שנה האחרונה</option>
                                        <option>עסקאות שבוצעו ב-שנה האחרונה</option>
                                        <option>עסקאות שבוצעו ב-3 שנים האחרונות</option>
                                        <option>עסקאות שבוצעו ב-5 שנים האחרונות</option>
                                    </select>
                                </div>
                                <button class="extra-filter-apply-btn btn-apply-filters">החל סינון</button>
                            </div>
                        </div>
                        
                        <div class="extra-filter-wrapper">
                            <button class="extra-filter-btn btn-sort-toggle">
                                <span class="sort-text">מיון</span>
                                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 5h10M11 9h7M11 13h4M3 17l3 3m0 0l3-3m-3 3V4"></path></svg>
                            </button>
                            <div class="extra-filter-panel custom-list-panel panel-sort">
                                <div class="custom-list-item" data-sort="date-desc">תאריך העסקה - סדר יורד</div>
                                <div class="custom-list-item" data-sort="date-asc">תאריך העסקה - סדר עולה</div>
                                <div class="custom-list-item" data-sort="price-desc">מחיר העסקה - סדר יורד</div>
                                <div class="custom-list-item" data-sort="price-asc">מחיר העסקה - סדר עולה</div>
                                <div class="custom-list-item" data-sort="rooms-desc">מס' החדרים - סדר יורד</div>
                                <div class="custom-list-item" data-sort="rooms-asc">מס' החדרים - סדר עולה</div>
                            </div>
                        </div>

                        <div class="extra-filter-wrapper">
                            <button class="extra-filter-btn btn-rooms-toggle">
                                <span class="btn-arrow">▲</span>
                                <span class="rooms-text">כל החדרים</span>
                            </button>
                            <div class="extra-filter-panel custom-list-panel panel-rooms">
                                <div class="custom-list-item selected" data-rooms="all">כל החדרים</div>
                                <div class="custom-list-item" data-rooms="1">1 חדרים</div>
                                <div class="custom-list-item" data-rooms="2">2 חדרים</div>
                                <div class="custom-list-item" data-rooms="3">3 חדרים</div>
                                <div class="custom-list-item" data-rooms="4">4 חדרים</div>
                                <div class="custom-list-item" data-rooms="5">5 חדרים</div>
                                <div class="custom-list-item" data-rooms="6">6 חדרים</div>
                                <div class="custom-list-item" data-rooms="7+">7+ חדרים</div>
                            </div>
                        </div>
                    </div>

                    <div class="extra-table-card">
                        <div class="extra-table-scroll-wrapper">
                            <table class="extra-data-table">
                                <thead>
                                    <tr>
                                        <th>מספר סידורי</th>
                                        <th>כתובת</th>
                                        <th>שטח במ"ר</th>
                                        <th>תאריך העסקה</th>
                                        <th>מחיר העסקה</th>
                                        <th>גוש/חלקה</th>
                                        <th>סוג נכס</th>
                                        <th>חדרים</th>
                                        <th>קומה</th>
                                    </tr>
                                </thead>
                                <tbody id="neighborhood-tbody">
                                    <tr><td>1</td><td><strong>הרצל 45</strong></td><td>95</td><td class="nowrap-cell">10/05/2026</td><td class="price-cell">₪ 2,450,000</td><td class="nowrap-cell">3654-10-1011</td><td>דירה בבית קומות</td><td>4</td><td>שלישית</td></tr>
                                    <tr><td>2</td><td><strong>בן גוריון 12</strong></td><td>110</td><td class="nowrap-cell">01/04/2026</td><td class="price-cell">₪ 2,600,000</td><td class="nowrap-cell">3654-10-1012</td><td>דירה בבית קומות</td><td>4</td><td>חמישית</td></tr>
                                    <tr><td>3</td><td><strong>ז'בוטינסקי 8</strong></td><td>85</td><td class="nowrap-cell">15/02/2026</td><td class="price-cell">₪ 2,100,000</td><td class="nowrap-cell">3654-10-1013</td><td>דירה בבית קומות</td><td>3</td><td>ראשונה</td></tr>
                                    <tr><td>4</td><td><strong>ירושלים 22</strong></td><td>130</td><td class="nowrap-cell">10/01/2026</td><td class="price-cell">₪ 3,100,000</td><td class="nowrap-cell">3654-10-1014</td><td>פנטהאוז</td><td>5</td><td>שישית</td></tr>
                                    <tr><td>5</td><td><strong>הכלנית 3</strong></td><td>105</td><td class="nowrap-cell">22/11/2025</td><td class="price-cell">₪ 2,520,000</td><td class="nowrap-cell">3654-10-1015</td><td>דירה בבית קומות</td><td>4</td><td>שנייה</td></tr>
                                    <tr><td>6</td><td><strong>חיים ויצמן 9</strong></td><td>145</td><td class="nowrap-cell">05/09/2025</td><td class="price-cell">₪ 3,450,000</td><td class="nowrap-cell">3654-10-1016</td><td>דירת גן</td><td>5</td><td>קרקע</td></tr>
                                </tbody>
                            </table>
                        </div>
                        <div class="extra-table-footer">
                            <span class="footer-count">נמצאו 6 עסקאות</span>
                            <span class="footer-pagination">1 / 1</span>
                        </div>
                    </div>
                </div>

                <!-- 🚇 חלק 3: סרגל מעבר בין שכונות -->
                <div class="neighborhoods-section">
                    <h3 class="neighborhoods-title" id="dynamic-city-neighborhoods-title">מעבר אל שכונות בעיר</h3>
                    
                    <div class="carousel-wrapper">
                        <div class="fade-mask fade-right"></div>
                        
                        <button class="carousel-nav-btn right-arrow" id="btn-scroll-right" aria-label="ימינה">
                            <svg viewBox="0 0 24 24" width="20" height="20"><path d="M9 18l6-6-6-6" stroke-width="2" stroke-linecap="round" fill="none"/></svg>
                        </button>
                        
                        <div class="neighborhoods-carousel" id="neighborhoods-carousel-track">
                            <button class="hood-pill">מרכז העיר</button>
                            <button class="hood-pill">צפון העיר</button>
                        </div>
                        
                        <button class="carousel-nav-btn left-arrow" id="btn-scroll-left" aria-label="שמאלה">
                            <svg viewBox="0 0 24 24" width="20" height="20"><path d="M15 18l-6-6 6-6" stroke-width="2" stroke-linecap="round" fill="none"/></svg>
                        </button>
                        <div class="fade-mask fade-left"></div>
                    </div>

                    <div class="neighborhoods-total-badge" id="neighborhoods-total-badge">סה"כ -- שכונות</div>
                </div>

                <!-- 📈 🌟 חלק 4: אזור "מגמות מחירים" (מכירה) -->
                <div class="trends-section">
                    <h3 class="extra-project-sub-title">מגמות מחירים באזור</h3>

                    <!-- 🎛️ 🌟 סרגל החדרים הנקי והמעוצב -->
                    <div class="trends-room-tabs-bar" id="trends-room-tabs-bar">
                        <button class="trends-room-tab-btn active" data-room-filter="all">כל החדרים</button>
                        <button class="trends-room-tab-btn" data-room-filter="3">3 חדרים</button>
                        <button class="trends-room-tab-btn" data-room-filter="4">4 חדרים</button>
                        <button class="trends-room-tab-btn" data-room-filter="5">5 חדרים</button>
                    </div>
                    
                    <div class="trends-split-wrapper">
                        
                        <!-- 📋 1. תבניות נתונים (מימין ב-RTL) -->
                        <div class="trends-side-cards">
                            
                            <!-- תבנית 1: מחיר קנייה חציוני שנתי -->
                            <div class="trends-info-card">
                                <h4 class="trends-card-header">מחיר קנייה חציוני שנתי</h4>
                                <div class="trends-data-list">
                                    <div class="trends-data-row"><span class="trends-data-label">משוקלל כלל החדרים:</span><span class="trends-data-value">2.48 מ' ₪</span></div>
                                    <div class="trends-data-row"><span class="trends-data-label">3 חדרים:</span><span class="trends-data-value">2.10 מ' ₪</span></div>
                                    <div class="trends-data-row"><span class="trends-data-label">4 חדרים:</span><span class="trends-data-value">2.45 מ' ₪</span></div>
                                    <div class="trends-data-row"><span class="trends-data-label">5 חדרים:</span><span class="trends-data-value">2.85 מ' ₪</span></div>
                                </div>
                            </div>

                            <!-- תבנית 2: מחיר רבעוני אינטראקטיבי -->
                            <div class="trends-info-card" id="quarterly-card">
                                <h4 class="trends-card-header" id="quarter-title">רבעון רביעי 2023</h4>
                                <div class="trends-data-list">
                                    <div class="trends-data-row"><span class="trends-data-label">מחיר חציוני <span class="dynamic-hood-name-label">סלע</span>:</span><span class="trends-data-value" id="val-hood">2.40 מ' ₪</span></div>
                                    <div class="trends-data-row"><span class="trends-data-label">מחיר חציוני <span class="dynamic-city-name-label">רחובות</span>:</span><span class="trends-data-value" id="val-city">2.27 מ' ₪</span></div>
                                    <div class="trends-data-row"><span class="trends-data-label">מחיר ארצי:</span><span class="trends-data-value" id="val-national">1.77 מ' ₪</span></div>
                                </div>
                                <div class="trends-card-footer">הנתונים מוצגים בהתאם לרבעון הנבחר בגרף</div>
                            </div>

                        </div>

                        <!-- 🎨 2. הגרף (משמאל) עם HTML Y-Axis נקי ורחב מקצה לקצה -->
                        <div class="trends-chart-card">
                            <div class="chart-body-wrapper">
                                <!-- 🎯 ציר Y - HTML עצמאי בעברית טבעית -->
                                <div class="html-y-axis" id="html-y-axis">
                                    <!-- מוזרק דינמית -->
                                </div>

                                <!-- 🎯 הגרף הראשי (SVG) -->
                                <div class="svg-chart-container" id="svg-chart-container">
                                    <!-- ה-SVG יוזרק דינמית -->
                                </div>
                            </div>
                            
                            <!-- מקרא בצבעים מתוקנים ועברית חסינה -->
                            <div class="trends-legend">
                                <div class="legend-item"><span class="legend-color-dot sela"></span><span>מחיר חציוני <span class="dynamic-hood-name-label">סלע</span></span></div>
                                <div class="legend-item"><span class="legend-color-dot city"></span><span>מחיר חציוני <span class="dynamic-city-name-label">רחובות</span></span></div>
                                <div class="legend-item"><span class="legend-color-dot national"></span><span>מחיר חציוני ארצי</span></div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>

            <!-- 🟦 🌟 טאב שכירות - משוכפל ומושלם מקצה לקצה -->
            <div class="extra-tab-content" id="tab-content-rent">
                <h3 class="extra-project-sub-title" id="extra-project-dynamic-rent-address">מגמות מחירי שכירות באזור</h3>
                
                <div class="trends-section" style="margin-top: 20px !important; padding-top: 10px !important; border-top: none !important;">

                    <!-- 🎛️ 🌟 סרגל החדרים לשכירות -->
                    <div class="trends-room-tabs-bar" id="rent-room-tabs-bar">
                        <button class="rent-room-tab-btn active" data-rent-room-filter="all">כל החדרים</button>
                        <button class="rent-room-tab-btn" data-rent-room-filter="3">3 חדרים</button>
                        <button class="rent-room-tab-btn" data-rent-room-filter="4">4 חדרים</button>
                        <button class="rent-room-tab-btn" data-rent-room-filter="5">5 חדרים</button>
                    </div>
                    
                    <div class="trends-split-wrapper">
                        
                        <!-- 📋 1. תבניות נתונים לשכירות -->
                        <div class="trends-side-cards">
                            
                            <!-- תבנית 1: מחיר השכרה חציוני שנתי -->
                            <div class="trends-info-card">
                                <h4 class="trends-card-header">מחיר השכרה חציוני שנתי</h4>
                                <div class="trends-data-list">
                                    <div class="trends-data-row"><span class="trends-data-label">משוקלל כלל החדרים:</span><span class="trends-data-value">6,200 ₪</span></div>
                                    <div class="trends-data-row"><span class="trends-data-label">3 חדרים:</span><span class="trends-data-value">4,500 ₪</span></div>
                                    <div class="trends-data-row"><span class="trends-data-label">4 חדרים:</span><span class="trends-data-value">5,800 ₪</span></div>
                                    <div class="trends-data-row"><span class="trends-data-label">5 חדרים:</span><span class="trends-data-value">7,200 ₪</span></div>
                                </div>
                            </div>

                            <!-- תבנית 2: מחיר שכירות רבעוני אינטראקטיבי -->
                            <div class="trends-info-card" id="rent-quarterly-card">
                                <h4 class="trends-card-header" id="rent-quarter-title">רבעון שלישי 2022</h4>
                                <div class="trends-data-list">
                                    <div class="trends-data-row"><span class="trends-data-label">מחיר חציוני <span class="dynamic-hood-name-label">סלע</span>:</span><span class="trends-data-value" id="rent-val-hood">6,200 ₪</span></div>
                                    <div class="trends-data-row"><span class="trends-data-label">מחיר חציוני <span class="dynamic-city-name-label">רחובות</span>:</span><span class="trends-data-value" id="rent-val-city">4,700 ₪</span></div>
                                    <div class="trends-data-row"><span class="trends-data-label">מחיר ארצי:</span><span class="trends-data-value" id="rent-val-national">4,700 ₪</span></div>
                                </div>
                                <div class="trends-card-footer">הנתונים מוצגים בהתאם לרבעון הנבחר בגרף</div>
                            </div>

                        </div>

                        <!-- 🎨 2. הגרף לשכירות -->
                        <div class="trends-chart-card">
                            <div class="chart-body-wrapper">
                                <!-- 🎯 ציר Y לשכירות -->
                                <div class="html-y-axis" id="rent-html-y-axis">
                                    <!-- מוזרק דינמית -->
                                </div>

                                <!-- 🎯 הגרף הראשי לשכירות (SVG) -->
                                <div class="svg-chart-container" id="rent-svg-chart-container">
                                    <!-- ה-SVG יוזרק דינמית -->
                                </div>
                            </div>
                            
                            <!-- מקרא שכירות -->
                            <div class="trends-legend">
                                <div class="legend-item"><span class="legend-color-dot sela"></span><span>מחיר חציוני <span class="dynamic-hood-name-label">סלע</span></span></div>
                                <div class="legend-item"><span class="legend-color-dot city"></span><span>מחיר חציוני <span class="dynamic-city-name-label">רחובות</span></span></div>
                                <div class="legend-item"><span class="legend-color-dot national"></span><span>מחיר חציוני ארצי</span></div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <!-- 🟧 טאב מה בסביבה -->
            <div class="extra-tab-content" id="tab-content-nearby">
                <h3 class="extra-project-sub-title" id="extra-project-dynamic-nearby-address">מה בסביבה</h3>
                <div class="cs-list-container">
                    <div class="cs-card"><h3 class="cs-card-title">נתונים</h3><div class="cs-text">COMING SOON</div></div>
                    <div class="cs-card"><h3 class="cs-card-title">דמוגרפיה</h3><div class="cs-text">COMING SOON</div></div>
                    <div class="cs-card"><h3 class="cs-card-title">חינוך</h3><div class="cs-text">COMING SOON</div></div>
                    <div class="cs-card"><h3 class="cs-card-title">גינות ופארקים</h3><div class="cs-text">COMING SOON</div></div>
                    <div class="cs-card"><h3 class="cs-card-title">תחבורה ונגישות</h3><div class="cs-text">COMING SOON</div></div>
                    <div class="cs-card"><h3 class="cs-card-title">שירותים, מסחר ובילוי</h3><div class="cs-text">COMING SOON</div></div>
                    <div class="cs-card"><h3 class="cs-card-title">מדדי איכות הסביבה</h3><div class="cs-text">COMING SOON</div></div>
                </div>
            </div>

        </div>
    `;
}

// ==========================================================================
// 3. 🖱️ מנוע אינטראקטיבי מלא
// ==========================================================================
export function initExtraProjectEvents() {
    
    let currentMode = 'property';
    let originalStreet = 'הנכס';
    let originalFullAddress = 'הנכס';
    let currentRoomFilter = 'all'; 
    let currentRentRoomFilter = 'all';
    let currentSelectedQuarterIdx = 15; 
    let currentRentSelectedQuarterIdx = 10; // רבעון שלישי 2022 לשכירות

    // 🎯 שוליים מדויקים לקבלת גרף מושלם המציג "2020" ו-"2025" מלאות וללא חיתוכים
    const startX = 25;
    const spacing = 47.5; // 21 נקודות מ-25px עד 975px!
    
    const basePeriods = [
        "רבעון ראשון 2020", "רבעון שני 2020", "רבעון שלישי 2020", "רבעון רביעי 2020",
        "רבעון ראשון 2021", "רבעון שני 2021", "רבעון שלישי 2021", "רבעון רביעי 2021",
        "רבעון ראשון 2022", "רבעון שני 2022", "רבעון שלישי 2022", "רבעון רביעי 2022",
        "רבעון ראשון 2023", "רבעון שני 2023", "רבעון שלישי 2023", "רבעון רביעי 2023",
        "רבעון ראשון 2024", "רבעון שני 2024", "רבעון שלישי 2024", "רבעון רביעי 2024",
        "רבעון ראשון 2025"
    ];

    // 🎯 1. בסיס נתונים למכירה (מליוני ₪)
    const roomDatasets = {
        'all': {
            yMin: 1.4, yMax: 2.6,
            points: [
                { hood: 1.84, city: 1.72, national: 1.49 }, { hood: 1.85, city: 1.74, national: 1.45 },
                { hood: 1.75, city: 1.65, national: 1.42 }, { hood: 1.96, city: 1.79, national: 1.48 },
                { hood: 2.12, city: 1.83, national: 1.55 }, { hood: 2.19, city: 1.88, national: 1.56 },
                { hood: 2.31, city: 1.95, national: 1.58 }, { hood: 2.07, city: 1.94, national: 1.58 },
                { hood: 2.18, city: 2.06, national: 1.63 }, { hood: 2.38, city: 2.17, national: 1.68 },
                { hood: 2.50, city: 2.18, national: 1.65 }, { hood: 2.35, city: 2.16, national: 1.63 },
                { hood: 2.28, city: 2.11, national: 1.66 }, { hood: 2.33, city: 2.10, national: 1.67 },
                { hood: 2.40, city: 2.18, national: 1.68 }, { hood: 2.40, city: 2.27, national: 1.77 },
                { hood: 2.39, city: 2.40, national: 1.93 }, { hood: 2.41, city: 2.38, national: 2.03 },
                { hood: 2.45, city: 2.39, national: 1.92 }, { hood: 2.48, city: 2.44, national: 1.92 },
                { hood: 2.49, city: 2.34, national: 1.94 }
            ].map((p, i) => ({ ...p, period: basePeriods[i], x: startX + i * spacing }))
        },
        '3': {
            yMin: 1.0, yMax: 2.2,
            points: [
                { hood: 1.45, city: 1.35, national: 1.12 }, { hood: 1.48, city: 1.38, national: 1.10 },
                { hood: 1.32, city: 1.25, national: 1.08 }, { hood: 1.58, city: 1.44, national: 1.15 },
                { hood: 1.68, city: 1.52, national: 1.20 }, { hood: 1.75, city: 1.58, national: 1.22 },
                { hood: 1.82, city: 1.64, national: 1.25 }, { hood: 1.66, city: 1.55, national: 1.23 },
                { hood: 1.74, city: 1.62, national: 1.28 }, { hood: 1.88, city: 1.74, national: 1.35 },
                { hood: 1.98, city: 1.82, national: 1.32 }, { hood: 1.87, city: 1.72, national: 1.30 },
                { hood: 1.82, city: 1.68, national: 1.31 }, { hood: 1.86, city: 1.70, national: 1.34 },
                { hood: 1.92, city: 1.78, national: 1.38 }, { hood: 1.95, city: 1.82, national: 1.45 },
                { hood: 1.94, city: 1.85, national: 1.55 }, { hood: 1.96, city: 1.88, national: 1.62 },
                { hood: 1.98, city: 1.89, national: 1.54 }, { hood: 2.02, city: 1.92, national: 1.55 },
                { hood: 2.05, city: 1.90, national: 1.58 }
            ].map((p, i) => ({ ...p, period: basePeriods[i], x: startX + i * spacing }))
        },
        '4': {
            yMin: 1.4, yMax: 2.6,
            points: [
                { hood: 1.80, city: 1.68, national: 1.46 }, { hood: 1.82, city: 1.70, national: 1.44 },
                { hood: 1.62, city: 1.55, national: 1.41 }, { hood: 1.92, city: 1.75, national: 1.46 },
                { hood: 2.08, city: 1.80, national: 1.52 }, { hood: 2.15, city: 1.85, national: 1.54 },
                { hood: 2.26, city: 1.92, national: 1.56 }, { hood: 2.02, city: 1.88, national: 1.55 },
                { hood: 2.14, city: 2.02, national: 1.60 }, { hood: 2.32, city: 2.12, national: 1.65 },
                { hood: 2.45, city: 2.15, national: 1.62 }, { hood: 2.30, city: 2.10, national: 1.60 },
                { hood: 2.24, city: 2.06, national: 1.62 }, { hood: 2.29, city: 2.08, national: 1.64 },
                { hood: 2.36, city: 2.14, national: 1.66 }, { hood: 2.40, city: 2.22, national: 1.74 },
                { hood: 2.38, city: 2.35, national: 1.88 }, { hood: 2.42, city: 2.32, national: 1.98 },
                { hood: 2.44, city: 2.34, national: 1.88 }, { hood: 2.46, city: 2.38, national: 1.89 },
                { hood: 2.48, city: 2.30, national: 1.91 }
            ].map((p, i) => ({ ...p, period: basePeriods[i], x: startX + i * spacing }))
        },
        '5': {
            yMin: 1.8, yMax: 3.4,
            points: [
                { hood: 2.35, city: 2.18, national: 1.90 }, { hood: 2.38, city: 2.20, national: 1.88 },
                { hood: 2.15, city: 2.05, national: 1.85 }, { hood: 2.50, city: 2.28, national: 1.92 },
                { hood: 2.70, city: 2.35, national: 2.00 }, { hood: 2.82, city: 2.42, national: 2.02 },
                { hood: 2.95, city: 2.50, national: 2.05 }, { hood: 2.68, city: 2.45, national: 2.04 },
                { hood: 2.82, city: 2.60, national: 2.10 }, { hood: 3.05, city: 2.75, national: 2.18 },
                { hood: 3.20, city: 2.80, national: 2.14 }, { hood: 3.00, city: 2.70, national: 2.10 },
                { hood: 2.92, city: 2.65, national: 2.12 }, { hood: 2.98, city: 2.68, national: 2.15 },
                { hood: 3.08, city: 2.78, national: 2.18 }, { hood: 3.12, city: 2.88, national: 2.28 },
                { hood: 3.10, city: 3.02, national: 2.45 }, { hood: 3.15, city: 3.00, national: 2.58 },
                { hood: 3.18, city: 3.02, national: 2.45 }, { hood: 3.22, city: 3.10, national: 2.46 },
                { hood: 3.25, city: 2.98, national: 2.48 }
            ].map((p, i) => ({ ...p, period: basePeriods[i], x: startX + i * spacing }))
        }
    };

    // 🎯 2. 🌟 בסיס נתונים לשכירות (נפרד, רציף וגלוי לחלוטין מ-2020 עד 2025!)
    const rentRoomDatasets = {
        'all': {
            yMin: 3000, yMax: 7000,
            points: [
                { hood: 4800, city: 3900, national: 3600 },
                { hood: 4600, city: 3500, national: 3400 },
                { hood: 4700, city: 3700, national: 3500 },
                { hood: 4900, city: 3700, national: 3550 },
                { hood: 5200, city: 4200, national: 3900 },
                { hood: 5400, city: 4500, national: 4100 },
                { hood: 5700, city: 4800, national: 4300 },
                { hood: 5500, city: 5000, national: 4500 },
                { hood: 5800, city: 5200, national: 4600 },
                { hood: 6000, city: 5000, national: 4700 },
                { hood: 6200, city: 4700, national: 4700 }, // Q3 2022
                { hood: 5900, city: 5000, national: 4800 },
                { hood: 5800, city: 5000, national: 4850 },
                { hood: 6000, city: 4800, national: 4850 },
                { hood: 6100, city: 4500, national: 4850 },
                { hood: 6200, city: 4700, national: 4900 },
                { hood: 6300, city: 4800, national: 5000 },
                { hood: 6400, city: 4900, national: 5050 },
                { hood: 6450, city: 5000, national: 5100 },
                { hood: 6500, city: 5050, national: 5150 },
                { hood: 6550, city: 5100, national: 5200 }
            ].map((p, i) => ({ ...p, period: basePeriods[i], x: startX + i * spacing }))
        },
        '3': {
            yMin: 2500, yMax: 5500,
            points: [
                { hood: 3600, city: 3200, national: 2900 },
                { hood: 3500, city: 3000, national: 2800 },
                { hood: 3600, city: 3100, national: 2850 },
                { hood: 3750, city: 3200, national: 2950 },
                { hood: 3900, city: 3400, national: 3100 },
                { hood: 4100, city: 3600, national: 3300 },
                { hood: 4250, city: 3800, national: 3500 },
                { hood: 4100, city: 3900, national: 3600 },
                { hood: 4300, city: 4000, national: 3700 },
                { hood: 4400, city: 4100, national: 3800 },
                { hood: 4500, city: 3900, national: 3900 },
                { hood: 4350, city: 4000, national: 3950 },
                { hood: 4300, city: 4050, national: 4000 },
                { hood: 4400, city: 4100, national: 4050 },
                { hood: 4450, city: 4150, national: 4100 },
                { hood: 4500, city: 4200, national: 4150 },
                { hood: 4600, city: 4250, national: 4200 },
                { hood: 4650, city: 4300, national: 4250 },
                { hood: 4700, city: 4350, national: 4300 },
                { hood: 4750, city: 4400, national: 4350 },
                { hood: 4800, city: 4450, national: 4400 }
            ].map((p, i) => ({ ...p, period: basePeriods[i], x: startX + i * spacing }))
        },
        '4': {
            yMin: 3500, yMax: 7000,
            points: [
                { hood: 4500, city: 4200, national: 3800 },
                { hood: 4300, city: 4000, national: 3700 },
                { hood: 4400, city: 4100, national: 3750 },
                { hood: 4600, city: 4200, national: 3850 },
                { hood: 4900, city: 4500, national: 4000 },
                { hood: 5100, city: 4700, national: 4200 },
                { hood: 5350, city: 4900, national: 4400 },
                { hood: 5200, city: 5100, national: 4600 },
                { hood: 5450, city: 5300, national: 4700 },
                { hood: 5650, city: 5200, national: 4800 },
                { hood: 5800, city: 4900, national: 4900 },
                { hood: 5600, city: 5200, national: 4950 },
                { hood: 5500, city: 5300, national: 5000 },
                { hood: 5650, city: 5350, national: 5050 },
                { hood: 5750, city: 5400, national: 5100 },
                { hood: 5800, city: 5500, national: 5150 },
                { hood: 5900, city: 5550, national: 5200 },
                { hood: 6000, city: 5600, national: 5250 },
                { hood: 6050, city: 5650, national: 5300 },
                { hood: 6100, city: 5700, national: 5350 },
                { hood: 6150, city: 5750, national: 5400 }
            ].map((p, i) => ({ ...p, period: basePeriods[i], x: startX + i * spacing }))
        },
        '5': {
            yMin: 4500, yMax: 8500,
            points: [
                { hood: 5600, city: 5200, national: 4800 },
                { hood: 5400, city: 5000, national: 4700 },
                { hood: 5500, city: 5100, national: 4750 },
                { hood: 5800, city: 5200, national: 4850 },
                { hood: 6100, city: 5600, national: 5100 },
                { hood: 6400, city: 5900, national: 5300 },
                { hood: 6700, city: 6200, national: 5600 },
                { hood: 6500, city: 6400, national: 5800 },
                { hood: 6800, city: 6600, national: 5900 },
                { hood: 7000, city: 6500, national: 6000 },
                { hood: 7200, city: 6100, national: 6100 },
                { hood: 7000, city: 6400, national: 6200 },
                { hood: 6900, city: 6500, national: 6250 },
                { hood: 7100, city: 6600, national: 6300 },
                { hood: 7200, city: 6700, national: 6350 },
                { hood: 7300, city: 6800, national: 6400 },
                { hood: 7400, city: 6900, national: 6450 },
                { hood: 7500, city: 7000, national: 6500 },
                { hood: 7550, city: 7050, national: 6550 },
                { hood: 7600, city: 7100, national: 6600 },
                { hood: 7650, city: 7150, national: 6650 }
            ].map((p, i) => ({ ...p, period: basePeriods[i], x: startX + i * spacing }))
        }
    };

    // 🎨 1. מנוע רנדור לגרף מכירה
    function renderTrendsSVGChart(roomFilter = 'all') {
        const container = document.getElementById('svg-chart-container');
        const yAxisContainer = document.getElementById('html-y-axis');
        if (!container || !yAxisContainer) return;

        const activeDataset = roomDatasets[roomFilter] || roomDatasets['all'];
        const yMin = activeDataset.yMin;
        const yMax = activeDataset.yMax;
        const trendPoints = activeDataset.points;

        let yLabelsHTML = '';
        const steps = 6;
        const stepVal = (yMax - yMin) / steps;
        for (let i = 0; i <= steps; i++) {
            const val = (yMax - i * stepVal).toFixed(1);
            yLabelsHTML += `<span class="y-label">${val} מ' ₪</span>`;
        }
        yAxisContainer.innerHTML = yLabelsHTML;

        const getY = (val) => {
            const rawY = 290 - ((val - yMin) / (yMax - yMin)) * 260;
            return Math.max(25, Math.min(285, rawY));
        };

        let hoodPathD = "", cityPathD = "", nationalPathD = "";

        trendPoints.forEach((pt, i) => {
            const hy = getY(pt.hood), cy = getY(pt.city), ny = getY(pt.national);

            if (i === 0) {
                hoodPathD += `M ${pt.x} ${hy}`; cityPathD += `M ${pt.x} ${cy}`; nationalPathD += `M ${pt.x} ${ny}`;
            } else {
                const prev = trendPoints[i - 1];
                const prevHy = getY(prev.hood), prevCy = getY(prev.city), prevNy = getY(prev.national);
                const cpx1 = prev.x + (pt.x - prev.x) / 2;
                hoodPathD += ` C ${cpx1} ${prevHy}, ${cpx1} ${hy}, ${pt.x} ${hy}`;
                cityPathD += ` C ${cpx1} ${prevCy}, ${cpx1} ${cy}, ${pt.x} ${cy}`;
                nationalPathD += ` C ${cpx1} ${prevNy}, ${cpx1} ${ny}, ${pt.x} ${ny}`;
            }
        });

        const firstX = trendPoints[0].x, lastX = trendPoints[trendPoints.length - 1].x;
        const hoodAreaD = `${hoodPathD} L ${lastX} 290 L ${firstX} 290 Z`;
        const cityAreaD = `${cityPathD} L ${lastX} 290 L ${firstX} 290 Z`;

        let nodesHTML = "", hoverColsHTML = "";

        trendPoints.forEach((pt, idx) => {
            const hy = getY(pt.hood), cy = getY(pt.city), ny = getY(pt.national);
            const isSelected = idx === currentSelectedQuarterIdx;

            nodesHTML += `
                <circle class="chart-node node-nat node-group-${idx} ${isSelected ? 'highlighted' : ''}" cx="${pt.x}" cy="${ny}" fill="#0b2545" stroke="#ffffff" stroke-width="2" />
                <circle class="chart-node node-city node-group-${idx} ${isSelected ? 'highlighted' : ''}" cx="${pt.x}" cy="${cy}" fill="#38bdf8" stroke="#ffffff" stroke-width="2" />
                <circle class="chart-node node-hood node-group-${idx} ${isSelected ? 'highlighted' : ''}" cx="${pt.x}" cy="${hy}" fill="#0066ff" stroke="#ffffff" stroke-width="2.5" />
            `;

            const colX = Math.max(0, pt.x - 20);
            hoverColsHTML += `<rect class="chart-hover-col" x="${colX}" y="10" width="40" height="280" data-idx="${idx}" />`;
        });

        const defaultX = trendPoints[currentSelectedQuarterIdx].x;

        container.innerHTML = `
            <svg viewBox="0 0 1000 350" preserveAspectRatio="none">
                <defs>
                    <linearGradient id="fadeHood" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#0066ff" stop-opacity="0.22"/><stop offset="100%" stop-color="#ffffff" stop-opacity="0.0"/></linearGradient>
                    <linearGradient id="fadeCity" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#38bdf8" stop-opacity="0.15"/><stop offset="100%" stop-color="#ffffff" stop-opacity="0.0"/></linearGradient>
                </defs>
                <line x1="0" y1="30" x2="1000" y2="30" stroke="#f1f5f9" stroke-width="1"/>
                <line x1="0" y1="73" x2="1000" y2="73" stroke="#f1f5f9" stroke-width="1"/>
                <line x1="0" y1="116" x2="1000" y2="116" stroke="#f1f5f9" stroke-width="1"/>
                <line x1="0" y1="159" x2="1000" y2="159" stroke="#f1f5f9" stroke-width="1"/>
                <line x1="0" y1="202" x2="1000" y2="202" stroke="#f1f5f9" stroke-width="1"/>
                <line x1="0" y1="245" x2="1000" y2="245" stroke="#f1f5f9" stroke-width="1"/>
                <line x1="0" y1="290" x2="1000" y2="290" stroke="#cbd5e1" stroke-width="1.5"/>
                <line x1="0" y1="20" x2="0" y2="290" stroke="#cbd5e1" stroke-width="1.5"/>

                <!-- 🎯 ציר X - שנות הרבעונים מיושרות מושלם במרכז -->
                <text class="svg-year-text" x="${startX + 0 * spacing}" y="325" font-family="Heebo" font-weight="400" fill="#64748b" text-anchor="middle">2020</text>
                <text class="svg-year-text" x="${startX + 4 * spacing}" y="325" font-family="Heebo" font-weight="400" fill="#64748b" text-anchor="middle">2021</text>
                <text class="svg-year-text" x="${startX + 8 * spacing}" y="325" font-family="Heebo" font-weight="400" fill="#64748b" text-anchor="middle">2022</text>
                <text class="svg-year-text" x="${startX + 12 * spacing}" y="325" font-family="Heebo" font-weight="400" fill="#64748b" text-anchor="middle">2023</text>
                <text class="svg-year-text" x="${startX + 16 * spacing}" y="325" font-family="Heebo" font-weight="400" fill="#64748b" text-anchor="middle">2024</text>
                <text class="svg-year-text" x="${startX + 20 * spacing}" y="325" font-family="Heebo" font-weight="400" fill="#64748b" text-anchor="middle">2025</text>

                <path d="${hoodAreaD}" fill="url(#fadeHood)" />
                <path d="${cityAreaD}" fill="url(#fadeCity)" />
                <rect id="chart-highlight-band" x="${defaultX - 20}" y="20" width="40" height="270" fill="rgba(0, 102, 255, 0.06)" rx="6" />
                <line id="chart-guide-line" x1="${defaultX}" y1="20" x2="${defaultX}" y2="290" stroke="#0066ff" stroke-width="1.5" stroke-dasharray="3 3" opacity="0.6" />

                <path d="${cityPathD}" fill="none" stroke="#38bdf8" stroke-width="2.2" />
                <path d="${nationalPathD}" fill="none" stroke="#0b2545" stroke-width="2" stroke-dasharray="4 3" />
                <path d="${hoodPathD}" fill="none" stroke="#0066ff" stroke-width="3" />

                ${nodesHTML}
                ${hoverColsHTML}
            </svg>
        `;

        function updateQuarterData(idx) {
            currentSelectedQuarterIdx = idx;
            const data = trendPoints[idx];

            const guideLine = document.getElementById('chart-guide-line');
            const highlightBand = document.getElementById('chart-highlight-band');

            if (guideLine) { guideLine.setAttribute('x1', data.x); guideLine.setAttribute('x2', data.x); }
            if (highlightBand) { highlightBand.setAttribute('x', data.x - 20); }

            container.querySelectorAll('.chart-node').forEach(n => n.classList.remove('highlighted'));
            container.querySelectorAll(`.node-group-${idx}`).forEach(n => n.classList.add('highlighted'));

            const qTitle = document.getElementById('quarter-title');
            const vHood = document.getElementById('val-hood');
            const vCity = document.getElementById('val-city');
            const vNat = document.getElementById('val-national');

            if (qTitle) qTitle.innerText = data.period;
            if (vHood) vHood.innerText = `${data.hood.toFixed(2)} מ' ₪`;
            if (vCity) vCity.innerText = `${data.city.toFixed(2)} מ' ₪`;
            if (vNat) vNat.innerText = `${data.national.toFixed(2)} מ' ₪`;
        }

        updateQuarterData(currentSelectedQuarterIdx);

        container.querySelectorAll('.chart-hover-col').forEach(col => {
            col.onmouseenter = (e) => updateQuarterData(parseInt(e.target.getAttribute('data-idx'), 10));
            col.onclick = (e) => updateQuarterData(parseInt(e.target.getAttribute('data-idx'), 10));
        });

        function handleTouchScrub(e) {
            if (!e.touches || !e.touches[0]) return;
            const rect = container.getBoundingClientRect();
            const touchX = e.touches[0].clientX - rect.left;
            const svgX = (touchX / rect.width) * 1000; 

            let closestIdx = 0, minDiff = Infinity;
            trendPoints.forEach((pt, idx) => {
                const diff = Math.abs(pt.x - svgX);
                if (diff < minDiff) { minDiff = diff; closestIdx = idx; }
            });
            updateQuarterData(closestIdx);
        }

        container.addEventListener('touchstart', handleTouchScrub, { passive: true });
        container.addEventListener('touchmove', handleTouchScrub, { passive: true });
    }

    // 🎨 2. 🌟 מנוע רנדור לגרף שכירות - עם קווים גלויים 100% וציר Y בקפיצות אחידות של 500 ₪
    function renderRentTrendsSVGChart(roomFilter = 'all') {
        const container = document.getElementById('rent-svg-chart-container');
        const yAxisContainer = document.getElementById('rent-html-y-axis');
        if (!container || !yAxisContainer) return;

        const activeDataset = rentRoomDatasets[roomFilter] || rentRoomDatasets['all'];
        const yMin = activeDataset.yMin;
        const yMax = activeDataset.yMax;
        const trendPoints = activeDataset.points;

        // 🎯 חישוב ציר Y עגול בלופים קבועים של 500 ₪
        let yLabelsHTML = '';
        const stepVal = 500;
        const numSteps = Math.round((yMax - yMin) / stepVal);

        for (let i = 0; i <= numSteps; i++) {
            const val = yMax - i * stepVal;
            yLabelsHTML += `<span class="y-label">₪ ${val.toLocaleString()}</span>`;
        }
        yAxisContainer.innerHTML = yLabelsHTML;

        const getY = (val) => {
            const rawY = 290 - ((val - yMin) / (yMax - yMin)) * 260;
            return Math.max(25, Math.min(285, rawY));
        };

        let hoodPathD = "", cityPathD = "", nationalPathD = "";

        trendPoints.forEach((pt, i) => {
            const hy = getY(pt.hood), cy = getY(pt.city), ny = getY(pt.national);

            if (i === 0) {
                hoodPathD += `M ${pt.x} ${hy}`; cityPathD += `M ${pt.x} ${cy}`; nationalPathD += `M ${pt.x} ${ny}`;
            } else {
                const prev = trendPoints[i - 1];
                const prevHy = getY(prev.hood), prevCy = getY(prev.city), prevNy = getY(prev.national);
                const cpx1 = prev.x + (pt.x - prev.x) / 2;
                hoodPathD += ` C ${cpx1} ${prevHy}, ${cpx1} ${hy}, ${pt.x} ${hy}`;
                cityPathD += ` C ${cpx1} ${prevCy}, ${cpx1} ${cy}, ${pt.x} ${cy}`;
                nationalPathD += ` C ${cpx1} ${prevNy}, ${cpx1} ${ny}, ${pt.x} ${ny}`;
            }
        });

        const firstX = trendPoints[0].x, lastX = trendPoints[trendPoints.length - 1].x;
        const hoodAreaD = `${hoodPathD} L ${lastX} 290 L ${firstX} 290 Z`;
        const cityAreaD = `${cityPathD} L ${lastX} 290 L ${firstX} 290 Z`;

        let nodesHTML = "", hoverColsHTML = "";

        trendPoints.forEach((pt, idx) => {
            const hy = getY(pt.hood), cy = getY(pt.city), ny = getY(pt.national);
            const isSelected = idx === currentRentSelectedQuarterIdx;

            nodesHTML += `
                <circle class="chart-node node-nat rent-node-group-${idx} ${isSelected ? 'highlighted' : ''}" cx="${pt.x}" cy="${ny}" fill="#0b2545" stroke="#ffffff" stroke-width="2" />
                <circle class="chart-node node-city rent-node-group-${idx} ${isSelected ? 'highlighted' : ''}" cx="${pt.x}" cy="${cy}" fill="#38bdf8" stroke="#ffffff" stroke-width="2" />
                <circle class="chart-node node-hood rent-node-group-${idx} ${isSelected ? 'highlighted' : ''}" cx="${pt.x}" cy="${hy}" fill="#0066ff" stroke="#ffffff" stroke-width="2.5" />
            `;
            
            const colX = Math.max(0, pt.x - 20);
            hoverColsHTML += `<rect class="chart-hover-col" x="${colX}" y="10" width="40" height="280" data-idx="${idx}" />`;
        });

        const defaultX = trendPoints[currentRentSelectedQuarterIdx].x;

        // 🎯 יצירת קווי רוחב אופקיים דינמיים לפי 500 ₪
        let rentGridLinesHTML = '';
        for (let i = 0; i < numSteps; i++) {
            const gridY = 30 + i * (260 / numSteps);
            rentGridLinesHTML += `<line x1="0" y1="${gridY}" x2="1000" y2="${gridY}" stroke="#f1f5f9" stroke-width="1"/>`;
        }

        container.innerHTML = `
            <svg viewBox="0 0 1000 350" preserveAspectRatio="none">
                <defs>
                    <linearGradient id="rentFadeHood" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#0066ff" stop-opacity="0.22"/><stop offset="100%" stop-color="#ffffff" stop-opacity="0.0"/></linearGradient>
                    <linearGradient id="rentFadeCity" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#38bdf8" stop-opacity="0.15"/><stop offset="100%" stop-color="#ffffff" stop-opacity="0.0"/></linearGradient>
                </defs>

                ${rentGridLinesHTML}
                <line x1="0" y1="290" x2="1000" y2="290" stroke="#cbd5e1" stroke-width="1.5"/>
                <line x1="0" y1="20" x2="0" y2="290" stroke="#cbd5e1" stroke-width="1.5"/>

                <!-- 🎯 ציר X - שנות הרבעונים מיושרות מושלם במרכז -->
                <text class="svg-year-text" x="${startX + 0 * spacing}" y="325" font-family="Heebo" font-weight="400" fill="#64748b" text-anchor="middle">2020</text>
                <text class="svg-year-text" x="${startX + 4 * spacing}" y="325" font-family="Heebo" font-weight="400" fill="#64748b" text-anchor="middle">2021</text>
                <text class="svg-year-text" x="${startX + 8 * spacing}" y="325" font-family="Heebo" font-weight="400" fill="#64748b" text-anchor="middle">2022</text>
                <text class="svg-year-text" x="${startX + 12 * spacing}" y="325" font-family="Heebo" font-weight="400" fill="#64748b" text-anchor="middle">2023</text>
                <text class="svg-year-text" x="${startX + 16 * spacing}" y="325" font-family="Heebo" font-weight="400" fill="#64748b" text-anchor="middle">2024</text>
                <text class="svg-year-text" x="${startX + 20 * spacing}" y="325" font-family="Heebo" font-weight="400" fill="#64748b" text-anchor="middle">2025</text>

                <path d="${hoodAreaD}" fill="url(#rentFadeHood)" />
                <path d="${cityAreaD}" fill="url(#rentFadeCity)" />
                <rect id="rent-chart-highlight-band" x="${defaultX - 20}" y="20" width="40" height="270" fill="rgba(0, 102, 255, 0.06)" rx="6" />
                <line id="rent-chart-guide-line" x1="${defaultX}" y1="20" x2="${defaultX}" y2="290" stroke="#0066ff" stroke-width="1.5" stroke-dasharray="3 3" opacity="0.6" />

                <!-- הקו המקווקו הכהה מצויר מעל הקו התכלת כדי למנוע דריסה כשהם קרובים -->
                <path d="${cityPathD}" fill="none" stroke="#38bdf8" stroke-width="2.2" />
                <path d="${nationalPathD}" fill="none" stroke="#0b2545" stroke-width="2" stroke-dasharray="4 3" />
                <path d="${hoodPathD}" fill="none" stroke="#0066ff" stroke-width="3" />

                ${nodesHTML}
                ${hoverColsHTML}
            </svg>
        `;

        function updateRentQuarterData(idx) {
            currentRentSelectedQuarterIdx = idx;
            const data = trendPoints[idx];

            const guideLine = document.getElementById('rent-chart-guide-line');
            const highlightBand = document.getElementById('rent-chart-highlight-band');

            if (guideLine) { guideLine.setAttribute('x1', data.x); guideLine.setAttribute('x2', data.x); }
            if (highlightBand) { highlightBand.setAttribute('x', data.x - 20); }

            container.querySelectorAll('.chart-node').forEach(n => n.classList.remove('highlighted'));
            container.querySelectorAll(`.rent-node-group-${idx}`).forEach(n => n.classList.add('highlighted'));

            const qTitle = document.getElementById('rent-quarter-title');
            const vHood = document.getElementById('rent-val-hood');
            const vCity = document.getElementById('rent-val-city');
            const vNat = document.getElementById('rent-val-national');

            if (qTitle) qTitle.innerText = data.period;
            if (vHood) vHood.innerText = `₪ ${data.hood.toLocaleString()}`;
            if (vCity) vCity.innerText = `₪ ${data.city.toLocaleString()}`;
            if (vNat) vNat.innerText = `₪ ${data.national.toLocaleString()}`;
        }

        updateRentQuarterData(currentRentSelectedQuarterIdx);

        container.querySelectorAll('.chart-hover-col').forEach(col => {
            col.onmouseenter = (e) => updateRentQuarterData(parseInt(e.target.getAttribute('data-idx'), 10));
            col.onclick = (e) => updateRentQuarterData(parseInt(e.target.getAttribute('data-idx'), 10));
        });

        function handleTouchScrub(e) {
            if (!e.touches || !e.touches[0]) return;
            const rect = container.getBoundingClientRect();
            const touchX = e.touches[0].clientX - rect.left;
            const svgX = (touchX / rect.width) * 1000; 

            let closestIdx = 0, minDiff = Infinity;
            trendPoints.forEach((pt, idx) => {
                const diff = Math.abs(pt.x - svgX);
                if (diff < minDiff) { minDiff = diff; closestIdx = idx; }
            });
            updateRentQuarterData(closestIdx);
        }

        container.addEventListener('touchstart', handleTouchScrub, { passive: true });
        container.addEventListener('touchmove', handleTouchScrub, { passive: true });
    }

    // רנדור ראשוני ל-2 הגרפים
    renderTrendsSVGChart('all');
    renderRentTrendsSVGChart('all');

    // 🎯 🌟 מנוע IntersectionObserver מדויק להפעלת STICKY HEADER רק כשגוללים מעבר לסרגל!
    const tabsBar = document.getElementById('extra-project-tabs-bar');
    const sentinel = document.getElementById('tabs-bar-sentinel');

    if (tabsBar && sentinel) {
        const rootContainer = document.getElementById('plan-modal-overlay') || null;
        const observer = new IntersectionObserver(([entry]) => {
            // ברגע שהחיישן (sentinel) יוצא מגבולות החלק העליון - הסרגל נדבק ומקבל רקע לבן אטום 100% וצל!
            if (!entry.isIntersecting) {
                tabsBar.classList.add('is-sticky');
            } else {
                tabsBar.classList.remove('is-sticky');
            }
        }, {
            root: rootContainer,
            threshold: [0]
        });

        observer.observe(sentinel);
    }

    const citiesDB = {
        "רחובות": ["גינות סביון", "אבן גבירול", "רחובות ההולנדית", "סלע", "קרית משה", "וייסגל", "רחובות הצעירה", "רחובות החדשה", "שעריים", "מרכז העיר"],
        "רמת גן": ["שכונת הלל", "תל בנימין", "שכונת בורוכוב", "נחלת גנים", "קריית קריניצי", "רמת יצחק", "רמת עמידר", "מרום נווה", "רמת חן", "הרואה"],
        "באר שבע": ["שכונה א'", "שכונה ב'", "שכונה ג'", "שכונה ד'", "שכונה ה'", "שכונה ו'", "שכונה ט'", "שכונה יא'", "רמות", "נווה זאב"],
        "נתניה": ["עיר ימים", "קרית השרון", "פולג", "אגמים", "מרכז העיר", "דורה", "נווה איתמר", "קרית נורדאו", "עין התכלת"],
        "חיפה": ["מרכז הכרמל", "הדר", "נווה שאנן", "רוממה", "אחוזה", "בת גלים", "קרית חיים", "קרית אליעזר", "ואדי סאליב"],
        "ירושלים": ["רחביה", "טלביה", "המושבה הגרמנית", "קטמון", "בקעה", "ארנונה", "בית הכרם", "פסגת זאב", "גילה", "רמות"],
        "תל אביב": ["צפון ישן", "הצפון החדש", "לב העיר", "פלורנטין", "נווה צדק", "יפו", "רמת אביב", "הדר יוסף", "צהלה", "בבלי"]
    };

    window.setDynamicCityData = function(cityName) {
        const title = document.getElementById('dynamic-city-neighborhoods-title');
        const carousel = document.getElementById('neighborhoods-carousel-track');
        const badge = document.getElementById('neighborhoods-total-badge');
        
        if(!cityName) return;

        let cName = cityName.trim();
        if(title) title.innerText = `מעבר אל שכונות ב${cName}`;

        let hoods = citiesDB[cName] || ["מרכז העיר", "צפון העיר", "דרום העיר", "מערב העיר", "מזרח העיר"];
        if(carousel) carousel.innerHTML = hoods.map(h => `<button class="hood-pill">${h}</button>`).join('');
        if(badge) badge.innerText = `סה"כ ${hoods.length} שכונות`;
        
        document.querySelectorAll('.dynamic-city-name-label').forEach(el => el.innerText = cName);

        setTimeout(checkCarouselBounds, 50);
    };

    setTimeout(() => {
        const pageAddr = document.querySelector('.prop-address');
        if (pageAddr) {
            let fullText = pageAddr.textContent.trim();
            let parts = fullText.split(',');
            let cityOnly = parts.length > 1 ? parts[1].trim() : '';
            if (cityOnly) window.setDynamicCityData(cityOnly);
        }
    }, 200);

    function getPropertyRows(street) {
        return `
            <tr><td>1</td><td><strong class="dynamic-table-address">${street}</strong></td><td>109</td><td class="nowrap-cell">17/03/2026</td><td class="price-cell">₪ 2,690,000</td><td class="nowrap-cell">3654-12-1218</td><td>דירה בבית קומות</td><td>4</td><td>שש עשרה</td></tr>
            <tr><td>2</td><td><strong class="dynamic-table-address">${street}</strong></td><td>108</td><td class="nowrap-cell">16/02/2026</td><td class="price-cell">₪ 2,518,000</td><td class="nowrap-cell">3654-12-1205</td><td>דירה בבית קומות</td><td>4</td><td>חמש עשרה</td></tr>
            <tr><td>3</td><td><strong class="dynamic-table-address">${street}</strong></td><td>139</td><td class="nowrap-cell">12/08/2025</td><td class="price-cell">₪ 3,470,000</td><td class="nowrap-cell">3654-12-1192</td><td>דירה בבית קומות</td><td>6</td><td>שמונה עשרה</td></tr>
            <tr><td>4</td><td><strong class="dynamic-table-address">${street}</strong></td><td>126</td><td class="nowrap-cell">28/03/2025</td><td class="price-cell">₪ 2,880,000</td><td class="nowrap-cell">3654-12-1169</td><td>דירה בבית קומות</td><td>5</td><td>רביעית</td></tr>
            <tr><td>5</td><td><strong class="dynamic-table-address">${street}</strong></td><td>137</td><td class="nowrap-cell">30/01/2025</td><td class="price-cell">₪ 3,020,000</td><td class="nowrap-cell">3654-12-1225</td><td>דירה בבית קומות</td><td>6</td><td>שביעית</td></tr>
            <tr><td>6</td><td><strong class="dynamic-table-address">${street}</strong></td><td>138</td><td class="nowrap-cell">17/08/2018</td><td class="price-cell">₪ 2,127,000</td><td class="nowrap-cell">3654-12-1450</td><td>דירה בבית קומות</td><td>6</td><td>תשיעית</td></tr>
        `;
    }

    function getNeighborhoodRows(hoodName) {
        return `
            <tr><td>1</td><td><strong>${hoodName} - הרצל 45</strong></td><td>100</td><td class="nowrap-cell">12/05/2026</td><td class="price-cell">₪ 2,450,000</td><td class="nowrap-cell">3654-10-1011</td><td>דירה בבית קומות</td><td>4</td><td>שלישית</td></tr>
            <tr><td>2</td><td><strong>${hoodName} - בן גוריון 12</strong></td><td>110</td><td class="nowrap-cell">01/04/2026</td><td class="price-cell">₪ 2,600,000</td><td class="nowrap-cell">3654-10-1012</td><td>דירה בבית קומות</td><td>4</td><td>חמישית</td></tr>
            <tr><td>3</td><td><strong>${hoodName} - ז'בוטינסקי 8</strong></td><td>85</td><td class="nowrap-cell">15/02/2026</td><td class="price-cell">₪ 2,100,000</td><td class="nowrap-cell">3654-10-1013</td><td>דירה בבית קומות</td><td>3</td><td>ראשונה</td></tr>
            <tr><td>4</td><td><strong>${hoodName} - ירושלים 22</strong></td><td>130</td><td class="nowrap-cell">10/01/2026</td><td class="price-cell">₪ 3,100,000</td><td class="nowrap-cell">3654-10-1014</td><td>פנטהאוז</td><td>5</td><td>שישית</td></tr>
            <tr><td>5</td><td><strong>${hoodName} - הכלנית 3</strong></td><td>105</td><td class="nowrap-cell">22/11/2025</td><td class="price-cell">₪ 2,520,000</td><td class="nowrap-cell">3654-10-1015</td><td>דירה בבית קומות</td><td>4</td><td>שנייה</td></tr>
            <tr><td>6</td><td><strong>${hoodName} - חיים ויצמן 9</strong></td><td>145</td><td class="nowrap-cell">05/09/2025</td><td class="price-cell">₪ 3,450,000</td><td class="nowrap-cell">3654-10-1016</td><td>דירת גן</td><td>5</td><td>קרקע</td></tr>
        `;
    }

    function applyFiltersToSection(section) {
        const propertyTypeVal = section.querySelector('.filter-property-type').value;
        const periodVal = section.querySelector('.filter-period').value;
        const sortItem = section.querySelector('.panel-sort .selected');
        const currentSort = sortItem ? sortItem.getAttribute('data-sort') : null;
        const roomItem = section.querySelector('.panel-rooms .selected');
        const currentRooms = roomItem ? roomItem.getAttribute('data-rooms') : 'all';

        const tbody = section.querySelector('.extra-data-table tbody');
        if (!tbody) return;
        
        const rows = Array.from(tbody.querySelectorAll('tr'));
        let visibleCount = 0;
        const today = new Date('2026-07-30'); 

        if (currentSort) {
            rows.sort((a, b) => {
                const parseDate = (d) => { const p = d.split('/'); return new Date(p[2], p[1]-1, p[0]).getTime(); };
                const parsePrice = (p) => parseInt(p.replace(/[^\d]/g, ''), 10) || 0;
                const parseRooms = (r) => parseInt(r, 10) || 0;
                
                if (currentSort === 'date-desc') return parseDate(b.cells[3].innerText) - parseDate(a.cells[3].innerText);
                if (currentSort === 'date-asc') return parseDate(a.cells[3].innerText) - parseDate(b.cells[3].innerText);
                if (currentSort === 'price-desc') return parsePrice(b.cells[4].innerText) - parsePrice(a.cells[4].innerText);
                if (currentSort === 'price-asc') return parsePrice(a.cells[4].innerText) - parsePrice(b.cells[4].innerText);
                if (currentSort === 'rooms-desc') return parseRooms(b.cells[7].innerText) - parseRooms(a.cells[7].innerText);
                if (currentSort === 'rooms-asc') return parseRooms(a.cells[7].innerText) - parseRooms(b.cells[7].innerText);
                return 0;
            });
            rows.forEach(row => tbody.appendChild(row));
        }

        rows.forEach(row => {
            let showRow = true;
            const rowDateStr = row.cells[3].innerText; 
            const rowPropType = row.cells[6].innerText; 
            const rowRoomsNum = parseInt(row.cells[7].innerText, 10) || 0;

            if (propertyTypeVal !== 'כל סוגי הנכסים' && propertyTypeVal !== 'שונות') {
                if (!rowPropType.includes(propertyTypeVal)) showRow = false;
            }

            if (periodVal !== 'כל העסקאות') {
                const dateParts = rowDateStr.split('/');
                if (dateParts.length === 3) {
                    const rowDate = new Date(dateParts[2], dateParts[1]-1, dateParts[0]);
                    const diffDays = Math.ceil(Math.abs(today - rowDate) / (1000 * 60 * 60 * 24));
                    if (periodVal.includes('3 חודשים') && diffDays > 90) showRow = false;
                    if (periodVal.includes('חצי שנה') && diffDays > 180) showRow = false;
                    if (periodVal.includes('שנה') && diffDays > 365 && !periodVal.includes('שנים')) showRow = false;
                    if (periodVal.includes('3 שנים') && diffDays > (365 * 3)) showRow = false;
                    if (periodVal.includes('5 שנים') && diffDays > (365 * 5)) showRow = false;
                }
            }

            if (currentRooms !== 'all') {
                if (currentRooms === '7+') {
                    if (rowRoomsNum < 7) showRow = false;
                } else {
                    if (rowRoomsNum !== parseInt(currentRooms, 10)) showRow = false;
                }
            }

            if (showRow) { row.style.display = ''; visibleCount++; } else { row.style.display = 'none'; }
        });

        const footerCount = section.querySelector('.footer-count');
        if (footerCount) footerCount.innerText = `נמצאו ${visibleCount} עסקאות`;
    }

    const btnRight = document.getElementById('btn-scroll-right');
    const btnLeft = document.getElementById('btn-scroll-left');
    const track = document.getElementById('neighborhoods-carousel-track');
    
    function checkCarouselBounds() {
        if (!track || !btnRight || !btnLeft) return;
        
        if (track.scrollWidth <= track.clientWidth) {
            btnRight.classList.add('disabled');
            btnLeft.classList.add('disabled');
            return;
        }

        const scrollLeftAbs = Math.abs(Math.round(track.scrollLeft));
        const maxScroll = track.scrollWidth - track.clientWidth;
        
        if (scrollLeftAbs <= 5) {
            btnRight.classList.add('disabled');
        } else {
            btnRight.classList.remove('disabled');
        }
        
        if (scrollLeftAbs >= maxScroll - 5) {
            btnLeft.classList.add('disabled');
        } else {
            btnLeft.classList.remove('disabled');
        }
    }

    if (track) {
        track.addEventListener('scroll', checkCarouselBounds);
        setTimeout(checkCarouselBounds, 100);
    }
    
    if (btnRight && track) {
        btnRight.onclick = () => track.scrollBy({ left: 250, behavior: 'smooth' });
    }
    if (btnLeft && track) {
        btnLeft.onclick = () => track.scrollBy({ left: -250, behavior: 'smooth' });
    }

    document.addEventListener('click', (e) => {
        const closeAllPanels = () => { document.querySelectorAll('.extra-filter-panel.active').forEach(p => p.classList.remove('active')); };

        const toggleBtn = e.target.closest('.btn-filter-toggle, .btn-sort-toggle, .btn-rooms-toggle');
        if (toggleBtn) {
            e.preventDefault(); e.stopPropagation(); 
            const panel = toggleBtn.nextElementSibling;
            const isActive = panel && panel.classList.contains('active');
            closeAllPanels(); 
            if (!isActive && panel) panel.classList.add('active');
            return;
        }
        
        if (e.target.closest('.btn-apply-filters')) {
            e.preventDefault(); e.stopPropagation();
            const section = e.target.closest('.table-section');
            if (section) applyFiltersToSection(section);
            closeAllPanels();
            return;
        }

        const sortOption = e.target.closest('.panel-sort .custom-list-item');
        if (sortOption) {
            e.preventDefault(); e.stopPropagation();
            const panel = sortOption.closest('.panel-sort');
            panel.querySelectorAll('.custom-list-item').forEach(el => el.classList.remove('selected'));
            sortOption.classList.add('selected');
            const section = sortOption.closest('.table-section');
            if (section) {
                const textSpan = section.querySelector('.btn-sort-toggle .sort-text');
                if (textSpan) textSpan.innerText = sortOption.innerText;
                applyFiltersToSection(section);
            }
            closeAllPanels();
            return;
        }

        const roomOption = e.target.closest('.panel-rooms .custom-list-item');
        if (roomOption) {
            e.preventDefault(); e.stopPropagation();
            const panel = roomOption.closest('.panel-rooms');
            panel.querySelectorAll('.custom-list-item').forEach(el => el.classList.remove('selected'));
            roomOption.classList.add('selected');
            const section = roomOption.closest('.table-section');
            if (section) {
                const textSpan = section.querySelector('.btn-rooms-toggle .rooms-text');
                if (textSpan) textSpan.innerText = roomOption.innerText;
                applyFiltersToSection(section);
            }
            closeAllPanels();
            return;
        }

        if (!e.target.closest('.extra-filter-wrapper') && !e.target.closest('.carousel-nav-btn')) { closeAllPanels(); }

        // 🔘 🌟 לחיצה על כפתור חדרים של מכירה - FADE
        const trendsRoomTabBtn = e.target.closest('#plan-modal-overlay .trends-room-tab-btn');
        if (trendsRoomTabBtn) {
            e.preventDefault();
            const roomFilter = trendsRoomTabBtn.getAttribute('data-room-filter');
            if (roomFilter === currentRoomFilter) return;

            document.querySelectorAll('#plan-modal-overlay .trends-room-tab-btn').forEach(btn => btn.classList.remove('active'));
            trendsRoomTabBtn.classList.add('active');
            
            currentRoomFilter = roomFilter;

            const chartContainer = document.getElementById('svg-chart-container');
            const sideCard = document.getElementById('quarterly-card');

            if (chartContainer) {
                chartContainer.style.opacity = '0';
                chartContainer.style.transform = 'scale(0.98)';
                if (sideCard) sideCard.style.opacity = '0.4';

                setTimeout(() => {
                    renderTrendsSVGChart(currentRoomFilter);
                    chartContainer.style.opacity = '1';
                    chartContainer.style.transform = 'scale(1)';
                    if (sideCard) sideCard.style.opacity = '1';
                }, 160);
            } else {
                renderTrendsSVGChart(currentRoomFilter);
            }
            return;
        }

        // 🔘 🌟 לחיצה על כפתור חדרים של שכירות - FADE
        const rentRoomTabBtn = e.target.closest('#plan-modal-overlay .rent-room-tab-btn');
        if (rentRoomTabBtn) {
            e.preventDefault();
            const roomFilter = rentRoomTabBtn.getAttribute('data-rent-room-filter');
            if (roomFilter === currentRentRoomFilter) return;

            document.querySelectorAll('#plan-modal-overlay .rent-room-tab-btn').forEach(btn => btn.classList.remove('active'));
            rentRoomTabBtn.classList.add('active');
            
            currentRentRoomFilter = roomFilter;

            const chartContainer = document.getElementById('rent-svg-chart-container');
            const sideCard = document.getElementById('rent-quarterly-card');

            if (chartContainer) {
                chartContainer.style.opacity = '0';
                chartContainer.style.transform = 'scale(0.98)';
                if (sideCard) sideCard.style.opacity = '0.4';

                setTimeout(() => {
                    renderRentTrendsSVGChart(currentRentRoomFilter);
                    chartContainer.style.opacity = '1';
                    chartContainer.style.transform = 'scale(1)';
                    if (sideCard) sideCard.style.opacity = '1';
                }, 160);
            } else {
                renderRentTrendsSVGChart(currentRentRoomFilter);
            }
            return;
        }

        // 🔘 לחיצה על שכונה מהסרגל
        const hoodPill = e.target.closest('.hood-pill');
        if (hoodPill) {
            e.preventDefault();
            const hoodName = hoodPill.innerText;
            
            if (currentMode === 'property') {
                const dynAddr = document.querySelector('.dynamic-table-address');
                if (dynAddr && dynAddr.innerText !== 'הנכס') originalStreet = dynAddr.innerText;
                
                const titleEl = document.getElementById('extra-project-dynamic-address');
                if (titleEl && titleEl.innerText !== 'עסקאות באזור') originalFullAddress = titleEl.innerText.replace('עסקאות בכתובת ', '');
            }
            
            currentMode = 'neighborhood';

            document.querySelectorAll('.hood-pill').forEach(p => p.classList.remove('active'));
            hoodPill.classList.add('active');

            const backBtnContainer = document.getElementById('back-btn-container');
            if (backBtnContainer) {
                backBtnContainer.style.display = 'flex';
                setTimeout(() => backBtnContainer.style.opacity = '1', 10);
            }

            const neighSection = document.getElementById('section-neighborhood-sales');
            if (neighSection) neighSection.style.display = 'none';

            const titleEl = document.getElementById('extra-project-dynamic-address');
            if (titleEl) titleEl.innerText = `עסקאות ב${hoodName}`;

            document.querySelectorAll('.dynamic-hood-name-label').forEach(el => el.innerText = hoodName);

            const tbody = document.getElementById('main-sales-tbody');
            const mainSection = document.getElementById('section-main-sales');
            if (tbody) {
                tbody.style.opacity = '0';
                setTimeout(() => {
                    tbody.innerHTML = getNeighborhoodRows(hoodName);
                    applyFiltersToSection(mainSection);
                    tbody.style.opacity = '1';
                }, 200);
            }

            if (titleEl) titleEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }

        // 🔘 לחיצה על כפתור חזור
        const backBtnClick = e.target.closest('#btn-back-to-property');
        if (backBtnClick) {
            e.preventDefault();
            currentMode = 'property';
            
            document.querySelectorAll('.hood-pill').forEach(p => p.classList.remove('active'));
            
            const backBtnContainer = document.getElementById('back-btn-container');
            if (backBtnContainer) {
                backBtnContainer.style.opacity = '0';
                setTimeout(() => backBtnContainer.style.display = 'none', 300);
            }

            const neighSection = document.getElementById('section-neighborhood-sales');
            if (neighSection) neighSection.style.display = 'flex';

            const titleEl = document.getElementById('extra-project-dynamic-address');
            if (titleEl) titleEl.innerText = `עסקאות בכתובת ${originalFullAddress}`;

            document.querySelectorAll('.dynamic-hood-name-label').forEach(el => el.innerText = 'סלע');

            const tbody = document.getElementById('main-sales-tbody');
            const mainSection = document.getElementById('section-main-sales');
            if (tbody) {
                tbody.style.opacity = '0';
                setTimeout(() => {
                    tbody.innerHTML = getPropertyRows(originalStreet);
                    applyFiltersToSection(mainSection);
                    tbody.style.opacity = '1';
                }, 200);
            }

            if (titleEl) titleEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }

        // מעבר בין טאבים ראשיים (מכירה / שכירות / מה בסביבה)
        const tabBtn = e.target.closest('#plan-modal-overlay .extra-tab-btn');
        if (tabBtn) {
            e.preventDefault();
            const targetTab = tabBtn.getAttribute('data-tab');
            document.querySelectorAll('#plan-modal-overlay .extra-tab-btn').forEach(btn => btn.classList.remove('active'));
            tabBtn.classList.add('active');
            
            document.querySelectorAll('#plan-modal-overlay .extra-tab-content').forEach(content => content.classList.remove('active'));
            const activeContent = document.getElementById(`tab-content-${targetTab}`);
            if (activeContent) activeContent.classList.add('active');
        }
    });
}