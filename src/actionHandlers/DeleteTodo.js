import deleteTodo from '../api/todos/delete-todo'

export default async (todoId, cb) => {
  const todoDeleted = await deleteTodo(todoId)
  todoDeleted.data.deleteTodo && cb()
}