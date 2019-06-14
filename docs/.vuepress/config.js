module.exports = {
    title: 'MadOS',
    description: '极速构建智能硬件的最佳方案',
    head: [
        ['link', { rel: 'icon', href: '/logo.ico' }],
    ],
    base: '/TestVuePress/',
    themeConfig: {
        nav: [
            { text: '主页', link: '/' },
            { text: '故事', link: '/Story/' },
            { text: '教学', link: '/Start/' },
            { text: '手册', link: '/HandBook/' }
        ],
        sidebar: 'auto'
        // lastUpdated: 'Last Updated'
    }
}
