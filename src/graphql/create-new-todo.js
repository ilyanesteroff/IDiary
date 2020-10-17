

export default todoInput => {
  return {
    query: `mutation CreateTodo($data: CreateTodoInputData){
      createTodo(todoInput: $data){
        _id,
        task
        completed
        createdAt
        timeToComplete
        public
        tags
      }
    }`,
    variables: {
      data: todoInput 
    }
  }
}