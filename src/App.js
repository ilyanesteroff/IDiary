import React from 'react'
import { Router, Switch } from 'react-router'
import './App.css'
import Navbar from './components/navbar/Navbar'
import * as Contexts from './utils/contexts'


export default class App extends React.Component{
  state = {
    userId: null,
    brightTheme: true,
    error: {error: false, message: ''},
    token: null,
    loading: false,
    isAuth: false
  }

  componentDidMount() {
    const token = localStorage.getItem('token')
    const expiryDate = localStorage.getItem('expiryDate')
    const theme = localStorage.getItem('theme')
    if (!token || !expiryDate || !theme) {
      return
    }
    if (new Date(expiryDate) <= new Date()) {
      this.logoutHandler()
      return
    }
    const userId = localStorage.getItem('userId')
    const remainingMilliseconds =
      new Date(expiryDate).getTime() - new Date().getTime()
    this.setState({ 
      isAuth: true, 
      token: token, 
      userId: userId,
      brightTheme: theme === 'dark' ? true : false
    })
    this.setAutoLogout(remainingMilliseconds)
  }

  logoutHandler = () => {
    this.setState({ isAuth: false, token: null })
    localStorage.removeItem('token')
    localStorage.removeItem('expiryDate')
    localStorage.removeItem('userId')
  }

  loginHandler = (email, password) => {
    this.setState({loading: true})

    const headers = new Headers()
    headers.set('content-type', 'application/json')

    const graphqlQuery = {
      query: `
        query Login($email: String!, $password: String!){
          login(email: $email, password: $password) {
            token
            userId
          }
        }
      `,
      variables: {
        email: email,
        password: password
      }
    }

    fetch('https://toodoodooapi.herokuapp.com/graphql', {
      method: 'Post',
      headers: headers,
      body: JSON.stringify(graphqlQuery)
    })
      .then(res => res.json())
      .then(res => {
        if(res.errors) throw new Error(res.errors[0].message)
        this.setState({
          userId: res.data.userId,
          token: res.data.token,
          isAuth: true,
          loading: false
        })
        window.localStorage.setItem('token', this.state.token)
        window.localStorage.setItem('userId', this.state.userId)
        //the token expires after 3 days
        const expiryDate = new Date(
          new Date().getTime() + 3 * 24 * 60 * 60 * 1000
        )
        localStorage.setItem('expiryDate', expiryDate.toISOString())
      })
      .catch(err => {
        //will be removed in the future
        console.log(err)
        this.setState({
          error: {error: true, message: err.message},
          loading: false
        })
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
      method: 'POST',
      headers: headers,
      body: JSON.stringify(graphqlQuery)
    })
    .then(res => res.json())
    .then(res => {
      if(res.errors) throw new Error(res.errors[0].message)
      this.setState({loading: false})
    })
    .catch(err => {
      //
      //   !!!!!
      //
      console.log(err)
      this.setState({
        error: {error: true, message: err.message},
        loading: false
      })
    })
  }
  
  toggleTheme = () => {
    this.setState(prevState => !prevState.brightTheme)
    window.localStorage.setItem('theme', this.state.brightTheme? 'bright' : 'dark')
  }

  render(){
    return(
      <Contexts.BrightThemeContext.Provider value={this.state.brightTheme}>
        <Contexts.userIdContext.Provider value={this.state.userId}>
          <Contexts.errorContext.Provider value={{value: this.state.error, setError: (isError, message = '') => this.setState({error: { error: isError, message: message}})}}>
            <Contexts.tokenContext.Provider value={this.state.token}>
              <Contexts.loadingContext.Provider value={{ value: this.state.loading, setValue: val => this.setState({loading: val})}}>
                <Contexts.isAuthContext.Provider value={this.state.isAuth}>
                  <Contexts.logoutHandlerContext value={this.logoutHandler}>
                    <Contexts.loginHandlerContext value={this.loginHandler}>
                      <Contexts.signupHandlerContext value={this.signupHandler}>
                        <Contexts.toggleThemeContext value={this.toggleTheme}>
                          <Router>
                            <Switch>

                            </Switch>
                          </Router>
                        </Contexts.toggleThemeContext>
                      </Contexts.signupHandlerContext>
                    </Contexts.loginHandlerContext>
                  </Contexts.logoutHandlerContext>
                </Contexts.isAuthContext.Provider>
              </Contexts.loadingContext.Provider>
            </Contexts.tokenContext.Provider>
          </Contexts.errorContext.Provider>
        </Contexts.userIdContext.Provider>
      </Contexts.BrightThemeContext.Provider>
    )
  }
}