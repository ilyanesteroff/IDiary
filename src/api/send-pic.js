

export default (file, url) => 
  fetch(url, {
    body: file,
    headers: {
      'Content-Type': file.type 
    }
  })
    .then(res => {
      console.log(res.data)
      return true
    })
    .catch(err => {
      console.log(err)
      return false
    })