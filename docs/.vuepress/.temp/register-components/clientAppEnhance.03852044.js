import { defineAsyncComponent } from 'vue'

export default ({ app }) => {
  app.component("GaugeCar", defineAsyncComponent(() => import("/Users/kong/workspace/xinrui-doc/docs/.vuepress/components/GaugeCar.vue"))),
  app.component("NpmBadge", defineAsyncComponent(() => import("/Users/kong/workspace/xinrui-doc/docs/.vuepress/components/NpmBadge.vue")))
}
