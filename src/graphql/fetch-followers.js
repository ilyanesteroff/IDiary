

export default (page, _id) => { 
  return {
    query: `
      query GetYourFollowers($page: Int!, $id: ID!) {
        followers(page: $page, userId: $id){
          _id
          user {
            _id
            username
            firstname
            lastname
            avatarUrl
          }
          followingSince
        }
      }
    `,
    variables: {
      page: page,
      id: _id
    }
  }
}