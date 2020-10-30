import React, { useState, useRef } from 'react'
import * as Ctx from '../utils/contexts'
import FormSpinner from '../components/spiners/FormSpinner'
import ComplainLog from '../components/FormComponents/ComplainLog'
import Input from '../components/FormComponents/TodoInput'
import Textarea from '../components/todos/Textarea'
import clickHandler from '../actionHandlers/updateuser/UpdateUserInfo'


export default _ => {
  const [ submiting, setSubmiting ] = useState(false)
  const [ error, setError ] = useState('')
  const [ status, setStatus ] = useState('')

  const about = useRef(null)
  const website = useRef(null)
  const company = useRef(null)

  return(
    <Ctx.UserDataContext.Consumer>
      {data =>
        <form id="FormInModal" className={`${submiting? 'FormWithSpinner' : ''}`}>
          <FormSpinner/>
          <ComplainLog message={error}/>
          <Textarea label="Tell us about yourself?" placeholder="Everything you wish" ref={about} value={data.about || ''}/>
          <Input type="url" label="Your Webpage" placeholder="URL" ref={website} defaultVal={data.website || ''}/>
          <Input type="text" label="Your Company" placeholder="Where you are working" ref={company} defaultVal={data.company || ''}/>
          <p style={{marginTop: '1vh'}}>Your relationship status</p>
          <select onChange={e => setStatus(e.target.value)}>
            <option value=""></option>
            <option value="single">Single</option>
            <option value="married">Married</option>
            <option value="civil union">In civil union</option>
            <option value="complicated">It's complicated</option>
            <option value="divorced">Divorced</option>
          </select>
          <Ctx.SetUpdatedUser.Consumer>
            {update =>
              <Ctx.SetEditUserContext.Consumer>
                {({set}) =>
                  <button 
                    onClick={async e =>
                      await clickHandler(
                        e, 
                        {
                          about: about.current.value,
                          website: website.current.value,
                          company: company.current.value,
                          relationshipStatus: status
                        }, 
                        data, 
                        setError, 
                        setSubmiting, 
                        _ => set(''),
                        val => update.setInfo(val)
                      )
                    }
                  >
                    Edit
                  </button>
                }
              </Ctx.SetEditUserContext.Consumer>
            }
          </Ctx.SetUpdatedUser.Consumer>
        </form>
      }
    </Ctx.UserDataContext.Consumer>
  )
}