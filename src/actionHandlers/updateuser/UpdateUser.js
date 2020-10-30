import update from '../../api/profile/updateuser/update-user'
import usernameValidator from '../../validators/validateUsername'
import formatUser from '../../utils/formatUser'


export default async (e, data, user, setError, setLoading, closeModal, setInfo, setFirstname) => {
  e.preventDefault()
  setLoading(true)
  
  if(data.username !== user.username){
    const usernameValid = await usernameValidator(data.username, setError)
    if(!usernameValid) return setLoading(false)
  }

  const body = formatUser(data, user)

  const updatedInfo = await update(body)
  
  if(updatedInfo){
    setInfo(updatedInfo)
    if(body.firstname) setFirstname(body.firstname)
    closeModal()
  } else setError('Technical error occured')

  setLoading(false)
}