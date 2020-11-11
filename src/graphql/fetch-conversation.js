

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
          messages {
            _id
            author
            text
            writtenAt
            seen
            liked
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