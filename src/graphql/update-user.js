

export default userInput => {
    return {
      query: `
        mutation UpdateUser($data: UpdateUserInputData) {
          updateUser(userInput: $data) {
            username
            firstname
            lastname
          }
        }
      `,
      variables: {
        data: userInput
      }
    }
  }