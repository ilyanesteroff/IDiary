import createTodo from '../api/todos/create-todo'

export default async (data, token, setError) => {
  //ValidateData
  console.log('executed')
  try {
    const todoData = {
      task: data.task,
      completed: data.completed,
      public: data.public
    }
    const newTodo = await createTodo(todoData, token)
    if(newTodo.data.createTodo) return newTodo.data.createTodo
    else throw new Error()
  } catch(err){
    console.log(err.message)
    return setError('Failed creating todo')
  }
}