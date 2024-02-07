import { Vuepress } from '@vuepress/client/lib/components/Vuepress'

const routeItems = [
  ["v-8daa1a0e","/",{"title":"首页"},["/index.html","/README.md"]],
  ["v-6ce48554","/contributing.html",{"title":"贡献指南"},["/contributing","/contributing.md"]],
  ["v-6cbc49c0","/dictionary/",{"title":"专属词汇"},["/dictionary/index.html","/dictionary/README.md"]],
  ["v-fffb8e28","/guide/",{"title":"概述"},["/guide/index.html","/guide/README.md"]],
  ["v-4d76029c","/guide/theme.html",{"title":"主题"},["/guide/theme","/guide/theme.md"]],
  ["v-ac7563b8","/technical-columnist/",{"title":"专栏概述"},["/technical-columnist/index.html","/technical-columnist/README.md"]],
  ["v-75f4ae5b","/technical-columnist/algorithm/array-soulution.html",{"title":"数组算法"},["/technical-columnist/algorithm/array-soulution","/technical-columnist/algorithm/array-soulution.md"]],
  ["v-9ede9edc","/technical-columnist/algorithm/link-soulution.html",{"title":"链表算法"},["/technical-columnist/algorithm/link-soulution","/technical-columnist/algorithm/link-soulution.md"]],
  ["v-ce1cc878","/technical-columnist/algorithm/math-soulution.html",{"title":"数学算法"},["/technical-columnist/algorithm/math-soulution","/technical-columnist/algorithm/math-soulution.md"]],
  ["v-73fb2bb8","/technical-columnist/algorithm/search-soulution.html",{"title":"搜索算法"},["/technical-columnist/algorithm/search-soulution","/technical-columnist/algorithm/search-soulution.md"]],
  ["v-1c6cee6e","/technical-columnist/algorithm/sort-soulution.html",{"title":"排序算法"},["/technical-columnist/algorithm/sort-soulution","/technical-columnist/algorithm/sort-soulution.md"]],
  ["v-a52f9eca","/technical-columnist/algorithm/string-soulution.html",{"title":"字符串算法"},["/technical-columnist/algorithm/string-soulution","/technical-columnist/algorithm/string-soulution.md"]],
  ["v-0d0313e4","/technical-columnist/architecture/devops.html",{"title":"DevOps基础"},["/technical-columnist/architecture/devops","/technical-columnist/architecture/devops.md"]],
  ["v-06a86533","/technical-columnist/architecture/dubbo.html",{"title":"RPC架构"},["/technical-columnist/architecture/dubbo","/technical-columnist/architecture/dubbo.md"]],
  ["v-54099922","/technical-columnist/architecture/springboot.html",{"title":"简单工程"},["/technical-columnist/architecture/springboot","/technical-columnist/architecture/springboot.md"]],
  ["v-1b0a21ae","/technical-columnist/architecture/springcloud.html",{"title":"微服务架构"},["/technical-columnist/architecture/springcloud","/technical-columnist/architecture/springcloud.md"]],
  ["v-f8c559bc","/technical-columnist/bigdata/flink.html",{"title":"实时流式计算引擎"},["/technical-columnist/bigdata/flink","/technical-columnist/bigdata/flink.md"]],
  ["v-5e3bb54b","/technical-columnist/bigdata/hadoop.html",{"title":"离线数据计算引擎"},["/technical-columnist/bigdata/hadoop","/technical-columnist/bigdata/hadoop.md"]],
  ["v-5e0d5876","/technical-columnist/bigdata/spark.html",{"title":"快速批处理计算引擎"},["/technical-columnist/bigdata/spark","/technical-columnist/bigdata/spark.md"]],
  ["v-0d0aeecf","/knowledge-base/design-mode/behavior-design-mode.html",{"title":"行为类设计模式"},["/knowledge-base/design-mode/behavior-design-mode","/knowledge-base/design-mode/behavior-design-mode.md"]],
  ["v-be08190e","/knowledge-base/design-mode/build-design-mode.html",{"title":"创建类设计模式"},["/knowledge-base/design-mode/build-design-mode","/knowledge-base/design-mode/build-design-mode.md"]],
  ["v-ed528108","/knowledge-base/design-mode/database-design.html",{"title":"数据库设计范式"},["/knowledge-base/design-mode/database-design","/knowledge-base/design-mode/database-design.md"]],
  ["v-0fc74c2c","/knowledge-base/design-mode/design-philosophy.html",{"title":"软件系统设计原则"},["/knowledge-base/design-mode/design-philosophy","/knowledge-base/design-mode/design-philosophy.md"]],
  ["v-c4a3bf38","/knowledge-base/design-mode/structural-design-mode.html",{"title":"结构类设计模式"},["/knowledge-base/design-mode/structural-design-mode","/knowledge-base/design-mode/structural-design-mode.md"]],
  ["v-49c75d5c","/knowledge-base/environment-setup/database.html",{"title":"关系型数据库"},["/knowledge-base/environment-setup/database","/knowledge-base/environment-setup/database.md"]],
  ["v-5bc344ee","/knowledge-base/environment-setup/devtool.html",{"title":"服务器基础环境"},["/knowledge-base/environment-setup/devtool","/knowledge-base/environment-setup/devtool.md"]],
  ["v-f7dc6152","/knowledge-base/environment-setup/docker.html",{"title":"应用容器引擎"},["/knowledge-base/environment-setup/docker","/knowledge-base/environment-setup/docker.md"]],
  ["v-569204da","/knowledge-base/environment-setup/version-control.html",{"title":"版本控制与管理"},["/knowledge-base/environment-setup/version-control","/knowledge-base/environment-setup/version-control.md"]],
  ["v-64a02972","/knowledge-base/lang-basic/development-specification.html",{"title":"开发规范"},["/knowledge-base/lang-basic/development-specification","/knowledge-base/lang-basic/development-specification.md"]],
  ["v-21777846","/knowledge-base/lang-basic/go-basic.html",{"title":"Go语言基础"},["/knowledge-base/lang-basic/go-basic","/knowledge-base/lang-basic/go-basic.md"]],
  ["v-4c475568","/knowledge-base/lang-basic/java-basic.html",{"title":"Java语言基础"},["/knowledge-base/lang-basic/java-basic","/knowledge-base/lang-basic/java-basic.md"]],
  ["v-1c5eda40","/knowledge-base/lang-basic/mysql-basic.html",{"title":"MySQL 基础"},["/knowledge-base/lang-basic/mysql-basic","/knowledge-base/lang-basic/mysql-basic.md"]],
  ["v-8b028e5c","/knowledge-base/lang-basic/python-basic.html",{"title":"Python语言基础"},["/knowledge-base/lang-basic/python-basic","/knowledge-base/lang-basic/python-basic.md"]],
  ["v-b8d18888","/knowledge-base/lang-basic/scala-basic.html",{"title":"Scala语言基础"},["/knowledge-base/lang-basic/scala-basic","/knowledge-base/lang-basic/scala-basic.md"]],
  ["v-321eb408","/knowledge-base/lang-basic/vue-basic.html",{"title":"Vue基础"},["/knowledge-base/lang-basic/vue-basic","/knowledge-base/lang-basic/vue-basic.md"]],
  ["v-e0fed0c4","/knowledge-base/middleware/cache.html",{"title":"数据缓存"},["/knowledge-base/middleware/cache","/knowledge-base/middleware/cache.md"]],
  ["v-868e7828","/knowledge-base/middleware/distributed-transaction.html",{"title":"分布式事务"},["/knowledge-base/middleware/distributed-transaction","/knowledge-base/middleware/distributed-transaction.md"]],
  ["v-34026c16","/knowledge-base/middleware/message-queue.html",{"title":"消息队列"},["/knowledge-base/middleware/message-queue","/knowledge-base/middleware/message-queue.md"]],
  ["v-15554939","/knowledge-base/middleware/search-engine.html",{"title":"搜索引擎"},["/knowledge-base/middleware/search-engine","/knowledge-base/middleware/search-engine.md"]],
  ["v-3706649a","/404.html",{"title":""},["/404"]],
]

export const pagesRoutes = routeItems.reduce(
  (result, [name, path, meta, redirects]) => {
    result.push(
      {
        name,
        path,
        component: Vuepress,
        meta,
      },
      ...redirects.map((item) => ({
        path: item,
        redirect: path,
      }))
    )
    return result
  },
  [
    {
      name: "404",
      path: "/:catchAll(.*)",
      component: Vuepress,
    }
  ]
)
