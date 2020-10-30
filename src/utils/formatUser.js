


export default (userInput, userInfo) => {
  let output = {}
  Object.keys(userInput).forEach(k => output = defineEntry(k, userInfo, userInput, output))
  return output
}
  
const defineEntry = (entryName, userInfo, userInput, obj) => {
  if(userInput[entryName] !== userInfo[entryName] && userInput[entryName] !== '') obj[entryName] = userInput[entryName]
  return obj
}