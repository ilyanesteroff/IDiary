import viewMessages from '../api/messaging/mark-messages-as-viewed'
import userIdComparer from '../utils/userIdComparer'


export default async (conv, setConv) => {
  if(userIdComparer(conv.latestMessage.to) && conv.unseenMessages > 0){
    await viewMessages(conv._id)
    setConv({ ...conv, unseenMessages: 0, 'latestMessage.seen': true })
  }
}