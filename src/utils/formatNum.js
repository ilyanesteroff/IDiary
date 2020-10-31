


export default num => {
  num = parseInt(num)
  if(num > 999) {
    if(num % 1000 < 100) return Math.floor(num / 1000)
    else return (num / 1000).toPrecision(1)
  }
  if(num > 999999) {
    if(num % 1000000 < 100000) return Math.floor(num / 1000000)
    else return (num / 1000000).toPrecision(1)
  }
  return num    
}