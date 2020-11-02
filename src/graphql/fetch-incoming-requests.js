

export default (page) => { 
  return {
    query: `
      query GetYourRequests($page: Int!) {
        requests(incoming: true page: $page){
          _id
          sender{
            _id
            username
            firstname
            lastname
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