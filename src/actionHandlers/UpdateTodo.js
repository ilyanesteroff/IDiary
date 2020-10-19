import updateTodo from '../api/todos/update-todo'
import TodoInputValidator from '../validators/validateTodo'
import TodoUpdateValidator from '../validators/validateTodoUpdate'
import TodoInputFormater from '../utils/formatTodo'


export default async (e, data, token, todoData, setError, setTodoToUpdate, closeModal, unsetTodoData) => {
  e.preventDefault()
  setError('')
  const todoTheSame = TodoUpdateValidator(data, todoData)
  if(todoTheSame){
    closeModal()
    return unsetTodoData()
  }
  const todoValidationFailed = TodoInputValidator(data, setError)
  if(todoValidationFailed) return
  const todoInput = TodoInputFormater(data)
  try {
    const updatedTodo = await updateTodo(todoInput, todoData._id, token)
    if(updatedTodo.data.updateTodo){
      setTodoToUpdate(updatedTodo.data.updateTodo)
      closeModal()
      unsetTodoData()
    }
  } catch {
    setError('Updating todo failed')
  }
}