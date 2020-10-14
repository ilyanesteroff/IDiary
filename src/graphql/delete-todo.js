
export default todoId => {
  return {
    query: `
      mutation {
        deleteTodo(todoId: "${todoId}") 
      }
    `
  }
}