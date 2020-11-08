

export default userId => {
  return {
    query: `
      query ViewUser($userId: ID!) {
        user(userId: $userId) {
          FullfilledTodos
          ActiveTodos
          _id 
          public
        }
      }
    `,
    variables: {
      userId: userId
    }
  }
}