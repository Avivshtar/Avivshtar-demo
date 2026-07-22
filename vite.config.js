import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        // הדפים המקוריים שלך
        main: './index.html',
        properties: './properties.html',
        israelInvestments: './israelInvestments.html',
        apartments: './apartments.html',
        item: './item.html',
        
        // 🚀 כל הדפים החדשים שהוספנו:
        help: './help.html',
        publish: './publish.html',
        abroad: './abroad.html',
        blog: './blog.html',
        shareDemo: './share-demo.html',
        club: './club.html',
        forum: './forum.html',
        lands: './lands.html',
        commercial: './commercial.html',
        podcasts: './podcasts.html',

        // קבצי ה-JS 
        header: './header.js',
        propertyCard: './propertyCard.js',
        mapLogic: './mapLogic.js',
        nextSection: './nextSection.js',
        shortcutsLogic: './shortcuts-logic.js',
        shortcutsLogic2: './shortcuts-logic-2.js',
        shortcutsLogic3: './shortcuts-logic-3.js',
        comingSoon: './coming-soon.js' // הוספתי גם את הרכיב החדש ליתר ביטחון
      }
    }
  }
});