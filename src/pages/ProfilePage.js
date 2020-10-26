import React, { useContext, useRef, useState } from 'react'
import * as Ctx from '../utils/contexts'
import Navbar from '../components/navbar/index'
import useLoader from '../hooks/Profile/useLoader'
import Spinner from '../components/spiners/BigSpinner'
import User from '../components/profile-page/User'


export default _ => {
  const [ error, setError ] = useState('')

  const Firstname = _ => useContext(Ctx.FirstnameContext)
  const Token = _ => useContext(Ctx.TokenContext)

  const token = useRef(Token())
  const firstname = useRef(Firstname().firstname)

  const [ loading, info ] = useLoader(token.current, setError)

  document.title = firstname.current

  return(
    <>
      <Navbar/>
      <Ctx.BrightThemeContext.Consumer> 
        {theme =>
          <div className={`${theme? 'Bright' : 'Dark'}Page Page`}>
            {loading && <Spinner/>}
            {error.length > 0 && <h3>{error}</h3>}
            {info._id && !loading &&
              <Ctx.UserDataContext.Provider value={info}>
                <User/>
              </Ctx.UserDataContext.Provider>
            }
          </div>
        }
      </Ctx.BrightThemeContext.Consumer>
    </>
  )
}