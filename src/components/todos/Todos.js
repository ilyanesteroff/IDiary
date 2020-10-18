import React, { memo } from 'react'
import Todo from './Todo'
import TodoStats from './TodoStats'
import FilterTodos from './FilterTodo'
import useTodoFilterForm from '../../hooks/Todos/useTodoFilterForm'


export default memo(({todos}) => {
  const [todosToExpose, refs, changeHandlers] = useTodoFilterForm(todos)
  
  return(
    <>
      <FilterTodos 
        ref={refs}
        cHandlers={changeHandlers}
      />
      <TodoStats/> 
      <div id="Todos">
        {
          todosToExpose.map((todo, index) => 
            <Todo 
              todoData={{
                ...todo,
                createdAt: new Date(todo.createdAt)
              }} 
              key={index+'todo'} 
            />
          )
        }
      </div>
    </>
  )
})