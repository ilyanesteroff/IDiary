
export default token => {
  return {
    query: `
      mutation AcceptEmail($token: ID!) {
        acceptEmail(token: $token){
          userId
          firstname
          token
        }
      }
    `,
    variables: {
      token: token
    }
  }
}