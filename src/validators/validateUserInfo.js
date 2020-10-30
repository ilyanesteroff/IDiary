import validator from 'validator'


export default (userInput, setError) => {
  if(userInput.website){
    const isValidUrl = validator.isURL(userInput.website)
    if(!isValidUrl){
      setError('The url seems to be invalid')
      return isValidUrl
    }
  }
  if(userInput.company){
    const isValidCompanyName = validator.isAlphanumeric(userInput.company)
    if(!isValidCompanyName){
      setError('The company does not seem to be valid')
      return isValidCompanyName
    }
  }
  return true
}