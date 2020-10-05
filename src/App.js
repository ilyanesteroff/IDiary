import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import MainPage from './components/pages/landing-page/Landing-page'
import {Login as LoginPage} from './components/pages/loginpage/Login'
import { ResetPassword} from './components/pages/reset-pw-page/Reset-password-page'
import * as Contexts from './utils/contexts'
import './App.css'


export default class App extends React.Component{
  state = {
    userId: null,
    firstname: null,
    brightTheme: true,
    error: '',
    token: null,
    loading: false,
    isAuth: false
  }

  abortController = new AbortController()

  componentDidMount() {
    const token = localStorage.getItem('token')
    const expiryDate = localStorage.getItem('expiryDate')
    const firstname = localStorage.getItem('firstname')
    const theme = localStorage.getItem('theme')
    if(theme === 'true') this.setState({brightTheme: true})
    else {
      this.setState({brightTheme: false})
      document.body.style.backgroundColor = '#232323'
    }
    if(!theme) window.localStorage.setItem('theme', this.state.brightTheme)
    if (!token || !expiryDate || !theme || !firstname ) {
      return
    }
    if (new Date(expiryDate) <= new Date()) {
      this.logoutHandler()
      return
    }
    const userId = localStorage.getItem('userId')
    //const remainingMilliseconds =
      //new Date(expiryDate).getTime() - new Date().getTime()
    this.setState({ 
      isAuth: true, 
      token: token, 
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
    localStorage.removeItem('token')
    localStorage.removeItem('expiryDate')
    localStorage.removeItem('userId')
    localStorage.removeItem('firstname')
  }

  loginHandler = (email, password, cb) => {
    this.setState({loading: true})

    const headers = new Headers()
    headers.set('content-type', 'application/json')

    const graphqlQuery = {
      query: `
        query Login($email: String!, $password: String!){
          login(email: $email, password: $password) {
            token
            userId
            firstname
          }
        }
      `,
      variables: {
        email: email,
        password: password
      }
    }

    fetch('https://toodoodooapi.herokuapp.com/graphql', {
      signal: this.abortController.signal,
      method: 'Post',
      headers: headers,
      body: JSON.stringify(graphqlQuery)
    })
      .then(res => res.json())
      .then(res => {
        if(res.errors) throw new Error(res.errors[0].message)
        this.setState({
          userId: res.data.login.userId,
          token: res.data.login.token,
          firstname: res.data.login.firstname,
          isAuth: true,
          loading: false
        })
        window.localStorage.setItem('token', res.data.login.token)
        window.localStorage.setItem('userId', res.data.login.userId)
        window.localStorage.setItem('firstname', res.data.login.firstname)
        //the token expires after 3 days
        const expiryDate = new Date(
          new Date().getTime() + 3 * 24 * 60 * 60 * 1000
        )
        window.localStorage.setItem('expiryDate', expiryDate.toISOString())
        window.location.pathname = '/'
        cb()
      })
      .catch(err => {
        //will be removed in the future
        this.setState({
          error: err.message,
          loading: false
        })
        cb()
      })
  }

  signupHandler = (data) => {
    this.setState({loading: true})

    const headers = new Headers()
    headers.set('content-type', 'application/json')

    const graphqlQuery = {
      query: `
        mutation CreateUser($data: CreateUserInputData!) {
          createUser(userInput: $data) 
        }
      `,
      variables: {
        data: data
      }
    }

    fetch('https://toodoodooapi.herokuapp.com/graphql', {
      signal: this.abortController.signal,
      method: 'POST',
      headers: headers,
      body: JSON.stringify(graphqlQuery)
    })
    .then(res => res.json())
    .then(res => {
      console.log(res)
      if(res.errors) throw new Error(res.errors[0].message)
      this.setState({ loading: false })
    })
    .catch(err => {
      //
      //   !!!!!
      //
      console.log(err)
      this.setState({
        error: err.message,
        loading: false
      })
    })
  }
  
  toggleTheme = () => {
    this.setState({brightTheme: !this.state.brightTheme})
    window.localStorage.setItem('theme', !this.state.brightTheme)
    //because setState sets state asyncronously, but the code here runs syncronously
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
            <Contexts.ErrorContext.Provider value={{value: this.state.error, setError: (message) => this.setState({error: message})}}>
              <Contexts.TokenContext.Provider value={this.state.token}>
                <Contexts.LoadingContext.Provider value={{ value: this.state.loading, setValue: val => this.setState({loading: val})}}>
                  <Contexts.IsAuthContext.Provider value={this.state.isAuth}>
                    <Contexts.LogoutHandlerContext.Provider value={this.logoutHandler}>
                      <Contexts.LoginHandlerContext.Provider value={this.loginHandler}>
                        <Contexts.SignupHandlerContext.Provider value={this.signupHandler}>
                          <Contexts.ToggleThemeContext.Provider value={this.toggleTheme}>
                            <Router>
                              <Switch>
                                <Route exact path="/" render={_ => <MainPage isAuth={this.state.isAuth}/>}/>
                                {!this.state.isAuth &&
                                  <>
                                    <Route path="/login" render={_ => <LoginPage/>}/>
                                    <Route path="/password-reset" render={_ => <ResetPassword/>}/>
                                  </>
                                }
                              </Switch>
                            </Router>
                          </Contexts.ToggleThemeContext.Provider>
                        </Contexts.SignupHandlerContext.Provider>
                      </Contexts.LoginHandlerContext.Provider>
                    </Contexts.LogoutHandlerContext.Provider>
                  </Contexts.IsAuthContext.Provider>
                </Contexts.LoadingContext.Provider>
              </Contexts.TokenContext.Provider>
            </Contexts.ErrorContext.Provider>
          </Contexts.FirstnameContext.Provider>
        </Contexts.UserIdContext.Provider>
      </Contexts.BrightThemeContext.Provider>
    )
  }
}