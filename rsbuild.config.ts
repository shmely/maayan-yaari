import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';

export default defineConfig({
  plugins: [pluginReact()],
  html: {
    title: 'מעין יערי',
    tags: [

      { tag: 'link', attrs: { rel: "apple-touch-icon", sizes: "180x180", href: "/assets/images/apple-touch-icon.png" } },
      { tag: 'link', attrs: { rel: "icon", type: "image/png", sizes: "32x32", href: "/assets/images/favicon-32x32.png" } },
      { tag: 'link', attrs: { rel: "icon", type: "image/png", sizes: "16x16", href: "/assets/images/favicon-16x16.png" } },
      { tag: 'link', attrs: { rel: "manifest", href: "/site.webmanifest" } },
    ],
    meta: [
      { name: "description", content: "מעין יערי - מעצבת פנים מקצועית. עיצוב פנים יוקרתי ומודרני לבתים פרטיים ודירות" },
      { name: "keywords", content: "עיצוב פנים, מעצבת פנים, עיצוב בתים, עיצוב דירות, מעין יערי" },
      { name: "author", content: "מעין יערי" },
      { property: "og:title", content: "מעין יערי - אדריכלות ועיצוב פנים" },
      { property: "og:description", content: "עיצוב פנים יוקרתי ומודרני לבתים פרטיים ודירות" },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://maayanyaari.co.ilm" },
      { property: "og:image", content: "/assets/images/og-image.jpg" },
    ],

  },


});
