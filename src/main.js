import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
} from "@apollo/client/core"
import { DefaultApolloClient } from "@vue/apollo-composable"
import { createPinia } from "pinia"
import { createApp, h, provide } from "vue"
import App from "./App.vue"
import "./index.css"
import router from "./router"

const httpLink = createHttpLink({
  uri: "http://localhost:8000/graphql",
  fetch: (uri, options) => {
    const token = localStorage.getItem("token")
    if (token) {
      options.headers["Authorization"] = token
    }
    return fetch(uri, options)
  },
})
const cache = new InMemoryCache()
const apolloClient = new ApolloClient({
  link: httpLink,
  cache,
})

createApp({
  setup() {
    provide(DefaultApolloClient, apolloClient)
  },
  render: () => h(App),
})
  .use(router)
  .use(createPinia())
  .mount("#app")
