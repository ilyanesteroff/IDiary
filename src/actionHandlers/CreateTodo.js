import createTodo from '../api/todos/create-todo'
import TodoInputValidator from '../validators/validateTodo'
import TodoInputFormater from '../utils/formatTodo'


export default async (e, data, token, setError, setNewTodo, closeModal) => {
  e.preventDefault()
  setError('')
  const todoValidationFailed = TodoInputValidator(data, setError)
  if(todoValidationFailed) return
  const todoInput = TodoInputFormater(data)
  try {
    const newTodo = await createTodo(todoInput, token)
    if(newTodo.data.createTodo){
      setNewTodo(newTodo.data.createTodo)
      closeModal()
    }
  } catch {
    setError('Creating todo failed')
  }
}