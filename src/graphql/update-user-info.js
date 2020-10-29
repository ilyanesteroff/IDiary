

export default userInput => {
  return {
    query: `
      mutation UpdateUserInfo($data: UpdatedUserInfoData!) {
        updateUserSettings(userInput: $data) {
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