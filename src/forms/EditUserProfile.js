import React, { useRef } from 'react'
import * as Ctx from '../utils/contexts'
import FormSpinner from '../components/spiners/FormSpinner'
import useComplainLog from '../hooks/useComplainLog'
import useFormSubmitter from '../hooks/useFormSubmiter'
import InputField from '../components/FormComponents/InputField'
import clickHandler from '../actionHandlers/updateuser/UpdateUser'


export default ({ unsetEditing }) => {  
  const [ setSubmiting, className ] = useFormSubmitter()
 
  const [ setError, complainLog ] = useComplainLog()

  const firstname = useRef(null)
  const lastname = useRef(null)
  const username = useRef(null)

  return(
    <Ctx.UserDataContext.Consumer>
      {data =>
        <form id="FormInModal" className={ className }>
          <FormSpinner/>
          { complainLog }
          <InputField placeholder="Firstname" ref={firstname} defaultVal={data.firstname} withLabel name/>
          <InputField placeholder="Lastname" ref={lastname} defaultVal={data.lastname} withLabel name/>
          <InputField placeholder="Username" ref={username} defaultVal={data.username} withLabel username strictLowerCase/>
          <Ctx.SetUpdatedUserContext.Consumer>
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
                        update,
                        setFirstname
                      )
                    }
                  >
                    Edit
                  </button>
                }
              </Ctx.FirstnameContext.Consumer>
            }
          </Ctx.SetUpdatedUserContext.Consumer>
        </form>
      }
    </Ctx.UserDataContext.Consumer>
  )
}