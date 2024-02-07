import type { NavbarConfig } from '@vuepress/theme-default'
import { version } from '../meta'

export const zh: NavbarConfig = [
  {
    text: '概述',
    link: '/guide/',
  },
  {
    text: '字典库',
    link: '/dictionary/',
  },
  {
    text: '知识库',
    children: [
      {
        text: '开发语言',
        children: [
          '/knowledge-base/lang-basic/java-basic.md',
          '/knowledge-base/lang-basic/python-basic.md',
          '/knowledge-base/lang-basic/go-basic.md',
          '/knowledge-base/lang-basic/scala-basic.md',
          '/knowledge-base/lang-basic/vue-basic.md'
        ],
      },
      {
        text: '设计模式',
        children: [
          '/knowledge-base/design-mode/database-design.md',
          '/knowledge-base/design-mode/design-philosophy.md',
          '/knowledge-base/design-mode/build-design-mode.md',
          '/knowledge-base/design-mode/structural-design-mode.md',
          '/knowledge-base/design-mode/behavior-design-mode.md',
        ],
      },
      {
        text: '环境搭建',
        children: [
          '/knowledge-base/environment-setup/devtool.md',
          '/knowledge-base/environment-setup/database.md',
          '/knowledge-base/environment-setup/docker.md',
          '/knowledge-base/environment-setup/version-control.md',
        ],
      },
      {
        text: '中间件',
        children: [
          '/knowledge-base/middleware/message-queue.md',
          '/knowledge-base/middleware/search-engine.md',
          '/knowledge-base/middleware/distributed-transaction.md',
          '/knowledge-base/middleware/cache.md',
        ],
      },
    ]
  },
  {
    text: '技术专栏',
    link: '/columnist/',
    children: [
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
    ]
  },
]
