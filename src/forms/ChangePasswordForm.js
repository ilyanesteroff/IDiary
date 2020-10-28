import React, { useState, useRef, memo } from 'react'
import * as Ctx from '../utils/contexts'
import FormSpinner from '../components/spiners/FormSpinner'
import ComplainLog from '../components/FormComponents/ComplainLog'
import Password from '../components/FormComponents/Password'
import setNewPassword from '../actionHandlers/updateuser/SetNewPassword'


export default memo(_ => {
  const [submiting, setSubmiting] = useState(false)
  const [error, setError] = useState('')

  const oldPw = useRef(null)
  const newPw = useRef(null)
  const newPw2 = useRef(null)

  return(
    <form id="FormInModal" className={`${submiting? 'FormWithSpinner' : ''}`}>
      <FormSpinner/>
      <ComplainLog message={error}/>
      <p>Enter your old password</p>
      <Password 
        placeholder="old password"
        ref={oldPw}
      />
      <p>Enter your new password</p>
      <Password 
        placeholder="new password"
        ref={newPw}
      />
      <p>Repeat your new password</p>
      <Password 
        placeholder="new password repeat"
        ref={newPw2}
      />
      <Ctx.setEditUserContext.Consumer>
        {({set}) =>
          <Ctx.UserDataContext.Consumer>
            {data =>
              <button
                onClick={async e => 
                  await setNewPassword(
                    e, 
                    oldPw.current.value, 
                    newPw.current.value, 
                    newPw2.current.value, 
                    setSubmiting, 
                    _ => set(''),
                    data._id,
                    setError
                  )
                }
              >
                Edit
              </button>
            }
          </Ctx.UserDataContext.Consumer>
        }
      </Ctx.setEditUserContext.Consumer>
    </form>
  )
})