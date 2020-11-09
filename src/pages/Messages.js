import React, { memo, useState } from 'react'
import Navbar from '../components/navbar/index'
//import Spinner from '../components/spiners/BigSpinner'
//import * as Ctx from '../utils/contexts'
import useConvrsationManager from '../hooks/Messaging/useConversationLoader'


export default memo(_ => {
  document.title = 'Conversations & Messages'
  const [ convPage, setConvPage ] = useState(1)
  const [ SyntaxError, setError ] = useState('')

  const [ loading, convs, hasNextPage, convLength, setConvToDelete, setConvToEdit ] = useConvrsationManager(convPage, setError)

  return(
    <>
      <Navbar/>
    </>
  )
})