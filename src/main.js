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
  uri: import.meta.env.VITE_API_URL,
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

const scalars = {
  Date: {
    parseValue: (value) => {
      console.log(value)
      return new Date(value)
    },
    parseLiteral: (value) => {
      console.log(value)
      return new Date(value)
    },
    serialize: (value) => {
      console.log(value)
      return value.toISOString()
    },
  },
}