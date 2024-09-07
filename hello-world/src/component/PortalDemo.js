import React from 'react'
import ReactDOM from 'react-dom'
function PortalDemo() {
  return ReactDOM.createPortal(
    <div>
      portal demo
    </div> , 
    document.getElementById('portal-root')  
  )
}

export default  PortalDemo 

// POrtal Event bubbling
// MEANS EVENT BUBBLING IS NOT AFFECTED BY PORTAL
