import { DefaultApolloClient } from "@vue/apollo-composable"
import { createPinia } from "pinia"
import { createApp, h, provide } from "vue"
import App from "./App.vue"
import apolloClient from "./apollo"
import "./index.css"
import router from "./router"

createApp({
  setup() {
    provide(DefaultApolloClient, apolloClient)
  },
  render: () => h(App),
})
  .use(router)
  .use(createPinia())
  .mount("#app")
