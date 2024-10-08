import React from 'react'
import useDocumentTitle from './useDocumentTitle'

function DocTitleTwo() {
  const [count, setCount] = React.useState(0)
    useDocumentTitle(count);

  
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Count - {count}</button>
    </div>
  )
}

export default DocTitleTwo
