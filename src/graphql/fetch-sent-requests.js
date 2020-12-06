

export default (page) => { 
  return {
    query: `
      query GetYourRequests($page: Int!) {
        requests(incoming: false page: $page){
          _id
          receiver {
            _id
            username
            firstname
            lastname
            avatarUrl
          }
          sentAt
        }
      }
    `,
    variables: {
      page: page
    }
  }
}