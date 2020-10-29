import update from '../../api/profile/updateuser/update-user-settings'
import { tokenFromStorage as token } from '../../utils/tokens'


export default async (e, data, user, setError, setLoading, closeModal, updateInfo) => {
  e.preventDefault()
  setLoading(true)
  //validation
  
  const body = {}
  if(data.website !== '') body.website = data.website
  if(data.about !== '') body.about = data.about
  if(data.company !== '') body.company = data.company
  if(data.relationshipStatus !== '') body.relationshipStatus = data.relationshipStatus

  const updatedInfo = await update(token, body)
  console.log(updatedInfo)
  if(updatedInfo){
    updateInfo(updatedInfo)
    setImmediate(_ => closeModal())
  } else setError('Technical error occured')

  setLoading(false)
}