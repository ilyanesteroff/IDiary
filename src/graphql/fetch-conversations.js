

export default page => {
  return {
    query: `
      query GetConversations($page: Int!){
        conversations(page: $page){
          _id
          participants {
            _id
            username
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
          unseenMessages
        }
      }
    `,
    variables: {
      page: page
    }    
  }
}