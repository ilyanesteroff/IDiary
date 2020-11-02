import React, { useRef, useContext, useEffect, useState, useCallback } from 'react'
import { UserDataContext } from '../../utils/contexts'
import Followers from './Followers'
import Following from './Following'
import IncomingReqs from './IncomingReqs'
import SentReqs from './SentReqs'
import Spinner from '../spiners/BigSpinner'
import usePaginator from '../../hooks/Profile/usePagination'

//TODO fix request bug
export default ({ category, userId }) => {
  const UserData = _ => useContext(UserDataContext)
  
  const [ page, setPage ] = useState(1)

  const userData = useRef(UserData())
  
  const [ hasNextPage, setHasNextPage, info, loading ] = usePaginator(category, {
    'Followers' : UserData().followers,
    'Following' : UserData().following,
    'Sent Requests' : UserData().requestsTo !== undefined ? UserData().requestsTo : null,
    'Incoming Requests' : UserData().requestsFrom !== undefined ? UserData().requestsFrom : null
  }, userId, page, val => setPage(val))
 
  const definePosition = useCallback(e => {
    if(e.target.scrollHeight === Math.floor(e.target.offsetHeight + e.target.scrollTop + 1) && hasNextPage){
      setPage(page + 1)
      setHasNextPage(false)
    }
  }, [ page, setHasNextPage, hasNextPage ])

  useEffect(_ => {
    document.getElementById('scrollableList').addEventListener('scroll', definePosition)
    return _ => document.getElementById('scrollableList').removeEventListener('scroll', definePosition)
  })
  
  return(
    <div id="scrollableList">
      { category === 'Followers' && <Followers followersCount={userData.current.followers} data={info}/> }
      { category === 'Following' && <Following followingCount={userData.current.following} data={info}/> }
      { category === 'Incoming Requests' && <IncomingReqs incomingReqCount={userData.current.requestsFrom} data={info}/> }
      { category === 'Sent Requests'  && <SentReqs sentReqCount={userData.current.requestsTo} data={info}/> }
      { loading && <Spinner/> }
    </div>
  )
}