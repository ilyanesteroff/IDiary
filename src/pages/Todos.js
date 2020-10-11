import React, { useState, useEffect, useContext, useRef } from 'react'
import Navbar from '../components/navbar/index'
import Spinner from '../components/spiners/BigSpinner'
import AddTodoBtn from '../components/todos/AddTodoBtn'
import { TokenContext, BrightThemeContext } from '../utils/contexts'
import FetchTodos from '../api/todos/fetch-todos'
import FetchTodoStats from '../api/todos/fetch-todo-stats'


export default _ => {
  document.title = 'TooDooDoo - Your Todos'
  const [mounted, setMounted] = useState(false)
  const [fullfilledTodos, setFullfilledTodos] = useState(null)
  const [activeTodos, setActiveTodos] = useState(null)
  const [page, setPage] = useState(1)
  const [todos, setTodos] = useState([])
  const [loadingTodos, setLoadingTodos] = useState(false)
  
  const Token = _ => useContext(TokenContext)

  const token = useRef(Token())

  const definePosition = e => {
    e.stopPropagation()
  }

  const LoadTodos = _ => {
    if(!fullfilledTodos && !activeTodos)
      return FetchTodoStats(token.current)
        .then(res => {
          console.log(res)
          if(res.data.user.FullfilledTodos + res.data.user.ActiveTodos !== 0){
            setActiveTodos(res.data.user.ActiveTodos)
            setFullfilledTodos(res.data.user.FullfilledTodos)
            return FetchTodos(token.current, page)
              .then(res => {
                console.log(res)
                if(!mounted) setMounted(true)
                setLoadingTodos(false)
                if(res.data.todos.length !== 0){
                  setTodos(...todos, ...res.data.todos)
                }
              })
              .catch(err => console.log(err.message))
          } else {
            if(!mounted) setMounted(true)
            setLoadingTodos(false)
          }
        })
    else return FetchTodos(token.current, page)
      .then(res => {
        console.log(res)
        if(!mounted) setMounted(true)
        setLoadingTodos(false)
        if(res.data.todos.length !== 0){
          setTodos(...todos, ...res.data.todos)
        }
      })
  }

  useEffect(_ => {
    window.addEventListener('scroll', definePosition)
    return window.removeEventListener('scroll', definePosition)
  })

  useEffect(_ => {
    setLoadingTodos(true)
    LoadTodos()
  }, [page])

  return(
    <>
      <Navbar/>
      <BrightThemeContext.Consumer>
        {theme =>
          <div id="TodosPage" className={`${theme? 'Bright' : 'Dark'}Page Page`}>
            <h1>Your Todos</h1>
             {mounted && page === 1 && todos.length === 0 &&
               <h3>It seems like you have no todos yet</h3>
             }
             {loadingTodos && <Spinner/>}
             <AddTodoBtn clickHandler/>
          </div>
        }
      </BrightThemeContext.Consumer>
    </>
  )
}