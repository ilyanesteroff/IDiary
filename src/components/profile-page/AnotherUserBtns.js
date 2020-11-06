import React from 'react'
import useButtons from '../../hooks/AnotherProfile/useButtons'
import Spinner from '../spiners/SpinnerIcon'
import ContactUser from './ContactUser'
import UnfollowBtn from './UnfollowBtn'
import FollowBtn from './FollowBtn'
import UnsendReqBtn from './UnsendReq'
import unfollow from '../../api/profile/unfollow'


export default ({ userId }) => {
  const [ loading, allowed, following, requested, setFollowing, setRequested ] = useButtons(userId)
  
  return(
    <div id="userBtns">
      { loading   
          ? <Spinner/>
          : <>
              { allowed && <ContactUser userId={userId}/> }
              { following !== false &&
                  <UnfollowBtn
                    clickHandler={async _ => {
                      await unfollow(following._id)
                      setFollowing(null)
                    }}
                  />
              }
              { !following && !requested &&                  
                  <FollowBtn 
                    userId={userId}
                    setRequested={val => setRequested(val)}
                    callback={ _ => {} }
                  />
              }
              { requested &&
                  <UnsendReqBtn
                    reqId={requested._id}
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