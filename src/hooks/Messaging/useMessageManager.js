import { useState, useCallback } from 'react'
import toggleLike from '../../api/messaging/toggle-liked-message'
import userIdComparer from '../../utils/userIdComparer'
import useOutsideClicker from '../useOutsideClicker'


export default info => {
  const [ opened, setOpened, ref ] = useOutsideClicker()
  const [ liked, setLiked ] = useState(info.liked || false)
  
  const dblClickHandler = useCallback(_ => {
    if(!info.loading && info._id)
      return !userIdComparer(info.to) 
         ? setOpened(!opened)
         : toggleLike(info._id, !liked)
            .then(res => setLiked(res.liked))
  }, [ info, liked, opened, setOpened ])

  return [ opened, val => setOpened(val), dblClickHandler, ref, liked ]
}