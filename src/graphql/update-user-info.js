

export default userInput => {
  return {
    query: `
      mutation UpdateUserInfo($data: UpdateUserInfoData) {
        updateUserInfo(userInput: $data) {
          website
          company
          about
          relationshipStatus
        }
      }
    `,
    variables: {
      data: userInput
    }
  }
}