import React, { useState, memo } from 'react'
import { SetTodoToDeleteContext } from '../../utils/contexts'
import Todo from './Todo'
import TodoStats from './TodoStats'
import FilterTodos from './FilterTodo'
import useTodoFilterForm from '../../hooks/Todos/useTodoFilterForm'


export default memo(({activeTodos, fullfilledTodos, todos}) => {
  const [todoToDelete, setTodoToDelete] = useState(null)
  const [todoStats, setTodoStats] = useState({
    completed: fullfilledTodos,
    active: activeTodos
  })
  const [todosToExpose, refs, changeHandlers] = useTodoFilterForm(todos, todoToDelete, _ => setTodoToDelete(null))
  
  return(
    <>
      <FilterTodos 
        ref={refs}
        cHandlers={changeHandlers}
      />
      <TodoStats 
        activeTodos={todoStats.active} 
        fullfilledTodos={todoStats.completed}
      /> 
      <div id="Todos">
        {
          todosToExpose.map((todo, index) => 
            <SetTodoToDeleteContext.Provider key={'ctx'+index} value={todoId => {
              setTodoToDelete(todoId)
              todo.completed
                ? setTodoStats({...todoStats, completed: todoStats.completed - 1})
                : setTodoStats({ ...todoStats, active: todoStats.active - 1})
            }}>
              <Todo 
                todoData={{
                  ...todo,
                  createdAt: new Date(todo.createdAt)
                }} 
                key={index+'todo'} 
              />
            </SetTodoToDeleteContext.Provider>
          )
        }
      </div>
    </>
  )
})