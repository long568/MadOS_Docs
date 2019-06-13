module.exports = {
    title: 'MadOS',
    description: '实时操作系统',
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
        ]
    }
}
