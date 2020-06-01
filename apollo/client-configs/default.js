import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'

const GRAPHCMS_API = 'http://graphql.test/graphql'

export default () => ({
  link: new HttpLink({ uri: GRAPHCMS_API }),
  httpLinkOptions: {
    fetchOptions: {
      mode: 'cors'
    },
    credentials: 'omit'
  },
  persisting: false,
  websocketsOnly: false,
  cache: new InMemoryCache(),
  defaultHttpLink: false
})
