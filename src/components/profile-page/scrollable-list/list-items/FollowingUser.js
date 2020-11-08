import React from 'react'
import { SetItemToDeleteContext, DecreaseUserStatsContext, FollowControlsContext } from '../../../../utils/contexts'
import Username from '../components/UsernameInReq'
import Time from '../components/RequestTime'
import ContactUser from '../../buttons/ContactUser'
import UnfollowButton from '../../buttons/UnfollowBtn'
import unfollow from '../../../../actionHandlers/RemoveFollow'


export default ({ data }) => (
  <div id="request">
    <Username user={data.user}/>
    <FollowControlsContext.Consumer>
      {controls => 
        controls &&
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
      }
    </FollowControlsContext.Consumer>
    <p id="names">{`${data.user.firstname} ${data.user.lastname}`}</p>
    <Time date={data.followingSince}/>
  </div>
)
