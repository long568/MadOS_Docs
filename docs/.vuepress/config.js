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
        }],
    ],
    base: '/TestVuePress/',
    markdown: {
        lineNumbers: true,
        config: md => {
            md.set({html: true})
            md.use(require("@iktakahiro/markdown-it-katex"))
        }
    },
    themeConfig: {
        nav: [
            { text: '主页', link: '/' },
            { text: '故事', link: '/Story/' },
            { text: '教学', link: '/Start/' },
            { text: '手册', link: '/HandBook/' }
        ],
        sidebar: 'auto'
    }
}

// npm install markdown-it
// npm uninstall markdown-it-katex
// npm install @iktakahiro/markdown-it-katex
