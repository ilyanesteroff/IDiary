import { useEffect, useCallback } from 'react'


export default (page, setHasNextPage, hasNextPage, setPage) => {
  const definePosition = useCallback(e => {
    console.log('scrolling')
    if(e.target.scrollHeight === Math.floor(e.target.offsetHeight + e.target.scrollTop + 1) && hasNextPage){
      setPage(page + 1)
      setHasNextPage(false)
    }
    // eslint-disable-next-line 
  }, [ page, setHasNextPage, hasNextPage ])
 
  useEffect(_ => {
    document.getElementById('scrollableList').addEventListener('scroll', definePosition)
    return _ => document.getElementById('scrollableList').removeEventListener('scroll', definePosition)
  })
}