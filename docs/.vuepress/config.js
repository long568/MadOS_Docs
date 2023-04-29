module.exports = {
    title: 'MadOS',
    description: '极速构建智能硬件的最佳方案',
    head: [
        ['link', {
            rel: 'icon',
            href: '/logo.ico'
        }],
        ['link', {
            rel: 'stylesheet',
            href: 'https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.10.0/katex.min.css'
        }],
        ['link', {
            rel: 'stylesheet',
            href: 'https://cdn.jsdelivr.net/github-markdown-css/2.2.1/github-markdown.css'
        }]
    ],
    base: '/doc/',
    markdown: {
        lineNumbers: true,
        extendMarkdown: md => {
            md.set({ html: true });
            md.use(require("@iktakahiro/markdown-it-katex"));
            md.use(require("markdown-it-footnote"));
        }
    },
    themeConfig: {
        nav: [
            { text: '主页', link: '/' },
            { text: '教学', link: '/Start/' },
            { text: '手册', link: '/HandBook/' },
            { text: '问答', link: '/FAQ/' },
            { text: 'Github', link: 'https://github.com/long568/MadOS' }
        ],
        sidebar: 'auto'
    },
    plugins: ['@vuepress/medium-zoom']
}
