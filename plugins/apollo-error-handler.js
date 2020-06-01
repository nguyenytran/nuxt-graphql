export default (
  { graphQLErrors, networkError, operation, forward },
  nuxtContext
) => {
  console.log(networkError, graphQLErrors)
}
