import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserSlash, faSpinner } from '@fortawesome/free-solid-svg-icons'
import { SetItemToDeleteContext, DecreaseUserStatsContext } from '../../utils/contexts'
import Username from './UsernameInReq'
import Time from './RequestTime'
import ContactUser from './ContactUser'
import unfollow from '../../actionHandlers/RemoveFollow'


export default ({ data }) => {
  const [ loading, setLoading ] = useState(false)
 
  return(
    <div id="request">
      <Username user={data.user}/>
      <div id="reqButtons">
        <ContactUser userId={data.user._id}/>
        <DecreaseUserStatsContext.Consumer>
          {decrease => 
            <SetItemToDeleteContext.Consumer>
              {deleteItem =>
                <FontAwesomeIcon 
                  id={ loading? 'todoDeletingSpinner' : 'RejectRequest' }
                  icon={ loading ? faSpinner : faUserSlash }
                  onClick={_ => 
                    unfollow(
                      data._id, 
                      val => setLoading(val),
                      _ => {
                        decrease('followers')
                        deleteItem(data._id)
                      }  
                    )
                  }
                />
              }
            </SetItemToDeleteContext.Consumer>
          }
        </DecreaseUserStatsContext.Consumer>
      </div>
      <p>{`${data.user.firstname} ${data.user.lastname}`}</p>
      <Time date={data.followingSince}/>
    </div>
  )
}