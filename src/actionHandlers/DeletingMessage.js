import deleteMsg from '../api/messaging/delete-message'


export default async ( msg, deleteConv, editMsg, edit, deleteMessage ) => {
  setImmediate(_ => editMsg({ ...msg, loading: true }))
  deleteMessage(msg._id)
  const res = await deleteMsg(msg._id)
  if(res.messageDeleted){
    if(res.conversationDeleted){
      setImmediate(_ => deleteConv())
      return window.location.pathname = '/messages'
    }
    if(res.conversation){
      edit(res.conversation)
    }
  }
}