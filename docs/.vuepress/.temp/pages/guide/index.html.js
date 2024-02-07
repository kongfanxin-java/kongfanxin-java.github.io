export const data = {
  "key": "v-fffb8e28",
  "path": "/guide/",
  "title": "概述",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "它是如何工作的？",
      "slug": "它是如何工作的",
      "children": []
    },
    {
      "level": 2,
      "title": "为什么不是 ...?",
      "slug": "为什么不是",
      "children": [
        {
          "level": 3,
          "title": "Nuxt",
          "slug": "nuxt",
          "children": []
        },
        {
          "level": 3,
          "title": "VitePress",
          "slug": "vitepress",
          "children": []
        },
        {
          "level": 3,
          "title": "Docsify / Docute",
          "slug": "docsify-docute",
          "children": []
        },
        {
          "level": 3,
          "title": "Hexo",
          "slug": "hexo",
          "children": []
        },
        {
          "level": 3,
          "title": "GitBook",
          "slug": "gitbook",
          "children": []
        }
      ]
    }
  ],
  "filePathRelative": "guide/README.md"
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
