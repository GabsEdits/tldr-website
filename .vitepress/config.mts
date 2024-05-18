import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: "en-US",
  title: "TLDR Pages",
  description:
    "A community effort to simplify the beloved man pages with practical examples.",
  titleTemplate: false,

  lastUpdated: true,
  cleanUrls: true,

  themeConfig: {
    author: "TLDR Pages",
    nav: {
      show: false,
      git: "https://github.com/tldr-pages/tldr",
    },
    footer: {
      copyright: false,
      poweredBy: true,

      madeby: {
        show: false,
      },

      copyleft: {
        show: true,
        license: "MIT License",
        info: "https://github.com/tldr-pages/tldr/blob/main/LICENSE.md",
      },

      sourcecode: {
        show: true,
        link: "https://github.com/tldr-pages/tldr",
      },
    },
  },

  markdown: {
    container: {
      warningLabel: "⚠ Warning",
      tipLabel: "Tip",
      dangerLabel: "⚠ Danger",
      infoLabel: "Info",
    },
  },
  head: [
    ["meta", { name: "author", content: "TLDR Pages" }],
    ["link", { rel: "icon", type: "image/png", href: "/assets/img/icon.png" }],
    ["meta", { name: "theme-color", content: "#42887f" }],
    ["meta", { name: "og:type", content: "website" }],
    ["meta", { name: "og:locale", content: "en" }],
    ["meta", { name: "og:site_name", content: "TLDR Pages" }],
    ["meta", { name: "twitter:title", content: "TLDR Pages" }],
    [
      "meta",
      {
        name: "twitter:description",
        content:
          "A community effort to simplify the beloved man pages with practical examples.",
      },
    ],
    ["meta", { name: "twitter:url", content: "https://tldr.gxbs.me" }],
  ],
  sitemap: {
    hostname: "https://tldr.gxbs.me",
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
          $color-accent: #42887f;
          `,
        },
      },
    },
  },
});
