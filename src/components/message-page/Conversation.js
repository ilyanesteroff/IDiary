import React, { useEffect, useState } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleLeft } from '@fortawesome/free-regular-svg-icons'
import { CurrentlyOpenedConvContext } from '../../utils/contexts'
import _fetch from '../../api/messaging/fetch'
import query from '../../graphql/fetch-conversation'


export default _ => {
  const [ possibleConversation, setPossibleConversation ] = useState(null)
  const [ warning, setWarning ] = useState(false)
  const [ _with, setWith ] = useState('')

  useEffect(_ => {
    const potentialUsername = window.location.pathname.split('/')[3]
    if(potentialUsername){
      _fetch(query(potentialUsername))
        .then(res => {
          if(!res.conversation.ifUserAllowed)
            return setWarning(true)
          if(!res.conversation.exists)
            return setWith(potentialUsername)
          
          return setPossibleConversation(res.conversation)
        })
        .catch(err => console.log(err))
    }
  }, [ ])

  return(
    <CurrentlyOpenedConvContext.Consumer>
      {({ value, set }) =>     
        <>
          {(value || possibleConversation) &&
            <div id="UserSection">
              <Link to="/messages">
                <FontAwesomeIcon
                  icon={faArrowAltCircleLeft}
                  onClick={_ => {
                    set(null)
                    setPossibleConversation(null)
                  }}
                />
              </Link>
              <h4>{JSON.stringify(value || possibleConversation)}</h4>
            </div>
          }
          {warning  &&
            <Redirect to="/messages"/>
          }
        </>
      }
    </CurrentlyOpenedConvContext.Consumer>
  )
}