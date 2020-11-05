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
      <p>{`${data.user.firstname} ${data.user.lastname}`}</p>
      <Time date={data.followingSince}/>
      <div id="reqButtons">
        <ContactUser userId={data.user._id}/>
        <SetItemToDeleteContext.Consumer>
          {deleteItem => 
            <DecreaseUserStatsContext.Consumer>
              {decrease => 
                <FontAwesomeIcon 
                  id={ loading? 'todoDeletingSpinner' : 'RejectRequest' }
                  icon={ loading ? faSpinner : faUserSlash }
                  onClick={_ => 
                    unfollow(
                      data._id,
                      val => setLoading(val),
                      _ => {
                        decrease('following')
                        deleteItem(data._id)
                      }
                    )
                  }
                />
              }
            </DecreaseUserStatsContext.Consumer>
          }
        </SetItemToDeleteContext.Consumer>
      </div>
    </div>
  )
}