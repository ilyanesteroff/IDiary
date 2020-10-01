import { createContext } from 'react'

export const BrightThemeContext = createContext(false)

export const userIdContext = createContext(null)

export const errorContext = createContext({
  value: false,
  setError: _ => {}
})

export const tokenContext = createContext(null)

export const loadingContext = createContext({
  value: false,
  setValue: _ => {}
})

export const isAuthContext = createContext(false)

export const logoutHandlerContext = createContext(_ => {})

export const loginHandlerContext = createContext(_ => {})

export const signupHandlerContext = createContext(_ => {})

export const toggleThemeContext = createContext(_ => {}) 