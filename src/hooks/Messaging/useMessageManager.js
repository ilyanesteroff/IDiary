import { useState, useCallback } from 'react'
import toggleLike from '../../api/messaging/toggle-liked-message'
import userIdComparer from '../../utils/userIdComparer'
import useOutsideClicker from '../useOutsideClicker'


export default info => {
  const [ opened, setOpened, ref ] = useOutsideClicker()
  const [ liked, setLiked ] = useState(info.liked || false)

  const _toggleLike = useCallback(_ => {
    setLiked(!liked)
    toggleLike(info._id, !liked)
  }, [ info, liked ])
  
  const dblClickHandler = useCallback(_ => {
    if(!info.loading && info._id)
      return !userIdComparer(info.to) 
         ? setOpened(!opened)
         : _toggleLike()
  }, [ info, opened, setOpened, _toggleLike ])

  return [ opened, val => setOpened(val), dblClickHandler, ref, liked ]
}