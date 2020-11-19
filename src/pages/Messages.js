import React, { memo, useState } from 'react'
import Navbar from '../components/navbar/index'
import Footer from '../components/Footer/index'
import Page from '../components/message-page/containers/index'
import * as Ctx from '../utils/contexts'
import useConversationManager from '../hooks/Messaging/useConversationLoader'


export default memo(_ => {
  document.title = 'Conversations & Messages'
  const [ convPage, setConvPage ] = useState(1)
  const [ error, setError ] = useState('')
  const [ currentConv, setCurrentConv ] = useState(null)

  const [ loading, convs, hasNextPage, convLength, setConvToDelete, setConvToEdit, setConvToAdd, setHasNextPage ] 
    = useConversationManager(convPage, setError)

  return(
    <>
      <Navbar/>
      <Ctx.BrightThemeContext.Consumer>
        {theme => 
          <Ctx.ConversationsContext.Provider value={{ convs: convs, total: convLength }}>
            <Ctx.SetConvToAddContext.Provider value={setConvToAdd}>
              <Ctx.SetConvToEditContext.Provider value={setConvToEdit}>
                <Ctx.SetConvToDeleteContext.Provider value={setConvToDelete}>
                  <div className={`${theme? 'Bright' : 'Dark'}Page Page`} id="messagingPage">
                    { error !== ''  && <h3>{error}</h3> }
                    { error === '' && 
                      <Ctx.CurrentlyOpenedConvContext.Provider value={{ value: currentConv, set: setCurrentConv }}>
                        <Ctx.LoadingContext.Provider value={loading}>
                          <Ctx.PageContext.Provider value={{ setPage: setConvPage, page: convPage }}>
                            <Ctx.HasNextPageContext.Provider value={{ has: hasNextPage, set: setHasNextPage }}>
                              <Page/>
                            </Ctx.HasNextPageContext.Provider>
                          </Ctx.PageContext.Provider>
                        </Ctx.LoadingContext.Provider>
                      </Ctx.CurrentlyOpenedConvContext.Provider>
                    }
                  </div>
                </Ctx.SetConvToDeleteContext.Provider>
              </Ctx.SetConvToEditContext.Provider>
            </Ctx.SetConvToAddContext.Provider>
          </Ctx.ConversationsContext.Provider>
        }
      </Ctx.BrightThemeContext.Consumer>
      <Footer/>
    </>
  )
})