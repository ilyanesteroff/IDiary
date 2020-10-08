

export default token => { 
  return {
    query: `
      query IfPwResetIsStillActual($token: String!) {
        getResetPassword(token: $token)
      }
    `,
    variables: {
      token: token
    }
  }
}
