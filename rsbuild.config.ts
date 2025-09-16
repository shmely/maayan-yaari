import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';

export default defineConfig({
  plugins: [pluginReact()],
  html: {
    title: 'מעיין יערי',
    tags: [
      { tag: 'link', attrs: { rel: "icon", href: "/assets/images/logo-profile.jpg" } }
    ],
    meta: [
      { name: "description", content: "מעיין יערי - מעצבת פנים מקצועית. עיצוב פנים יוקרתי ומודרני לבתים פרטיים ודירות" },
      { name: "keywords", content: "עיצוב פנים, מעצבת פנים, עיצוב בתים, עיצוב דירות, מעיין יערי" },
      { name: "author", content: "מעיין יערי" },
      { property: "og:title", content: "מעיין יערי - אדריכלות ועיצוב פנים" },
      { property: "og:description", content: "עיצוב פנים יוקרתי ומודרני לבתים פרטיים ודירות" },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://maayanyaari.co.ilm" },
      { property: "og:image", content: "/assets/images/og-image.jpg" },
    ],

  },


});
