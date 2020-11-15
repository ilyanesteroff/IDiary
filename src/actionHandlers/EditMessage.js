import edit from '../api/messaging/edit-message'


export default async (msg, messageInput, setMsgToEditLocally, setMsgToEdit, updateConv) => {    
  const txt = messageInput.current.value
  messageInput.current.value = ''

  setMsgToEdit({ ...msg, text: txt })
  if(txt === msg.text) setMsgToEditLocally(null)

  else if(txt.trim().length !== 0){
    setMsgToEditLocally(null)
    const res = await edit(msg._id, txt)
    if(res.messageUpdated){
      if(res.conversation) updateConv(res.conversation)
    }
  }
}