import validator from 'validator'
import { timeUnitsInSeconds as hours } from './time'

export default (todoData) => {
  const { task, timeToComplete, completed } = todoData
  const todoInput = {
    public: todoData.public,
    completed: completed
  }
  let words = task.split(' ')
  let tags = words.filter(word => word.startsWith('#')).map(tag => tag.substring(1))
  tags = tags.filter(tag => validator.isAlphanumeric(tag))
  tags.length > 0 
    ? todoInput.tags = tags
    : todoInput.tags = null
  todoInput.task = words.join(' ')
  timeToComplete !== '' && timeToComplete !== '0'
    ? todoInput.timeToComplete =  parseFloat(timeToComplete).toPrecision(3) * hours.hour * 1000
    : todoInput.timeToComplete = null
  return todoInput
}