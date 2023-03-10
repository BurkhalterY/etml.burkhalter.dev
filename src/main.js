import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
} from "@apollo/client/core"
import { DefaultApolloClient } from "@vue/apollo-composable"
import { createApp, h, provide } from "vue"
import App from "./App.vue"
import "./index.css"
import router from "./router"

const httpLink = createHttpLink({
  uri: "http://localhost:8000/graphql",
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
  .mount("#app")
