import React from 'react'
import Todo from '../todo/index'
import TodoStats from './TodoStats'
import FilterTodos from './FilterTodo'


export default ({todos, refs, changeHandlers}) => {
  return(     
    <>
      <FilterTodos           
        ref={refs} 
        cHandlers={changeHandlers}
      />
      <TodoStats/> 
      <div id="Todos">
        {
          todos.map((todo, index) => 
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
}