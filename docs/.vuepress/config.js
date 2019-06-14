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
            href: 'https://cdn.jsdelivr.net/npm/katex@0.10.2/dist/katex.min.css', 
            integrity: 'sha384-yFRtMMDnQtDRO8rLpMIKrtPCD5jdktao2TV19YiZYWMDkUR5GQZR/NOVTdquEx1j', 
            crossorigin: 'anonymous' 
        }],
        ['link', {  
            rel: 'stylesheet', 
            href: 'https://cdn.jsdelivr.net/github-markdown-css/2.2.1/github-markdown.css'
        }],
        ['script defer', {
            src: 'https://cdn.jsdelivr.net/npm/katex@0.10.2/dist/katex.min.js',
            integrity: 'sha384-9Nhn55MVVN0/4OFx7EE5kpFBPsEMZxKTCnA+4fqDmg12eCTqGi6+BB2LjY8brQxJ',
            crossorigin: 'anonymous'
        }],
        ['script defer', {
            src: 'https://cdn.jsdelivr.net/npm/katex@0.10.2/dist/contrib/auto-render.min.js',
            integrity: 'sha384-kWPLUVMOks5AQFrykwIup5lo0m3iMkkHrD0uJ4H5cjeGihAutqP0yW0J6dpFiVkI',
            crossorigin: 'anonymous',
            onload: 'renderMathInElement(document.body);'
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
