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
                            { text: 'GPT-3', link: '/zh/openai/gpt3' },
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
                    }
                ],
                socialLinks: [
                    { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
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
                            { text: 'GPT-3', link: '/en/openai/gpt3' },
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
                    }
                ],
                socialLinks: [
                    { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
                ]
            },
        }
    }
})
