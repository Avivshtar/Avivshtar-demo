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
        // כל הדפים החדשים - רק HTML!
        help: './help.html',
        publish: './publish.html',
        abroad: './abroad.html',
        blog: './blog.html',
        shareDemo: './share-demo.html',
        club: './club.html',
        forum: './forum.html',
        lands: './lands.html',
        commercial: './commercial.html',
        podcasts: './podcasts.html'
      }
    }
  }
});