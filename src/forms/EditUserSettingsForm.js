import React, { useState, useRef, memo } from 'react'
import * as Ctx from '../utils/contexts'
import FormSpinner from '../components/spiners/FormSpinner'
import Input from '../components/FormComponents/TodoInput'
import Checkbox from '../components/FormComponents/Checkbox'
import clickHandler from '../actionHandlers/updateuser/UpdateUserSettings'
import useComplainLog from '../hooks/useComplainLog'


export default memo(({ unsetEditing }) => {
  const [submiting, setSubmiting] = useState(false)

  const [ setError, complainLog ] = useComplainLog()
  
  const _public = useRef(null)
  const phone = useRef(null)

  return(
    <Ctx.UserDataContext.Consumer>
      {data => 
        <form id="FormInModal" className={`${submiting? 'FormWithSpinner' : ''}`}>
          <FormSpinner/>
          { complainLog }
          <Input type="tel" label="Your Phone number" placeholder="333333333" defaultVal={data.phone} ref={phone}/>
          <Checkbox ref={_public} defaultChecked={data.public}>
            <p>Your profile is public</p>
          </Checkbox>
          <Ctx.SetUpdatedUserContext.Consumer>
            {update => 
              <button 
                onClick={async e =>  
                  await clickHandler(
                    e, 
                    _public.current.checked, 
                    phone.current.value, 
                    data,  
                    setError, 
                    setSubmiting, 
                    unsetEditing, 
                    val => update.setSettings(val))
                }
              >
                Edit
              </button>
            }
          </Ctx.SetUpdatedUserContext.Consumer>
        </form>
      }
    </Ctx.UserDataContext.Consumer>
  )
})