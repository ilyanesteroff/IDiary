import userIdComparer from '../utils/userIdComparer'
import write from '../api/messaging/write-message'


export default async (conv, messageInput, setClicked, add, updateConv) => {
  if(messageInput.trim().length !== 0){
    setImmediate(_ => setClicked(true))
    const data = await write(messageInput, conv.participants.find(p => !userIdComparer(p._id))._id, conv._id)
    updateConv(data.conversation)
    add(data.message)
    messageInput = ''
    setClicked(false)
  }
}