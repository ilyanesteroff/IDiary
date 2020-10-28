import React, { useContext, useRef, useState } from 'react'
import * as Ctx from '../utils/contexts'
import Navbar from '../components/navbar/index'
import useLoader from '../hooks/Profile/useLoader'
import Spinner from '../components/spiners/BigSpinner'
import User from '../components/profile-page/User'
import EditProfileForm from '../components/profile-page/EditProfileModal'
import Portal from '../components/portals'


export default _ => {
  const [ error, setError ] = useState('')
  const [ editUser, setEditUser ] = useState('')

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
            <Ctx.setEditUserContext.Provider value={{ value: editUser, set: val => setEditUser(val) }}>
              <Ctx.UserDataContext.Provider value={info}>
                {info._id && !loading &&
                  <User/>
                }
                {(editUser === 'Profile' || editUser === 'Info' || editUser === 'Privacy' || editUser === 'Password') &&
                  <Portal parent="edit-user">
                    <EditProfileForm/>
                  </Portal>
                }
              </Ctx.UserDataContext.Provider>
            </Ctx.setEditUserContext.Provider>
          </div>
        }
      </Ctx.BrightThemeContext.Consumer>
    </>
  )
}