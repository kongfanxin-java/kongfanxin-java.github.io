export const data = {
  "key": "v-6ce48554",
  "path": "/contributing.html",
  "title": "贡献指南",
  "lang": "zh-CN",
  "frontmatter": {
    "sidebar": "auto"
  },
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "概览",
      "slug": "概览",
      "children": []
    },
    {
      "level": 2,
      "title": "开发配置",
      "slug": "开发配置",
      "children": []
    },
    {
      "level": 2,
      "title": "开发脚本",
      "slug": "开发脚本",
      "children": [
        {
          "level": 3,
          "title": "yarn build",
          "slug": "yarn-build",
          "children": []
        },
        {
          "level": 3,
          "title": "yarn copy",
          "slug": "yarn-copy",
          "children": []
        },
        {
          "level": 3,
          "title": "yarn dev",
          "slug": "yarn-dev",
          "children": []
        },
        {
          "level": 3,
          "title": "yarn clean",
          "slug": "yarn-clean",
          "children": []
        },
        {
          "level": 3,
          "title": "yarn docs:*",
          "slug": "yarn-docs",
          "children": []
        },
        {
          "level": 3,
          "title": "yarn lint",
          "slug": "yarn-lint",
          "children": []
        },
        {
          "level": 3,
          "title": "yarn test",
          "slug": "yarn-test",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "文档",
      "slug": "文档",
      "children": []
    }
  ],
  "filePathRelative": "contributing.md"
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
