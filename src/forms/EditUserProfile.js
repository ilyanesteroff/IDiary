import React, { useState, useRef } from 'react'
import * as Ctx from '../utils/contexts'
import FormSpinner from '../components/spiners/FormSpinner'
import ComplainLog from '../components/FormComponents/ComplainLog'
import InputField from '../components/FormComponents/InputField'
import clickHandler from '../actionHandlers/updateuser/UpdateUser'


export default ({ unsetEditing }) => {
  const [submiting, setSubmiting] = useState(false)
  const [error, setError] = useState('')

  const firstname = useRef(null)
  const lastname = useRef(null)
  const username = useRef(null)

  return(
    <Ctx.UserDataContext.Consumer>
      {data =>
        <form id="FormInModal" className={`${submiting? 'FormWithSpinner' : ''}`}>
          <FormSpinner/>
          <ComplainLog message={error}/>
          <InputField placeholder="Firstname" ref={firstname} defaultVal={data.firstname} withLabel name/>
          <InputField placeholder="Lastname" ref={lastname} defaultVal={data.lastname} withLabel name/>
          <InputField placeholder="Username" ref={username} defaultVal={data.username} withLabel username strictLowerCase/>
          <Ctx.SetUpdatedUser.Consumer>
            {update => 
              <Ctx.FirstnameContext.Consumer>
                {({setFirstname}) =>
                  <button
                    onClick={e => 
                      clickHandler(
                        e, 
                        {
                          firstname: firstname.current.value,
                          lastname: lastname.current.value,
                          username: username.current.value
                        },
                        data,
                        setError, 
                        setSubmiting,
                        unsetEditing,                
                        val => update.setUser(val),
                        setFirstname
                      )
                    }
                  >
                    Edit
                  </button>
                }
              </Ctx.FirstnameContext.Consumer>
            }
          </Ctx.SetUpdatedUser.Consumer>
        </form>
      }
    </Ctx.UserDataContext.Consumer>
  )
}