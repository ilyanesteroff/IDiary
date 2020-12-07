import edit from '../api/messaging/edit-message'


export default async (conv, msg, messageInput, setMsgToEditLocally, setMsgToEdit, updateConv) => {    
  const txt = messageInput.current.value
  messageInput.current.value = ''
  
  if(txt.trim().length === 0  || txt === msg.text) return setMsgToEditLocally(null)
    
  setMsgToEdit({ ...msg, text: txt })

  setMsgToEditLocally(null)
  const res = await edit(msg._id, txt)
  if(res.messageUpdated){
    if(res.conversationUpdated) updateConv({
      ...conv, 
      latestMessage: {
        text: txt
      }
    })
  }
}