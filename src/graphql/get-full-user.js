

export default {
  query: `
    query GetUsersTodoStats {
      getAuthUser {
        _id
        username
        firstname
        lastname
        followers
        following
        FullfilledTodos
        ActiveTodos
        requestsTo
        requestsFrom
        createdAt
        public
      }
    }`
}
