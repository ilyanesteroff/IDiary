

export default (todoInput, todoId) => {
  return {
    query: `mutation UpdateTodo($data: UpdateTodoInputData $todoId: ID!){
      updateTodo(todoInput: $data, todoId: $todoId){
        _id,
        task
        completed
        createdAt
        timeToComplete
        public
        tags
        imageUrl
      }
    }`,
    variables: {
      data: todoInput,
      todoId: todoId 
    }
  }
}