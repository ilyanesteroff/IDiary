

export default (file, url) => 
  fetch(url, {
    body: file,
    method: 'PUT',
    headers: {
      'Content-Type': file.type 
    }
  })
    .then(_ => true)
    .catch(_ => {
      return false
    })