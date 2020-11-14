import deleteMsg from '../api/messaging/delete-message'


export default async ( msgId, deleteConv, edit, deleteMessage ) => {
  const res = await deleteMsg(msgId)
  if(res.messageDeleted){
    if(res.conversationDeleted){
      setImmediate(_ => deleteConv())
      return window.location.pathname = '/messages'
    }
    if(res.conversation){
      edit(res.conversation)
    }
    deleteMessage(msgId)
  }
}