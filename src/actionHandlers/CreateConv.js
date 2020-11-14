import create from '../api/messaging/create-conversation'


export default async (messageInput, username, /*addMessage,*/ addConv, setCurrent) => {
  if(messageInput.trim().length !== 0){
    const newConv = await create(username, messageInput)
    console.log(newConv)
    setImmediate(_ => addConv(newConv))
    setImmediate(_ => setCurrent(newConv))
    //addMessage(newConv.latestMessage)
  }
}