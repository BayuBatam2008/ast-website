import { rehypeHeadingIds } from "@astrojs/markdown-remark";
import starlight from "@astrojs/starlight";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";
import rehypeAutolinkHeadings from "rehype-autolink-headings";

import react from "@astrojs/react";

export default defineConfig({
  site: "https://ast.plj.my.id",
  integrations: [
    starlight({
      title: "AST Archive",
      locales: {
        root: {
          label: "Bahasa Indonesia",
          lang: "id-ID",
        },
      },
      description: "Website yang berisi kenangan server discord lama AST.",
      head: [
        {
          tag: "link",
          attrs: {
            href: "/favicon-32x32.png",
            rel: "icon",
            sizes: "32x32",
            type: "image/png",
          },
        },
        {
          tag: "meta",
          attrs: {
            name: "theme-color",
            content: "#b30000",
          },
        },
      ],
      logo: {
        src: "./src/assets/ast_logo.webp",
      },
      favicon: "/favicon.ico",
      social: {
        discord: "https://discord.gg/g9FprAgQwu",
        youtube: "https://youtube.com/@Astonishing21",
        github: "https://github.com/BayuBatam2008/ast-archive",
      },
      tableOfContents: false,
      sidebar: [
        {
          label: "Utama",
          link: "/utama/",
        },
        {
          label: "Notifikasi & Tambahan",
          autogenerate: {
            directory: "notifikasi",
          },
        },
        {
          label: "Tempat Umum",
          items: [
            { label: "Chat Bebas", link: "/umum/chat_bebas/" },
            {
              label: "Threads",
              collapsed: true,
              autogenerate: { directory: "t-chat" },
            },
            { label: "Tech Chat", link: "/umum/tech_chat" },
            {
              label: "Threads",
              collapsed: true,
              autogenerate: { directory: "t-tech" },
            },
            { label: "Meme And Media", link: "/umum/meme_and_media" },
          ],
        },
        {
          label: "Extra Content",
          autogenerate: {
            directory: "content",
          },
        },
        {
          label: "Bot Command",
          autogenerate: {
            directory: "bot",
          },
        },
        {
          label: "Something About Minecraft",
          autogenerate: {
            directory: "mc",
          },
        },
      ],
      customCss: ["./src/tailwind.css"],
      components: {
        Head: "./src/components/Head.astro",
        Header: "./src/components/Header.astro",
        SocialIcons: "./src/components/SocialIcons.astro",
      },
      titleDelimiter: "—",
    }),
    tailwind({
      applyBaseStyles: false,
    }),
    react(),
  ],
  markdown: {
    rehypePlugins: [
      rehypeHeadingIds,
      [
        rehypeAutolinkHeadings,
        {
          behavior: "wrap",
          properties: {
            ariaHidden: true,
            tabIndex: -1,
            class: "heading-link",
          },
        },
      ],
    ],
  },
  vite: {
    ssr: {
      noExternal: ["@radix-ui/*"],
    },
  },
});
