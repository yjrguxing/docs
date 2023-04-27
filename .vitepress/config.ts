import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    // 站点级配置
    lang: 'zh',
    title: "鸭鸭小册",
    description: "支持中文的文档&API汇总站",
    titleTemplate: ":title - 鸭鸭小册",
    base: "/docs/",
    cleanUrls: true,
    srcDir: 'src',
    lastUpdated: true,
    themeConfig: {
        i18nRouting: true
    },
    locales: {
        root: {
            lang: 'zh',
            label: '简体中文',
            link: '/zh/',
            themeConfig: {
                i18nRouting: true,
                // https://vitepress.dev/reference/default-theme-config
                nav: [
                    { text: 'Home', link: '/' },
                    // 让link自适应多语言
                    { text: 'Markdown Examples', link: '/zh/markdown-examples' },
                    { text: 'OpenAI',
                        items: [
                            { text: '文档', link: '/zh/openai/documentation/introduction' },
                            { text: 'API参考', link: '/zh/openai/api-reference/introduction' },
                        ]
                    },
                ],

                sidebar: [
                    {
                        text: 'Examples',
                        items: [
                            { text: 'Markdown Examples', link: '/zh/markdown-examples' },
                            { text: 'Runtime API Examples', link: '/zh/api-examples' }
                        ]
                    },
                    {
                        text: 'OpenAI',
                        items: [
                            { text: '文档', link: '/zh/openai/documentation/introduction' },
                            { text: 'API参考', link: '/zh/openai/api-reference/introduction' },
                        ]
                    }
                ],
                socialLinks: [
                    { icon: 'github', link: 'https://github.com/yjrguxing' }
                ]
            },
        },
        en:{
            lang: 'en',
            label: 'English',
            link: '/en/',
            themeConfig: {
                i18nRouting: true,
                // https://vitepress.dev/reference/default-theme-config
                nav: [
                    { text: 'Home', link: '/' },
                    // 让link自适应多语言
                    { text: 'Markdown Examples', link: '/en/markdown-examples' },
                    { text: 'OpenAI',
                        items: [
                            { text: 'Documentation', link: '/en/openai/documentation/introduction' },
                            { text: 'API reference', link: '/en/openai/api-reference/introduction' },
                        ]
                    },
                ],

                sidebar: [
                    {
                        text: 'Examples',
                        items: [
                            { text: 'Markdown Examples', link: '/en/markdown-examples' },
                            { text: 'Runtime API Examples', link: '/en/api-examples' }
                        ]
                    },
                    {
                        text: 'OpenAI',
                        items: [
                            {
                                text: 'Documentation',
                                items: [
                                    {
                                        text: 'GET STARTED',
                                        items: [
                                            { text: 'introduction', link: '/en/openai/documentation/introduction' },
                                        ],
                                        collapsed : true,
                                    },
                                ],
                                collapsed: true
                            },
                            {
                                text: 'API reference',
                                items: [
                                ]
                            }
                        ]
                    }
                ],
                socialLinks: [
                    { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
                ]
            },
        }
    }
})
