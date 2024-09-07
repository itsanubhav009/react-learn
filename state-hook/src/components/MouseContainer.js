import React, {useState} from 'react'
import HookMouse from './HookMouse'

// When you unmount the component, make sure to remove all the component or related stuff with that component.


function MouseContainer() {
  const [display , setDisplay] = useState(true)
  return (
    <div>
      <button onClick={() => {setDisplay(!display)}}>Toggle Display</button>
        {display && <HookMouse/>}
    </div>
  )
}

export default MouseContainer
