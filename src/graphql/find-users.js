

export default (page, username) => {
  return {
    query: `
      query FindUsers( $page: Int! $username: String! ){
        findUsers(username: $username, page: $page){
          _id
          username
          firstname
          lastname
        }
      }
    `,
    variables: {
      page: page,
      username: username
    }
  }
}