

export default page => {
  return {
    query: `
      query BlockedUsers($page: Int!){
        blockedUsers(page: $page){
          _id
          userWhoBlocked
          user {
            _id
            username
            firstname
            lastname
          } 
        }
      }
    `,
    variables: {
      page: page
    }
  }
}