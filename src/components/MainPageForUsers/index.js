import React, { useState } from 'react'
import TodosPage from './TodosPage'
import UsersPage from './Users'
import CurrentOption from './CurrentOption'
import Search from './Input'
import { faTasks, faUsers } from '@fortawesome/free-solid-svg-icons'


export default _ => {
  const [ input, setInput ] = useState('')
  const [ currentOption, setCurrentOption ] = useState('')

  const swapCurrentOption = name => {
    if(currentOption !== name)
      setCurrentOption(name)
  }

  return(
    <>
      <Search currentOption={currentOption} onChange={e => setInput(e.target.value)}/>
      <h1 id="SearchOptions">
        <CurrentOption icon={ faTasks } currentOption={currentOption} option="todos" clickHandler={val => swapCurrentOption(val)}/>
        <CurrentOption icon={ faUsers } currentOption={currentOption} option="users" clickHandler={val => swapCurrentOption(val)}/>
      </h1>
      {currentOption === 'todos' && input.trim().length > 0 &&
        <TodosPage tag={input.trim().toLowerCase()}/>
      }
      {currentOption === 'users' && input.trim().length > 0 &&
        <UsersPage username={input.trim().toLowerCase()}/>
      }
      {currentOption === '' &&
        <h3>At this page you can search for users and todos</h3>
      }
    </>
  )
}