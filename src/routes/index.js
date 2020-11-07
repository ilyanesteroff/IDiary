import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import MainPage from '../pages/Landing-page'
import LoginPage from '../pages/Login'
import ResetPassword from '../pages/Reset-password-page'
import SetNewPassword from '../pages/Set-new-password'
import PageNotFound from '../pages/Page-not-found'
import Signup from '../pages/Signup'
import AcceptEmail from '../pages/AcceptEmail'
import Todos from '../pages/Todos'
import Profile from '../pages/ProfilePage'
import AnotherProfile from '../pages/AnotherProfile'


export default ({ isAuth })  => (
  <Router>
    <Switch>
      <Route exact path="/" render={_ => <MainPage isAuth={isAuth}/>}/>
      <Route 
        path="/login" 
        render={_ => isAuth ? <Redirect to="/"/> : <LoginPage/>}/>
      <Route
        path='/create-user'
        render={_ => isAuth ? <Redirect to="/"/> : <Signup/>}
      />
      <Route 
        path="/password-reset" 
        render={_ => isAuth ? <PageNotFound/> : <ResetPassword/>}
      />
      <Route 
        path="/resetpassword/:token" 
        render={_ => isAuth ? <PageNotFound/> : <SetNewPassword/>}  
      />
      <Route
        path="/acceptemail/:token"
        render={_ => <AcceptEmail/>}
      />
      <Route
        path="/todos"
        render={_ => isAuth ? <Todos/> : <LoginPage/>}
      />
      <Route
        path="/profile"
        render={_ => isAuth ? <Profile/> : <LoginPage/>}
      />
      <Route
        path="/user/:id"
        render={({match}) => isAuth ? <AnotherProfile userId={match.params.id}/> : <Redirect to="/login"/>}
      />
      <Route path="*" render={_ => <PageNotFound/>}/>
    </Switch>
  </Router>
)
