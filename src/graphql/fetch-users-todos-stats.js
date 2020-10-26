

export default _ => {
  return {
    query: `
      query GetUsersTodoStats {
        getAuthUser {
          FullfilledTodos
          ActiveTodos
          _id 
          public
        }
      }
    `
  }
}