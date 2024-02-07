import type { SidebarConfig } from '@vuepress/theme-default'

export const zh: SidebarConfig = {
  '/guide/': [
    {
      text: '指南',
      children: [
        '/guide/README.md',
      ],
    },
  ],
  '/dictionary/': [
    {
      text: '字典库',
      children: [
        '/dictionary/README.md',
      ],
    },
  ],

  '/knowledge-base/lang-basic/': [
    {
      text: '开发语言',
      children: [
        './java-basic.md',
        './python-basic.md',
        './go-basic.md',
        './scala-basic.md',
        './vue-basic.md'
      ],
    },
  ],
  '/knowledge-base/design-mode/': [
    {
      text: '设计模式',
      children: [
        './database-design.md',
        './design-philosophy.md',
        './build-design-mode.md',
        './structural-design-mode.md',
        './behavior-design-mode.md',
      ],
    },
  ],
  '/knowledge-base/environment-setup/': [
    {
      text: '环境搭建',
      children: [
        './devtool.md',
        './database.md',
        './docker.md',
        './version-control.md',
      ],
    },
  ],
  '/knowledge-base/middleware/': [
   {
      text: '中间件',
      children: [
        './message-queue.md',
        './search-engine.md',
        './distributed-transaction.md',
        './cache.md',
      ],
    },
  ],
  '/technical-columnist/': [
    {
      text: '算法笔记',
      children: [
        '/technical-columnist/algorithm/math-soulution.md',
        '/technical-columnist/algorithm/array-soulution.md',
        '/technical-columnist/algorithm/link-soulution.md',
        '/technical-columnist/algorithm/string-soulution.md',
        '/technical-columnist/algorithm/sort-soulution.md',
        '/technical-columnist/algorithm/search-soulution.md',
      ],
    },
    {
      text: '大数据基础',
      children: [
        '/technical-columnist/bigdata/hadoop.md',
        '/technical-columnist/bigdata/spark.md',
        '/technical-columnist/bigdata/flink.md',
      ],
    },
    {
      text: '基础架构方案',
      children: [
        '/technical-columnist/architecture/springboot.md',
        '/technical-columnist/architecture/springcloud.md',
        '/technical-columnist/architecture/dubbo.md',
        '/technical-columnist/architecture/devops.md',
      ],
    },
  ],
}
