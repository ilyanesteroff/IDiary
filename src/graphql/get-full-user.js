

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
        blockedUsers
        FullfilledTodos
        ActiveTodos
        requestsTo
        requestsFrom
        createdAt
        public
        phone 
        website
        company
        about
        relationshipStatus
        conversations
      }
    }`
}
