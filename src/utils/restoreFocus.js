

export default elem => {
  elem.focus()
  setTimeout(function () {
    if (typeof elem.selectionStart == "number") 
      elem.selectionStart = elem.selectionEnd = elem.value.length
    else if (typeof elem.createTextRange != "undefined") {
      const range = elem.createTextRange()
      range.collapse(false)
      range.select()
    }
  }, 1)
}