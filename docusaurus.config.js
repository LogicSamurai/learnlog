// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: "LearnLog",
    tagline: "Dinosaurs are cool",
    favicon: "img/favicon.ico",

    // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
    future: {
        v4: true, // Improve compatibility with the upcoming Docusaurus v4
    },

    // Set the production url of your site here
    url: "https://your-docusaurus-site.example.com",
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: "/",

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: "syntaxsamurai", // Usually your GitHub org/user name.
    projectName: "learnlog", // Usually your repo name.

    onBrokenLinks: "throw",
    onBrokenMarkdownLinks: "warn",

    // Even if you don't use internationalization, you can use this field to set
    // useful metadata like html lang. For example, if your site is Chinese, you
    // may want to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: "en",
        locales: ["en"],
    },

    presets: [
        [
            "classic",
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    sidebarPath: "./sidebars.js",
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    editUrl:
                        "https://github.com/SyntaxSumurai/learnlog/tree/main",

                    showLastUpdateAuthor: true,
                    showLastUpdateTime: true,
                },
                blog: {
                    showReadingTime: true,
                    showLastUpdateAuthor: true,
                    showLastUpdateTime: true,
                    feedOptions: {
                        type: ["rss", "atom"],
                        xslt: true,
                    },
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    editUrl:
                        "https://github.com/SyntaxSumurai/learnlog/tree/main/",
                    // Useful options to enforce blogging best practices
                    onInlineTags: "warn",
                    onInlineAuthors: "warn",
                    onUntruncatedBlogPosts: "warn",
                },
                theme: {
                    customCss: "./src/css/custom.css",
                },
            }),
        ],
    ],

    themeConfig:
        /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            navbar: {
                title: "LearnLog",
                items: [
                    {
                        type: "docSidebar",
                        sidebarId: "tutorialSidebar",
                        position: "right",
                        label: "Tutorial",
                    },
                    { to: "/blog", label: "Blog", position: "right" },
                    {
                        href: "https://github.com/SyntaxSumurai",
                        label: "GitHub",
                        position: "right",
                    },
                ],
            },
            prism: {
                theme: prismThemes.vsDark,
                darkTheme: prismThemes.vsDark,
                defaultLanguage: "javascript",
                additionalLanguages: [
                    "java",
                    "python",
                    "javascript",
                    "typescript",
                    "jsx",
                    "tsx",
                    "css",
                    "bash",
                    "json",
                    "yaml",
                    "markdown",
                    "go",
                    "rust",
                    "cpp",
                    "c",
                    "sql",
                ],
                magicComments: [
                    {
                        className: "theme-code-block-highlighted-lines",
                        line: "highlight-next-line",
                        block: {
                            start: "highlight-start",
                            end: "highlight-end",
                        },
                    },
                    {
                        className: "code-block-focus-lines",
                        line: "focus-next-line",
                        block: { start: "focus-start", end: "focus-end" },
                    },
                ],
            },
        }),
};

export default config;
