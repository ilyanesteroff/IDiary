import { createContext } from 'react'

//for app.js

export const BrightThemeContext = createContext(false)

export const FirstnameContext = createContext({
  firstname: null, 
  setFirstname: _ => {}
})

export const UserIdContext = createContext(null)

export const ErrorContext = createContext({
  value: false,
  setError: _ => {}
})

export const TokenContext = createContext(null)

export const LoadingContext = createContext({
  value: false,
  setValue: _ => {}
})

export const IsAuthContext = createContext(false)

export const LogoutHandlerContext = createContext(_ => {})

export const LoginHandlerContext = createContext(_ => {})

export const AcceptEmailContext = createContext(_ => {})

export const ToggleThemeContext = createContext(_ => {}) 

export const SignalContext = createContext(null)

export const SetTodoToDeleteContext = createContext(_ => {})

export const YourTodoContext = createContext(null)

export const CloseModalContext = createContext(_ => {})

export const SetNewTodoContext = createContext(_ => {})

export const TodoStatsContext = createContext({})
//