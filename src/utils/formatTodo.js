import { timeUnitsInSeconds as hours } from './time'

export default (todoData) => {
  const { task, timeToComplete, completed } = todoData
  const todoInput = {
    public: todoData.public,
    completed: completed
  }
  let words = task.split(' ')
  const tags = words.filter(word => word.startsWith('#')).map(tag => tag.substring(1))
  if(tags.length > 0) todoInput.tags = tags
  words = words.map(word => {
    return word.startsWith('#')
      ? word.substring(1)
      : word
  })
  todoInput.task = words.join(' ')
  if(timeToComplete !== '' && timeToComplete !== '0') todoInput.timeToComplete =  parseFloat(timeToComplete).toPrecision(3) * hours.hour * 1000
  return todoInput
}