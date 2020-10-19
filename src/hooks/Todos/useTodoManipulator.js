import { useState, useEffect } from 'react'

export default (todos, activeTodos, completedTodos) => {
  const [newTodo, setNewTodo] = useState(null)
  const [todoToDelete, setTodoToDelete] = useState(null)
  const [todoToUpdate, setTodoToUpdate] = useState(null)
  const [sortedTodos, setSortedTodos] = useState(todos)
  const [active, setActive] = useState(activeTodos)
  const [completed, setCompleted] = useState(completedTodos)

  useEffect(_ => {
    setActive(activeTodos)
    setCompleted(completedTodos)
    setSortedTodos(todos)
  }, [activeTodos, completedTodos, todos])

  useEffect(_ => {
    if(newTodo !==  null){
      setSortedTodos([newTodo, ...sortedTodos])
      newTodo.completed
        ? setCompleted(completed + 1)
        : setActive(active + 1)
      setNewTodo(null)
    }
    // eslint-disable-next-line
  }, [newTodo])

  useEffect(_ => {
    if(todoToDelete !== null){
      const indexOfTodoToDelete = sortedTodos.findIndex(t => t._id === todoToDelete)
      sortedTodos[indexOfTodoToDelete].completed
        ? setCompleted(completed - 1)
        : setActive(active - 1)
      setSortedTodos(sortedTodos.filter(t => t._id !== todoToDelete))
      setTodoToDelete(null)
    }
    // eslint-disable-next-line
  }, [todoToDelete])

  useEffect(_ => {
    if(todoToUpdate !== null) {
      const indexOfTodoToUpdate = sortedTodos.findIndex(t => t._id === todoToUpdate._id)
      if(sortedTodos[indexOfTodoToUpdate].completed !== todoToUpdate.completed){
        if(todoToUpdate.completed){
          setActive(active - 1)
          setCompleted(completed + 1)
        } else {
          setActive(active + 1)
          setCompleted(completed - 1)
        }
      }
      const updatedTodos = sortedTodos
      updatedTodos[indexOfTodoToUpdate] = todoToUpdate
      setSortedTodos(updatedTodos)
      setTodoToUpdate(null)
    }
    // eslint-disable-next-line
  }, [todoToUpdate])

  return [sortedTodos, setNewTodo, setTodoToDelete, setTodoToUpdate, active, completed]
}