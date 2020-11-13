

export default username => {
  return {
    query: `
      query Conversation($username: String!){
        conversation(username: $username){
          conversation {
            _id
            participants {
              username
              firstname
              lastname
              _id
            }
            updatedAt
          }
          exists
          ifUserAllowed
        }
      }
    `,
    variables: {
      username: username
    }
  }
}