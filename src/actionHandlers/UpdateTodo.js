import updateTodo from '../api/todos/update-todo'
import TodoInputValidator from '../validators/validateTodo'
import TodoInputFormater from '../utils/formatTodo'


export default async (e, data, token, todoId, setError, setTodoToUpdate, closeModal) => {
  e.preventDefault()
  setError('')
  const todoValidationFailed = TodoInputValidator(data, setError)
  if(todoValidationFailed) return
  const todoInput = TodoInputFormater(data)
  try {
    const updatedTodo = await updateTodo(todoInput, todoId, token)
    if(updatedTodo.data.updateTodo){
      setTodoToUpdate(updatedTodo.data.updateTodo)
      closeModal()
    }
  } catch {
    setError('Updating todo failed')
  }
}