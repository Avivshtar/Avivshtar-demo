import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: './index.html',
        properties: './properties.html',
        israelInvestments: './israelInvestments.html',
        apartments: './apartments.html',
        item: './item.html',
        // תוסיף כאן את כל קבצי ה-JS שלך כדי ש-Vite יארוז אותם
        header: './header.js',
        propertyCard: './propertyCard.js',
        mapLogic: './mapLogic.js',
        nextSection: './nextSection.js',
        shortcutsLogic: './shortcuts-logic.js',
        shortcutsLogic2: './shortcuts-logic-2.js',
        shortcutsLogic3: './shortcuts-logic-3.js',
      }
    }
  }
});