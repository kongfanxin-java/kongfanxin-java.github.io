export const data = {
  "key": "v-ac7563b8",
  "path": "/technical-columnist/",
  "title": "专栏概述",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "算法笔记",
      "slug": "算法笔记",
      "children": []
    },
    {
      "level": 2,
      "title": "大数据基础",
      "slug": "大数据基础",
      "children": []
    }
  ],
  "filePathRelative": "technical-columnist/README.md"
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
