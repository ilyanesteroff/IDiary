import deleteTodo from '../api/todos/delete-todo'

export default async (todoId, token, cb) => {
  const todoDeleted = await deleteTodo(todoId, token)
  todoDeleted.data.deleteTodo && cb()
}