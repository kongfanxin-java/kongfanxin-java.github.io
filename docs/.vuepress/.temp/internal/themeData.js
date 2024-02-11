export const themeData = {
  "logo": "/images/hero.png",
  "docsDir": "docs",
  "locales": {
    "/": {
      "navbar": [
        {
          "text": "概述",
          "link": "/guide/"
        },
        {
          "text": "字典库",
          "link": "/dictionary/"
        },
        {
          "text": "知识库",
          "children": [
            {
              "text": "开发语言",
              "children": [
                "/knowledge-base/lang-basic/java-basic.md",
                "/knowledge-base/lang-basic/python-basic.md",
                "/knowledge-base/lang-basic/go-basic.md",
                "/knowledge-base/lang-basic/scala-basic.md",
                "/knowledge-base/lang-basic/vue-basic.md"
              ]
            },
            {
              "text": "设计模式",
              "children": [
                "/knowledge-base/design-mode/database-design.md",
                "/knowledge-base/design-mode/design-philosophy.md",
                "/knowledge-base/design-mode/build-design-mode.md",
                "/knowledge-base/design-mode/structural-design-mode.md",
                "/knowledge-base/design-mode/behavior-design-mode.md"
              ]
            },
            {
              "text": "环境搭建",
              "children": [
                "/knowledge-base/environment-setup/devtool.md",
                "/knowledge-base/environment-setup/database.md",
                "/knowledge-base/environment-setup/docker.md",
                "/knowledge-base/environment-setup/version-control.md"
              ]
            },
            {
              "text": "中间件",
              "children": [
                "/knowledge-base/middleware/message-queue.md",
                "/knowledge-base/middleware/search-engine.md",
                "/knowledge-base/middleware/distributed-transaction.md",
                "/knowledge-base/middleware/cache.md"
              ]
            }
          ]
        },
        {
          "text": "技术专栏",
          "link": "/columnist/",
          "children": [
            {
              "text": "算法笔记",
              "children": [
                "/technical-columnist/algorithm/math-soulution.md",
                "/technical-columnist/algorithm/array-soulution.md",
                "/technical-columnist/algorithm/link-soulution.md",
                "/technical-columnist/algorithm/string-soulution.md",
                "/technical-columnist/algorithm/sort-soulution.md",
                "/technical-columnist/algorithm/search-soulution.md"
              ]
            },
            {
              "text": "大数据基础",
              "children": [
                "/technical-columnist/bigdata/hadoop.md",
                "/technical-columnist/bigdata/spark.md",
                "/technical-columnist/bigdata/flink.md"
              ]
            },
            {
              "text": "基础架构方案",
              "children": [
                "/technical-columnist/architecture/springboot.md",
                "/technical-columnist/architecture/springcloud.md",
                "/technical-columnist/architecture/dubbo.md",
                "/technical-columnist/architecture/devops.md"
              ]
            }
          ]
        }
      ],
      "sidebar": {
        "/guide/": [
          {
            "text": "指南",
            "children": [
              "/guide/README.md"
            ]
          }
        ],
        "/dictionary/": [
          {
            "text": "字典库",
            "children": [
              "/dictionary/README.md"
            ]
          }
        ],
        "/knowledge-base/lang-basic/": [
          {
            "text": "开发语言",
            "children": [
              "./java-basic.md",
              "./python-basic.md",
              "./go-basic.md",
              "./scala-basic.md",
              "./vue-basic.md"
            ]
          }
        ],
        "/knowledge-base/design-mode/": [
          {
            "text": "设计模式",
            "children": [
              "./database-design.md",
              "./design-philosophy.md",
              "./build-design-mode.md",
              "./structural-design-mode.md",
              "./behavior-design-mode.md"
            ]
          }
        ],
        "/knowledge-base/environment-setup/": [
          {
            "text": "环境搭建",
            "children": [
              "./devtool.md",
              "./database.md",
              "./docker.md",
              "./version-control.md"
            ]
          }
        ],
        "/knowledge-base/middleware/": [
          {
            "text": "中间件",
            "children": [
              "./message-queue.md",
              "./search-engine.md",
              "./distributed-transaction.md",
              "./cache.md"
            ]
          }
        ],
        "/technical-columnist/": [
          {
            "text": "算法笔记",
            "children": [
              "/technical-columnist/algorithm/math-soulution.md",
              "/technical-columnist/algorithm/array-soulution.md",
              "/technical-columnist/algorithm/link-soulution.md",
              "/technical-columnist/algorithm/string-soulution.md",
              "/technical-columnist/algorithm/sort-soulution.md",
              "/technical-columnist/algorithm/search-soulution.md"
            ]
          },
          {
            "text": "大数据基础",
            "children": [
              "/technical-columnist/bigdata/hadoop.md",
              "/technical-columnist/bigdata/spark.md",
              "/technical-columnist/bigdata/flink.md"
            ]
          },
          {
            "text": "基础架构方案",
            "children": [
              "/technical-columnist/architecture/springboot.md",
              "/technical-columnist/architecture/springcloud.md",
              "/technical-columnist/architecture/dubbo.md",
              "/technical-columnist/architecture/devops.md"
            ]
          }
        ]
      },
      "lastUpdatedText": "上次更新",
      "contributorsText": "贡献者",
      "tip": "提示",
      "warning": "注意",
      "danger": "警告",
      "notFound": [
        "这里什么都没有",
        "我们怎么到这来了？",
        "这是一个 404 页面",
        "看起来我们进入了错误的链接"
      ],
      "backToHome": "返回首页",
      "openInNewWindow": "在新窗口打开",
      "toggleDarkMode": "切换夜间模式",
      "toggleSidebar": "切换侧边栏",
      "selectLanguageName": "English"
    }
  },
  "navbar": [],
  "darkMode": true,
  "repo": null,
  "selectLanguageText": "Languages",
  "selectLanguageAriaLabel": "Select language",
  "sidebar": "auto",
  "sidebarDepth": 2,
  "editLink": true,
  "editLinkText": "Edit this page",
  "lastUpdated": true,
  "lastUpdatedText": "Last Updated",
  "contributors": true,
  "contributorsText": "Contributors",
  "notFound": [
    "There's nothing here.",
    "How did we get here?",
    "That's a Four-Oh-Four.",
    "Looks like we've got some broken links."
  ],
  "backToHome": "Take me home",
  "openInNewWindow": "open in new window",
  "toggleDarkMode": "toggle dark mode",
  "toggleSidebar": "toggle sidebar"
}
