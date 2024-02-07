export const data = {
  "key": "v-4d76029c",
  "path": "/guide/theme.html",
  "title": "主题",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "社区主题",
      "slug": "社区主题",
      "children": []
    },
    {
      "level": 2,
      "title": "本地主题",
      "slug": "本地主题",
      "children": []
    }
  ],
  "filePathRelative": "guide/theme.md"
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
