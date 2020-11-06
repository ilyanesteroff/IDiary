import React from 'react'
import { SetItemToDeleteContext, DecreaseUserStatsContext } from '../../utils/contexts'
import Username from './UsernameInReq'
import Time from './RequestTime'
import ContactUser from './ContactUser'
import UnfollowBtn from './UnfollowBtn'
import unfollow from '../../actionHandlers/RemoveFollow'


export default ({ data }) => (
  <div id="request">
    <Username user={data.user}/>
    <div id="reqButtons">
      <ContactUser userId={data.user._id}/>
      <DecreaseUserStatsContext.Consumer>
        {decrease => 
          <SetItemToDeleteContext.Consumer>
            {deleteItem =>
              <UnfollowBtn
                clickHandler={_ => 
                  unfollow(
                    data._id, 
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