# vuepress

## 安装

```bash
$ npm install -D vuepress
$ npm install -D @vuepress/plugin-search
```

## 结构

```
.
├── guides
│   ├── .vuepress (可选的)
│   │   ├── components (可选的)
│   │   ├── theme (可选的)
│   │   │   └── Layout.vue
│   │   ├── public (可选的)
│   │   ├── styles (可选的)
│   │   │   ├── index.styl
│   │   │   └── palette.styl
│   │   ├── templates (可选的, 谨慎配置)
│   │   │   ├── dev.html
│   │   │   └── ssr.html
│   │   ├── config.js (可选的)
│   │   └── enhanceApp.js (可选的)
│   │ 
│   ├── README.md
│   ├── guide
│   │   └── README.md
│   └── config.md
│ 
└── package.json
```

## 配置

```js
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

    // locales: {},

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
                items: [
                    { text: 'markdown', link: '/guide' }
                ]
            },
            { text: 'GitHub', link: 'https://github.com/lidengkedev/book', target: '_blank' },
        ],
        sidebar: [
            { text: 'HTML', link: '/guide/html/', collapsable: false,
                children: [
                    { text: 'HTML5', link: '/guide/html/html5.md' },
                    { text: 'SVG', link: '/guide/html/svg.md' }
                ]
            },
        ]
    },
    plugins: [
        ['@vuepress/plugin-search']
    ]
}
```
## 打包

```bash
$ npm run dev
$ npm run build
```