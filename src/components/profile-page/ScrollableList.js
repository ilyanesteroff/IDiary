import React, { useRef, useContext, useEffect } from 'react'
import { UserDataContext } from '../../utils/contexts'
import Followers from './Followers'
import Following from './Following'
import IncomingReqs from './IncomingReqs'
import SentReqs from './SentReqs'
import usePaginator from '../../hooks/Profile/usePagination'


export default ({ category, userId }) => {
  const UserData = _ => useContext(UserDataContext)
 
  const userData = useRef(UserData())
  
  const [ page, setPage, hasNextPage, setHasNextPage, loading, info ] = usePaginator(category, {
    'Followers' : UserData().followers,
    'Following' : UserData().following,
    'Sent Requests' : UserData().requestsTo !== undefined ? UserData().requestsTo : null,
    'Incoming Requests' : UserData().requestsFrom !== undefined ? UserData().requestsFrom : null
  }, userId)

  useEffect(_ => {
    document.getElementById('scrollableList').addEventListener('scroll', definePosition)
    return _ => document.getElementById('scrollableList').removeEventListener('scroll', definePosition)
  })

  const definePosition = e => {
    if(e.target.scrollHeight === Math.floor(e.target.offsetHeight + e.target.scrollTop + 1) && hasNextPage){
      setPage(page + 1)
      setHasNextPage(false)
    }
  }

  return(
    <div id="scrollableList">
      { category === 'Followers' && <Followers followersCount={userData.current.followers} data={info}/> }
      { category === 'Following' && <Following followingCount={userData.current.following} data={info}/> }
      { category === 'Incoming Requests' && <IncomingReqs incomingReqCount={userData.current.requestsFrom} data={info}/> }
      { category === 'Sent Requests'  && <SentReqs sentReqCount={userData.current.requestsTo} data={info}/> }
    </div>
  )
}

/* { category === 'Followers' && <Followers followersCount={userData.current.followers}/> }
      { category === 'Following' && <Following followingCount={userData.current.following}/> }
      { category === 'Incoming Requests' && <IncomingReqs incomingReqCount={userData.current.requestsFrom}/> }
      { category === 'Sent Requests'  && <SentReqs sentReqCount={userData.current.requestsTo}/> }
      
      {category !== '' && 
        <ul>
          { 'a a a a a a a a a a a a a a a a a a a a a a a a'.split(' ').map((s, i) => <li key={i+'k'} style={{margin: '3vh auto'}}>{s * 10}</li>) }
        </ul>
      }*/