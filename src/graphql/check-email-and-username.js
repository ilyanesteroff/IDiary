
export default (isEmail, val) => {
  return {
    query: `
      query CheckEmailAndUsername($email: String!, $username: String!) {
        checkEmailAndUsername(email: $email, username: $username)
      }
    `,
    variables: {
      email: isEmail ? val : ' ',
      username: isEmail ? ' ' : val
    }
  }
}