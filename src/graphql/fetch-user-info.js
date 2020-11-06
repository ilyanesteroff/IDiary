

export default userId => {
  return {
    query: `
      query FetchUserInfo($userId: ID!){
        user(userId: $userId){
          _id
          username
          firstname
          lastname
          public
          lastSeen
          createdAt
          email
          followers
          following
          FullfilledTodos
          ActiveTodos
          website
          company
          about
          relationshipStatus
        }
      }
    `,
    variables: {
      userId: userId
    }
  }
}