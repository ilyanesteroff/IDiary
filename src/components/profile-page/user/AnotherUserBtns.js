import React from 'react'
import useButtons from '../../../hooks/AnotherProfile/useButtons'
import Spinner from '../../spiners/SpinnerIcon'
import ContactUser from '../buttons/ContactUser'
import UnfollowBtn from '../buttons/UnfollowBtn'
import FollowBtn from '../buttons/FollowBtn'
import UnsendReqBtn from '../buttons/UnsendReq'
import unfollow from '../../../api/profile/unfollow'
import { UnfollowUserContext } from '../../../utils/contexts'


export default ({ userId }) => {
  const [ loading, allowed, following, requested, setFollowing, setRequested, setAllowed ] = useButtons(userId)
  
  return(
    <div id="userBtns">
      { loading   
          ? <Spinner/>
          : <>
              { allowed && <ContactUser withTooltip userId={userId}/> }
              { following &&
                  <UnfollowUserContext.Consumer>
                    {({setUnfollow, publicProfile}) =>
                      <UnfollowBtn
                        withTooltip
                        clickHandler={async _ => {
                          await unfollow(following)
                          setFollowing(null)
                          if(!publicProfile){
                            setUnfollow()
                            setAllowed(false)
                          }
                        }}
                      />
                    }
                  </UnfollowUserContext.Consumer>
              }
              { !following && !requested &&                  
                  <FollowBtn 
                    withTooltip
                    userId={userId}
                    setRequested={val => setRequested(val)}
                    callback={ _ => {} }
                  />
              }
              { requested &&
                  <UnsendReqBtn
                    withTooltip
                    reqId={requested}
                    callback={_ => {
                      setRequested(null)
                    }}
                  />
              } 
            </>
      } 
    </div>
  )
}