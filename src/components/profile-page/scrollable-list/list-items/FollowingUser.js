import React from 'react'
import { SetItemToDeleteContext, DecreaseUserStatsContext, FollowControlsContext } from '../../../../utils/contexts'
import Username from '../components/UsernameInReq'
import Time from '../components/RequestTime'
import ContactUser from '../../buttons/ContactUser'
import UnfollowButton from '../../buttons/UnfollowBtn'
import Avatar from '../components/Avatar'
import unfollow from '../../../../actionHandlers/RemoveFollow'


export default ({ data }) => (
  <div id="request">
    <Avatar url={ data.user.avatarUrl }/>
    <Username user={data.user}/>
    <FollowControlsContext.Consumer>
      {controls => 
        controls &&
          <div id="reqButtons">
            <ContactUser username={data.user.username}/>
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