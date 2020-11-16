import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCogs } from '@fortawesome/free-solid-svg-icons'
import Option from './Option'
import useOutsideClicker from '../../../hooks/useOutsideClicker'
import { SetBlockingUserContext } from '../../../utils/contexts'


export default _ => {
  const [ opened, setOpened, container ] = useOutsideClicker()

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