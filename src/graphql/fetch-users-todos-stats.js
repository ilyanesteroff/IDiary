

export default _ => {
  return {
    query: `
      query GetUsersTodoStats {
        user {
          FullfilledTodos
          ActiveTodos
          _id
          public
        }
      }
      `
    }
}