export const data = {
  "key": "v-8daa1a0e",
  "path": "/",
  "title": "首页",
  "lang": "zh-CN",
  "frontmatter": {
    "home": true,
    "title": "首页",
    "heroImage": "/images/xrindex.png",
    "actions": [
      {
        "text": "字典库",
        "link": "/dictionary/",
        "type": "secondary"
      },
      {
        "text": "知识库",
        "link": "/knowledge-base/lang-basic/java-basic",
        "type": "secondary"
      }
    ],
    "features": [
      {
        "title": "网站建设",
        "details": "使用VuePress作为基础的，以Markdown文档的书写格式作为主要的内容写作方式。"
      },
      {
        "title": "文档内容",
        "details": "记录项目或技术网站等资料找到的通用性较强的技术点，会借鉴技术图书中的部分内容，在文档内做出特别说明。"
      },
      {
        "title": "知识拓展",
        "details": "此网站旨在形成知识地图概念，承载的信息量有限，会考虑GitHub配套代码、维护公众号等计划。"
      }
    ],
    "footer": "MIT Licensed | Copyright © 2023-present Evan You"
  },
  "excerpt": "",
  "headers": [],
  "filePathRelative": "README.md"
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
