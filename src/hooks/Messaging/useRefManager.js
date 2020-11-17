import { useRef, useEffect } from 'react'


export default (unset, cb) => {
  const receiverMsg = useRef(null)
  const yourMsg = useRef(null)
  const likedMsg = useRef(null)
  const text = useRef(null)
  const writtenAt = useRef(null)

  useEffect(_ => {
    if(receiverMsg.current) receiverMsg.current.checked = false
    if(yourMsg.current) yourMsg.current.checked = false
    if(likedMsg.current) likedMsg.current.checked = false
    if(text.current) text.current.value = ''
    if(writtenAt.current) writtenAt.current.value = ''
    cb()
    // eslint-disable-next-line
  }, [ unset ])

  return [
    {
      receiversMsgs: receiverMsg,
      yourMsgs: yourMsg,
      likedMsgs: likedMsg,
      msgText: text,
      writtenAt: writtenAt
    }
  ]
}