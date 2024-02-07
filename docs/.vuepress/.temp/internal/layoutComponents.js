import { defineAsyncComponent } from 'vue'

export const layoutComponents = {
  "404": defineAsyncComponent(() => import("/Users/kong/workspace/xinrui-doc/packages/@vuepress/theme-default/lib/client/layouts/404.vue")),
  "Layout": defineAsyncComponent(() => import("/Users/kong/workspace/xinrui-doc/packages/@vuepress/theme-default/lib/client/layouts/Layout.vue")),
}
