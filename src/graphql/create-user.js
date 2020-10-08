

export default (data) => {
  return {
    query: `
      mutation CreateUser($data: CreateUserInputData!) {
        createUser(userInput: $data) 
      }
    `,
    variables: {
      data: data
    }
  }
}