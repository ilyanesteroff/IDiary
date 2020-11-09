

export default (page, convId) => {
  return {
    query: `
      query Messages($page: Int!, $convId: ID!){
        messages(page: $page, convId: $convId){
          _id
          conversationID
          author
          text
          writtenAt
          seen
          liked
        }
      }
    `,
    variables: {
      page: page, 
      convId: convId
    }
  }
}