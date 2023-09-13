import {
  ApolloClient,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client/core"
import { CachePersistor } from "apollo3-cache-persist"

const SCHEMA_VERSION = "1"

const getApolloClient = async () => {
  const httpLink = createHttpLink({
    uri: import.meta.env.VITE_API_URL,
    fetch: (uri, options) => {
      const token = localStorage.getItem("token")
      if (token) options.headers["Authorization"] = token
      return fetch(uri, options)
    },
  })

  const cache = new InMemoryCache()

  const persistor = new CachePersistor({
    cache,
    storage: window.localStorage,
  })

  const currentVersion = window.localStorage.getItem("apollo-schema-version")
  if (currentVersion === SCHEMA_VERSION) {
    await persistor.restore()
  } else {
    await persistor.purge()
    window.localStorage.setItem("apollo-schema-version", SCHEMA_VERSION)
  }

  const client = new ApolloClient({
    link: httpLink,
    cache,
  })

  return client
}

export default getApolloClient()
