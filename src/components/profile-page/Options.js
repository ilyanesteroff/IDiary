import React, { useState, useRef, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCogs } from '@fortawesome/free-solid-svg-icons'
import Option from './Option'
import { SetBlockingUserContext } from '../../utils/contexts'


export default _ => {
  const [ opened, setOpened ] = useState(false)
  const container = useRef(null)

  const handleClick = event => container.current && !container.current.contains(event.target) && setOpened(false)

  useEffect(_ => {
    document.addEventListener('click', handleClick)
    return _ => document.removeEventListener('click', handleClick)
  })

  return(
    <>
      <div id="UserSettings" onClick={_ => setOpened(!opened)} ref={container}>
        <FontAwesomeIcon
          icon={faCogs}
        />
      </div>      
      { opened && 
        <div id="UserSettingsOptions">
          <SetBlockingUserContext.Consumer>
            {setBlocking =>
              <Option 
                option="Block user"
                clickHandler={_ => {
                  setBlocking(true)
                  console.log('blocking')
                }}
              />
            }
          </SetBlockingUserContext.Consumer>
        </div>
      }
    </>
  )
}