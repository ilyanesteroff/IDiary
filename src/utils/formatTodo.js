import validator from 'validator'
import getPresignedUrl from '../api/get-presigned-url'
import loadPic from '../api/send-pic'
import { timeUnitsInSeconds as hours } from './time'


export default async todoData => {
  const { task, timeToComplete, completed } = todoData
  const todoInput = {
    public: todoData.public,
    completed: completed
  }
  let words = task.split(' ')
  let tags = words.filter(word => word.startsWith('#')).map(tag => tag.substring(1).toLowerCase())
  tags = Array.from(new Set(tags.filter(tag => validator.isAlphanumeric(tag))))
  tags.length > 0 
    ? todoInput.tags = tags
    : todoInput.tags = null
  todoInput.task = words.join(' ')
  timeToComplete !== '' && timeToComplete !== '0'
    ? todoInput.timeToComplete =  parseFloat(timeToComplete).toPrecision(3) * hours.hour * 1000
    : todoInput.timeToComplete = null

  if(todoData.image && todoData.image !== 'remove'){
    const creds = await getPresignedUrl()
    const success = await loadPic(todoData.image, creds.url)
    if(success) todoInput.imageUrl = creds.key
  }
  if(todoData.image === 'remove') todoInput.imageUrl = todoData.image
  
  return todoInput
}