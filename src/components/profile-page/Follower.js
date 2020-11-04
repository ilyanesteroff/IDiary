import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserSlash } from '@fortawesome/free-solid-svg-icons'
import { faComment } from '@fortawesome/free-regular-svg-icons'
import { SetItemToDeleteContext, DecreaseUserStatsContext } from '../../utils/contexts'


export default ({ data }) => {
  return(
    <div>
      <p>{data.user.username}</p>
      <p>{`${data.user.firstname} ${data.user.lastname}`}</p>
      <p>Sent at:{` ${data.followingSince}`}</p>
      <DecreaseUserStatsContext.Consumer>
        {decrease => 
          <SetItemToDeleteContext.Consumer>
            {deleteItem => 
              <>
                <FontAwesomeIcon 
                  id="ContactFollower" 
                  icon={ faComment }
                  onClick={_ => {
                    decrease('followers')
                    deleteItem(data._id)
                  }}
                />
                <FontAwesomeIcon 
                  id="Unfollow" 
                  icon={ faUserSlash }
                  onClick={_ => {
                    decrease('followers')
                    deleteItem(data._id)
                  }}
                />
              </>
            }
          </SetItemToDeleteContext.Consumer>
        }
      </DecreaseUserStatsContext.Consumer>
    </div>
  )
}