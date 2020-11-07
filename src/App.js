import React from 'react'
import Router from './routes/index'
import headers from './utils/headers'
import { apiLink } from './utils/serverUrl'
import requestEmailAcceptation from './api/acceptEmail'
import clearStorages from './utils/clearStorages'
import * as Contexts from './utils/contexts'
import './styles/App.css'


export default class App extends React.PureComponent{
  state = {
    userId: null,
    firstname: null,
    brightTheme: true,
    isAuth: null
  }

  abortController = new AbortController()

  componentDidMount() {
    const token = localStorage.getItem('token') || sessionStorage.getItem('token')
    const firstname = localStorage.getItem('firstname') || sessionStorage.getItem('firstname')
    const userId = localStorage.getItem('userId') || sessionStorage.getItem('userId')
    const theme = localStorage.getItem('theme')
    if(theme === 'true') this.setState({ brightTheme: true })
    else {
      this.setState({brightTheme: false})
      document.body.style.backgroundColor = '#232323'
    }
    if(!theme) window.localStorage.setItem('theme', this.state.brightTheme)
    if (!token || !theme || !firstname || !userId) {
      return this.setState({ isAuth: false })
    }
    this.setState({ 
      isAuth: true, 
      userId: userId,
      firstname: firstname,
      brightTheme: theme === 'true' ? true : false
    })
  }

  componentWillUnmount(){
    this.abortController.abort()
  }

  logoutHandler = () => {
    this.setState(
      { 
        isAuth: false, 
        token: null,
        userId: null,
        firstname: null
      }
    )
    clearStorages()
  }

  loginHandler = (email, password, session, setError, cb) => {
    fetch(apiLink + '/login', {
      signal: this.abortController.signal,
      method: 'PATCH',
      headers: headers,
      body: JSON.stringify({
        email: email,
        password: password
      })
    })
      .then(res => {
        if(res.status === 404) throw new Error('User does not exist')
        return res.json()
      })
      .then(res => {
        if(res.error) throw new Error(res.error)
        cb()
        const { userId, token, firstname } = res
        this.setState({
          userId: userId,
          firstname: firstname,
          isAuth: true
        })
        if(session) {
          window.sessionStorage.setItem('token', token)
          window.sessionStorage.setItem('userId', userId)
          window.sessionStorage.setItem('firstname', firstname)
        } else {
          window.localStorage.setItem('token', token)
          window.localStorage.setItem('userId', userId)
          window.localStorage.setItem('firstname', firstname)
        }
      })
      .catch(err => {
        cb()
        setError(err.message)
      })
  }

  acceptEmailHandler = (token, failureCb) => {
    requestEmailAcceptation(token, this.abortController.signal)
      .then(res => {
        if(res.error) throw new Error(res.errors)
        clearStorages()
        const { userId, token, firstname } = res
        this.setState({
          userId: userId,
          firstname: firstname,
          isAuth: true
        })
        window.localStorage.setItem('token', token)
        window.localStorage.setItem('userId', userId)
        window.localStorage.setItem('firstname', firstname)
        window.location.pathname = '/'
      })
      .catch(_ => {
        failureCb()
      })
  }
  
  toggleTheme = () => {
    this.setState({brightTheme: !this.state.brightTheme})
    window.localStorage.setItem('theme', !this.state.brightTheme)
    !this.state.brightTheme 
      ? document.body.style.backgroundColor = '#fff'
      : document.body.style.backgroundColor = '#232323'
  }

  render(){
    return( 
      <Contexts.BrightThemeContext.Provider value={this.state.brightTheme}>
        <Contexts.UserIdContext.Provider value={this.state.userId}>
          <Contexts.FirstnameContext.Provider value={{
            firstname: this.state.firstname,
            setFirstname: val => this.setState({ firstname: val })
          }}>
            <Contexts.IsAuthContext.Provider value={this.state.isAuth}>
              <Contexts.SignalContext.Provider value={this.abortController.signal}>
                <Contexts.LogoutHandlerContext.Provider value={this.logoutHandler}>
                  <Contexts.LoginHandlerContext.Provider value={this.loginHandler}>
                    <Contexts.ToggleThemeContext.Provider value={this.toggleTheme}>
                      <Contexts.AcceptEmailContext.Provider value={this.acceptEmailHandler}>
                        {this.state.isAuth !== null &&
                          <Router isAuth={this.state.isAuth}/>
                        }
                      </Contexts.AcceptEmailContext.Provider>
                    </Contexts.ToggleThemeContext.Provider>
                  </Contexts.LoginHandlerContext.Provider>
                </Contexts.LogoutHandlerContext.Provider>
              </Contexts.SignalContext.Provider>
            </Contexts.IsAuthContext.Provider>
          </Contexts.FirstnameContext.Provider>
        </Contexts.UserIdContext.Provider>
      </Contexts.BrightThemeContext.Provider>
    )
  }
}