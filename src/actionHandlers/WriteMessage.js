import userIdComparer from '../utils/userIdComparer'
import write from '../api/messaging/write-message'


export default async (conv, messageInput, add, edit, updateConv) => {
  if(messageInput.current.value.trim().length !== 0){
    const txt = messageInput.current.value
    messageInput.current.value = ''
    
    const unverifiedMsg = { 
      text: txt,
      writtenAt: new Date().toISOString(),
      loading: true
    }
    
    setImmediate(add(unverifiedMsg))
    const data = await write(txt, conv.participants.find(p => !userIdComparer(p._id))._id, conv._id)
    updateConv(data.conversation)
    edit({ oldMessage: unverifiedMsg, verifiedMessage: data.message })
  }
}