import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css'
import MainPage from './components/pages/landing-page/Landing-page'
import * as Contexts from './utils/contexts'


export default class App extends React.Component{
  state = {
    userId: null,
    firstname: null,
    brightTheme: true,
    error: {
      error: false, 
      message: ''
    },
    token: null,
    loading: false,
    isAuth: false
  }

  componentDidMount() {
    const token = localStorage.getItem('token')
    const expiryDate = localStorage.getItem('expiryDate')
    const firstname = localStorage.getItem('firstname')
    const theme = localStorage.getItem('theme')
    theme === 'true' 
      ? this.setState({brightTheme: true})
      : this.setState({brightTheme: false})
    if(!theme) window.localStorage.setItem('theme', this.state.brightTheme)
    if (!token || !expiryDate || !theme || !firstname ) {
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
      firstname: firstname,
      brightTheme: theme === 'true' ? true : false
    })
    this.setAutoLogout(remainingMilliseconds)
  }

  logoutHandler = () => {
    this.setState({ isAuth: false, token: null })
    localStorage.removeItem('token')
    localStorage.removeItem('expiryDate')
    localStorage.removeItem('userId')
    localStorage.removeItem('firstname')
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
          firstname: res.data.firstname,
          isAuth: true,
          loading: false
        })
        window.localStorage.setItem('token', this.state.token)
        window.localStorage.setItem('userId', this.state.userId)
        window.localStorage.setItem('firstname', this.state.firstname)
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
          error: {
            error: true, 
            message: err.message
          },
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
      this.setState({ loading: false })
    })
    .catch(err => {
      //
      //   !!!!!
      //
      console.log(err)
      this.setState({
        error: {
          error: true, 
          message: err.message
        },
        loading: false
      })
    })
  }
  
  toggleTheme = () => {
    this.setState({brightTheme: !this.state.brightTheme})
    window.localStorage.setItem('theme', !this.state.brightTheme)
  }

  render(){
    return(
      <Contexts.BrightThemeContext.Provider value={this.state.brightTheme}>
        <Contexts.userIdContext.Provider value={this.state.userId}>
          <Contexts.FirstnameContext.Provider value={{
            firstname: this.state.firstname,
            setFirstname: val => this.setState({ firstname: val })
          }}>
            <Contexts.errorContext.Provider value={{value: this.state.error, setError: (isError, message = '') => this.setState({error: { error: isError, message: message}})}}>
              <Contexts.tokenContext.Provider value={this.state.token}>
                <Contexts.loadingContext.Provider value={{ value: this.state.loading, setValue: val => this.setState({loading: val})}}>
                  <Contexts.isAuthContext.Provider value={this.state.isAuth}>
                    <Contexts.logoutHandlerContext.Provider value={this.logoutHandler}>
                      <Contexts.loginHandlerContext.Provider value={this.loginHandler}>
                        <Contexts.signupHandlerContext.Provider value={this.signupHandler}>
                          <Contexts.toggleThemeContext.Provider value={this.toggleTheme}>
                            <Router>
                              <div>
                                <Switch>
                                  <Route path="/" render={() => <MainPage/>}/>
                                </Switch>
                              </div>
                            </Router>
                          </Contexts.toggleThemeContext.Provider>
                        </Contexts.signupHandlerContext.Provider>
                      </Contexts.loginHandlerContext.Provider>
                    </Contexts.logoutHandlerContext.Provider>
                  </Contexts.isAuthContext.Provider>
                </Contexts.loadingContext.Provider>
              </Contexts.tokenContext.Provider>
            </Contexts.errorContext.Provider>
          </Contexts.FirstnameContext.Provider>
        </Contexts.userIdContext.Provider>
      </Contexts.BrightThemeContext.Provider>
    )
  }
}