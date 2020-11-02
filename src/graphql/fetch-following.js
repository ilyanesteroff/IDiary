

export default (page, _id) => { 
  return {
    query: `
      query GetYourFollowing($page: Int!, $id: ID!) {
        following(page: $page userId: $id){
          _id
          user: {
            _id
            username
            firstname
            lastname
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