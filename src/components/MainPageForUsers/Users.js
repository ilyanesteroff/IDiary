import React, { useState } from 'react'
import Spinner from '../spiners/BigSpinner'
import UserIcon from './UserIcon'
import useUserFinder from '../../hooks/Profile/useUserFinder'
import useScroller from '../../hooks/Todos/useTodoScroller'


export default ({ username }) => {
  const [ error, setError ] = useState('')
  const [ page, setPage ] = useState(1)
  
  const [ nextPage, setNextPage, users, loading, fetched ] = useUserFinder(page, setError, username)

  useScroller(page, setPage, nextPage, setNextPage)

  return(
    <>
      {error.length > 0 && <h3>{error}</h3>}
      {users.length === 0 && !loading && fetched !== null &&
        <h3>No users found matching {username}</h3>
      }
      {users.length > 0 &&
        <div id="users">
          { users.map(u => <UserIcon info={u} key={u._id}/>) }
        </div>
      }
      { loading && <Spinner/> }
    </>
  )
}