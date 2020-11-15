

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
            latestMessage {
              author
              text
              writtenAt
              seen
              liked
              to
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