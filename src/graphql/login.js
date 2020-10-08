
export default (email, password) => {
  return {
    query: `
      query Login($email: String!, $password: String!){
        login(email: $email, password: $password) {
          token
          userId
          firstname
        }
      }
    `,
    variables: {
      email: email,
      password: password 
    }
  }
}