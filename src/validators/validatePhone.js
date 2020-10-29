import validator from 'validator'

export default number => {
  let numb
  number.startsWith('+')
    ? numb = number.substr(1)
    : numb = number
  return validator.isNumeric(numb)
}