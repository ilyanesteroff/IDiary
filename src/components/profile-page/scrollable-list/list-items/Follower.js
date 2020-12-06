import React from 'react'
import { SetItemToDeleteContext, DecreaseUserStatsContext, FollowControlsContext } from '../../../../utils/contexts'
import Username from '../components/UsernameInReq'
import Time from '../components/RequestTime'
import ContactUser from '../../buttons/ContactUser'
import UnfollowBtn from '../../buttons/UnfollowBtn'
import Avatar from '../components/Avatar'
import unfollow from '../../../../actionHandlers/RemoveFollow'


export default ({ data }) => (
  <div id="request">
    <Avatar url={ data.user.avatarUrl }/>
    <FollowControlsContext.Consumer>
      {controls => 
        controls &&
          <div id="reqButtons">
            <ContactUser username={data.user.username}/>
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
      }
    </FollowControlsContext.Consumer>
    <Username user={data.user}/>
    <p id="names">{`${data.user.firstname} ${data.user.lastname}`}</p>
    <Time date={data.followingSince}/>
  </div>
)