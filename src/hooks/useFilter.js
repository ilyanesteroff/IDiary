import { useEffect, useState } from 'react'


export default (elems, deps, filteringCb) => {
  const [ elementsToExpose, setElementsToExpose ] = useState(elems)

  useEffect(_ => {
    setElementsToExpose(elems)
    // eslint-disable-next-line
  }, [ ...deps, elems ])

  useEffect(_ => {
    const filtered = filteringCb(elems)

    setElementsToExpose(filtered)
    // eslint-disable-next-line
  }, [ ...deps, elems ])

  return [ elementsToExpose ]
}