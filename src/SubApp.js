import React, { useState, useEffect, memo } from 'react'
import Router from './routes/index'
import Head from './Head'
import login from './api/login'
import requestEmailAcceptation from './api/acceptEmail'
import clearStorages from './utils/clearStorages'
import * as Contexts from './utils/contexts'
import _fetch from './api/fetch'
import userStats from './graphql/get-user-stats'


export default memo(({ signal }) => {
  const [ userId, setUserId ] = useState(null)
  const [ firstname, setFirstname ] = useState(null)
  const [ isAuth, setIsAuth ] = useState(null)
  const [ brightTheme, setBrightTheme ] = useState(true)
  const [ incomingReqs, setIncomingReqs ] = useState(0)
  const [ unseenMsgs, setUnseenMsgs ] = useState(0)
  
  useEffect(_ => {
    const token = localStorage.getItem('token') || sessionStorage.getItem('token')
    const firstname = localStorage.getItem('firstname') || sessionStorage.getItem('firstname')
    const userId = localStorage.getItem('userId') || sessionStorage.getItem('userId')
    const theme = localStorage.getItem('theme')
    if(theme === 'true') setBrightTheme(true)
    else {
      setBrightTheme(false)
      document.body.style.backgroundColor = '#232323'
    }
    if(!theme) window.localStorage.setItem('theme', brightTheme)
    if (!token || !theme || !firstname || !userId) {
      return setIsAuth(false)
    }
    setIsAuth(true)
    setUserId(userId)
    setFirstname(firstname)
    setBrightTheme(theme === 'true' ? true : false)
    fetchUserStats()
    // eslint-disable-next-line
  }, [])

  useEffect(_ => {
    window.addEventListener('storage', storageObserver)
    return _ => {
      window.removeEventListener('storage', storageObserver)
    }
  })

  const storageObserver = e => {
    if(!e.key){
      logoutHandler()
      window.location.pathname = '/login'
    }
  }

  const fetchUserStats = _ => {
    _fetch(userStats)
      .then(res => {
        if(res.userStats){
          setUnseenMsgs(res.userStats.unseenMessages)
          setIncomingReqs(res.userStats.incomingRequests)
        }
      })
  }

  const logoutHandler = () => {
    setIsAuth(false)
    setUserId(null)
    setFirstname(null)
    clearStorages()
  }

  const loginHandler = (email, password, session, setError, cb) => {
    login(signal, email, password)
      .then(res => {
        if(res.error) throw new Error(res.error)
        cb()
        return res
      })
      .then(res => {        
        const { userId, token, firstname } = res
        setUserId(userId)
        setFirstname(firstname)
        if(session) {
          window.sessionStorage.setItem('token', token)
          window.sessionStorage.setItem('userId', userId)
          window.sessionStorage.setItem('firstname', firstname)
        } else {
          window.localStorage.setItem('token', token)
          window.localStorage.setItem('userId', userId)
          window.localStorage.setItem('firstname', firstname)
        }
        return 
      })
      .then(_ => {
        setIsAuth(true)        
        fetchUserStats()
      })
      .catch(err => {
        cb()
        setError(err.message)
      })
  }

  const acceptEmailHandler = (token, failureCb) => {
    requestEmailAcceptation(token, signal)
      .then(res => {
        if(res.error) throw new Error(res.errors)
        clearStorages()
        const { userId, token, firstname } = res
        setUserId(userId)
        setFirstname(firstname)
        setIsAuth(true)
        window.localStorage.setItem('token', token)
        window.localStorage.setItem('userId', userId)
        window.localStorage.setItem('firstname', firstname)
        window.location.pathname = '/'
      })
      .catch(_ => {
        failureCb()
      })
  }

  const toggleTheme = () => {
    setBrightTheme(!brightTheme)
    window.localStorage.setItem('theme', !brightTheme)
    !brightTheme 
      ? document.body.style.backgroundColor = '#fff'
      : document.body.style.backgroundColor = '#232323'
  }

  return( 
    <Contexts.BrightThemeContext.Provider value={brightTheme}>
      <Contexts.UserIdContext.Provider value={userId}>
        <Contexts.FirstnameContext.Provider value={{
          firstname: firstname,
          setFirstname: val => setFirstname(val)
        }}>
          <Contexts.IsAuthContext.Provider value={isAuth}>
            <Contexts.IncomingReqsContext.Provider value={{ requests: incomingReqs, set: val => setIncomingReqs(val) }}>
              <Contexts.UnseenMsgsContext.Provider value={{ messages: unseenMsgs, set: val => setUnseenMsgs(val) }}>
                <Contexts.LogoutHandlerContext.Provider value={logoutHandler}>
                  <Contexts.LoginHandlerContext.Provider value={loginHandler}>
                    <Contexts.ToggleThemeContext.Provider value={toggleTheme}>
                      <Contexts.AcceptEmailContext.Provider value={acceptEmailHandler}>
                        {isAuth !== null &&
                          <>
                            <Head/>
                            <Router isAuth={isAuth}/>
                          </>
                        }
                      </Contexts.AcceptEmailContext.Provider>
                    </Contexts.ToggleThemeContext.Provider>
                  </Contexts.LoginHandlerContext.Provider>
                </Contexts.LogoutHandlerContext.Provider>
              </Contexts.UnseenMsgsContext.Provider>
            </Contexts.IncomingReqsContext.Provider>
          </Contexts.IsAuthContext.Provider>
        </Contexts.FirstnameContext.Provider>
      </Contexts.UserIdContext.Provider>
    </Contexts.BrightThemeContext.Provider>
  )
})