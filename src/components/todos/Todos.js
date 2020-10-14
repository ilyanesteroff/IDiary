import React from 'react'
import Todo from './Todo'
import TodoStats from './TodoStats'
import FilterTodos from './FilterTodo'
import useTodoFilterForm from '../../hooks/Todos/useTodoFilterForm'


export default ({activeTodos, fullfilledTodos, todos, theme}) => {
  const [todosToExpose, refs, changeHandlers] = useTodoFilterForm(todos)

  return(
    <>
      <TodoStats activeTodos={activeTodos} fullfilledTodos={fullfilledTodos} theme={theme}/> 
      <FilterTodos 
        theme={theme}
        ref={refs}
        cHandlers={changeHandlers}
      />
      <div id="Todos">
        {
          todosToExpose.map((todo, index) => 
            <Todo 
              todoData={{
                ...todo,
                createdAt: new Date(todo.createdAt)
              }} 
              key={index+'todo'} 
              theme={theme}
            />
          )
        }
      </div>
    </>
  )
}