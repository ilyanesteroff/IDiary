

export default (token, newPw) => {
  return {
    query: `
      mutation setNewPw($token: String!, $newPassword: String!) {
        setNewPassword(token: $token, newPassword: $newPassword)
      }
    `,
    variables: {
      token: token,
      newPassword: newPw
    }
  }
}