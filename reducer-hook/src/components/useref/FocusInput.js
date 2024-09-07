import React, { useEffect } from 'react'

function FocusInput() {
  const inputRef = React.useRef(null)
  
  
    useEffect(() => {
    // focus the input element
    inputRef.current.focus()
    }, [])
  
    return (
    <div>
      <input ref = {inputRef} type="text" />
    </div>
  )
}

export default FocusInput
