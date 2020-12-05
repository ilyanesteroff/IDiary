
export default base64Data => 
  base64Data.substring('data:image/'.length, base64Data.indexOf(';base64'))
