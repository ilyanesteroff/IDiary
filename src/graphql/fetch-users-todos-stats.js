

export default userId => {
  return {
    query: `
      query ViewUser($userId: ID!) {
        userByID(userId: $userId) {
          FullfilledTodos
          ActiveTodos
          _id 
          public
        }
      }
    `,
    variables: {
      userId
    }
  }
}