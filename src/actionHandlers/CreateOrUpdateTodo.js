import updateTodo from '../api/todos/update-todo'
import createTodo from '../api/todos/create-todo'
import TodoInputValidator from '../validators/validateTodo'
import TodoUpdateValidator from '../validators/validateTodoUpdate'
import TodoInputFormater from '../utils/formatTodo'


export default async (data, setError, setTodo, closeModal, setSubmiting, todoData = null, unsetTodoData = null) => {
  setError('')
  setSubmiting(true)
  if(todoData){
    const todoTheSame = TodoUpdateValidator(data, todoData)
    if(todoTheSame){
      closeModal()
      setSubmiting(false)
      return unsetTodoData()
    }
  }
  const todoValidationFailed = TodoInputValidator(data, setError)
  if(todoValidationFailed) return setSubmiting(false)
  const todoInput = TodoInputFormater(data)
  try {
    let Todo
    todoData
      ? Todo = await updateTodo(todoInput, todoData._id)
      : Todo = await createTodo(todoInput)
    if(Todo.data){
      if(Todo.data.updateTodo){
        setTodo(Todo.data.updateTodo)
        unsetTodoData()
      }
      if(Todo.data.createTodo) setTodo(Todo.data.createTodo)
      closeModal()
      setSubmiting(false)
    } else throw new Error()
  } catch(err) {
    setSubmiting(false)
    setError(`${todoData? 'Updating' : 'Creating'} todo failed`)
  }
}