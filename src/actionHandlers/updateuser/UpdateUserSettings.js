import phoneValidator from '../../validators/validatePhone'
import update from '../../api/profile/updateuser/update-user-settings'


export default async (e, _public, phone, user, setError, setLoading, closeModal, updateSettings) => {
  e.preventDefault()
  setError('')
  setLoading(true)
  
  if(_public === user.public && (phone === user.phone || (phone === '' && user.phone === null))) {
    setLoading(false)
    return closeModal()
  }

  if(phone !== ''){
    const isValidPhone = phoneValidator(phone)
    if(!isValidPhone){
      setLoading(false)
      return setError('Phone does not seem to be valid')
    }
  }

  const body = {}
  if(phone !== '' && phone !== user.phone) body.phone = phone
  if(_public !== user.public) body.public = _public
  
  const updatedSettings = await update(body)
  if(updatedSettings){
    updateSettings(updatedSettings)
    setImmediate(_ => closeModal())
  } else setError('Technical error occured')
  setLoading(false)
}