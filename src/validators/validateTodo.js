
export default (todoData, setError) => {
  const {task, completed, timeToComplete} = todoData
  if(task.length === 0 || task.trim().length === 0) {
    setError('Cannot create todo without task')
    return true
  }
  if(completed && timeToComplete !== '' && timeToComplete !== '0'){
    setError('Todo cannot be completed and have time limit')
    return true
  }
  return false
}