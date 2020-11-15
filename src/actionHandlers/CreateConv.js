import create from '../api/messaging/create-conversation'


export default async (messageInput, username, addConv, setCurrent) => {
  const txt = messageInput.current.value
  messageInput.current.value = ''

  if(txt.trim().length !== 0){
    messageInput.current.disabled = true
    const newConv = await create(username, txt)
    setImmediate(_ => addConv({ ...newConv }))
    setImmediate(_ => setCurrent({ ...newConv, new: true }))
    messageInput.current.disabled = false
  }
}