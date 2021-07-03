module.exports = {
    // 部署站点的基础路径
    base: '/',
    // 站点的语言
    lang: 'zh-CN',
    // 站点的标题
    title: '技术文档',
    // 站点的描述
    description: '静态资源文档',
    // 在最终渲染出的 HTML 的 <head> 标签内加入的额外标签。
    head: [
        ['link', { rel: 'icon', href: 'https://vuejs.org/images/logo.png' }],
        ['link', { rel: 'apple-touch-icon', href: 'https://vuejs.org/images/logo.png' }],
        ['link', { rel: 'manifest', href: 'public/manifest.json' }],
        ['meta', { name: 'application-name', content: 'VuePress' }],
        ['meta', { name: 'apple-mobile-web-app-title', content: 'VuePress' }],
    ],

    locales: {},

    // 接收主题名称、主题简称或主题的绝对路径
    // theme: '@vuepress/default',
    // theme: 'bar',
    // theme: path.resolve(__dirname, './path/to/local/theme'),

    // 为当前使用的主题提供的配置项
    themeConfig: {
        logo: 'https://vuejs.org/images/logo.png',
        navbar: [
            { text: '首页', link: '/' },
            { text: '导航', link: '/guide/',
                // items: [
                //     { text: 'markdown', link: '/guide' }
                // ]
            },
            { text: 'GitHub', link: 'https://github.com/lidengkedev/book', target: '_blank' },
        ],
        // sidebar: 'auto',
        // sidebarDepth: 2,
        sidebar: [
            { text: 'HTML',
                children: [
                    { text: 'Canvas', link: '/guide/html/canvas.md' },
                    { text: '字符集', link: '/guide/html/character.md' },
                    { text: 'HTML5', link: '/guide/html/html5.md' },
                    { text: 'W3C', link: '/guide/html/w3c.md' },
                    { text: 'SVG', link: '/guide/html/svg.md' }
                ]
            },
            { text: 'CSS',
                children: [
                    { text: 'Flex', link: '/guide/css/flex.md' },
                    { text: '问题', link: '/guide/css/problem.md' },
                    { text: 'px-em-rem', link: '/guide/css/px-em-rem.md' }
                ]
            },
            { text: 'JS',
                children: [
                    { text: 'ES5',
                        children: [
                            { text: '数组', link: '/guide/js/es5/array.md' },
                            { text: '日期', link: '/guide/js/es5/date.md' },
                            { text: '字符串', link: '/guide/js/es5/string.md' },
                            { text: 'WebSocket', link: '/guide/js/es5/websocket.md' },
                            { text: 'Window', link: '/guide/js/es5/window.md' }
                        ]
                    },
                    { text: 'ES6',
                        children: [
                            { text: '字符串', link: '/guide/js/es6/string.md' }
                        ]
                    },
                    { text: 'SEO', link: '/guide/js/seo/',
                        children: [
                            { text: '伪静态', link: '/guide/js/seo/pseudo-static.md' }
                        ]
                    },
                    { text: '示例', link: '/guide/js/example/' },
                    { text: '汇总', link: '/guide/js/summary/' },
                    { text: 'Ajax', link: '/guide/js/ajax.md' },
                    { text: '算法',
                        children: [
                            { text: 'Tree树', link: '/guide/js/algorihtm/tree.md'}
                        ]
                    }
                ]
            },
            { text: 'Vue',
                children: [
                    { text: 'Vue-SSR', link: '/guide/vue/vue-ssr.md' },
                    { text: 'Vue-Router', link: '/guide/vue/vuerouter/',
                        children: []
                    },
                    { text: 'Vuex', link: '/guide/vue/vuex/',
                        children: []
                    },
                    { text: 'Axios', link: '/guide/vue/axios/' }
                ]
            },
            { text: 'React', link: '/guide/react/',
                children: []
            },
            { text: 'Node', link: '/guide/node/',
                children: []
            },
            { text: 'Webpack',
                children: [
                    { text: '问题', link: '/guide/webpack/problem/' }
                ]
            },
            { text: 'Babel', link: '/guide/babel/',
                children: []
            },
            { text: 'Git', link: '/guide/git/',
                children: []
            },
            { text: 'Linux', link: '/guide/linux/',
                children: []
            },
            { text: 'Book',
                children: [
                    { text: 'GitBook', link: '/guide/book/gitbook.md' },
                    { text: 'VuePress', link: '/guide/book/vuepress.md' }
                ]
            }
        ]
    },
    plugins: [
        // ['@vuepress/plugin-debug'],
        ['@vuepress/plugin-search'],
        // ['@vuepress/plugin-back-to-top'],
        // '@vuepress/active-header-links',
        // ['@vuepress/plugin-pwa'],
        // ['@vuepress/plugin-pwa-popup', {
        //     locales: {
        //         '/zh/': {
        //             message: '发现新内容可用',
        //             buttonText: '刷新'
        //         }
        //     }
        // }]
    ]
}