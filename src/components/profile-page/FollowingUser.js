import React from 'react'
import { SetItemToDeleteContext, DecreaseUserStatsContext } from '../../utils/contexts'
import Username from './UsernameInReq'
import Time from './RequestTime'
import ContactUser from './ContactUser'
import UnfollowButton from './UnfollowBtn'
import unfollow from '../../actionHandlers/RemoveFollow'


export default ({ data }) => (
  <div id="request">
    <Username user={data.user}/>
    <div id="reqButtons">
      <ContactUser userId={data.user._id}/>
      <SetItemToDeleteContext.Consumer>
        {deleteItem => 
          <DecreaseUserStatsContext.Consumer>
            {decrease => 
              <UnfollowButton
                clickHandler={_ => 
                  unfollow(
                    data._id,
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
    <p>{`${data.user.firstname} ${data.user.lastname}`}</p>
    <Time date={data.followingSince}/>
  </div>
)
