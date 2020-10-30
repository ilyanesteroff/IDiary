import update from '../../api/profile/updateuser/update-user-info'
import userInfoValidator from '../../validators/validateUserInfo'
import prepareBody from '../../utils/formatUserInfo'


export default async (e, data, user, setError, setLoading, closeModal, updateInfo) => {
  e.preventDefault()
  setLoading(true)

  const body = prepareBody(data, user)

  if(Object.keys(body).length === 0) return closeModal()
  
  const validationSucceded = userInfoValidator(body, setError)
  if(!validationSucceded) return setLoading(false)

  const updatedInfo = await update(body)
  
  if(updatedInfo){
    updateInfo(updatedInfo)
    setImmediate(_ => closeModal())
  } else setError('Technical error occured')

  setLoading(false)
}