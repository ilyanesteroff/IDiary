

export default username => {
  return {
    query: `
      query FetchUserInfo($username: String!){
        user(username: $username){
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
      username
    }
  }
}