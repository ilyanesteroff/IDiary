

export default (data, todoData) => {
  return data.task.trim() === todoData.task.trim() && 
    data.public === todoData.public && 
    data.completed === todoData.completed && 
    (data.timeToComplete === todoData.timeToComplete || 
    (data.timeToComplete === '' && todoData.timeToComplete === null))
}