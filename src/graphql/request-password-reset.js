
export default email => {
  return {
    query: `mutation RequestPasswordReset($email: String!) {
        requestPasswordReset(email: $email)
      }`,
    variables: {
      email: email
    }
  }
}