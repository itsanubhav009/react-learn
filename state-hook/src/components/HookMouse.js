import React, { useEffect ,useState } from 'react'

function HookMouse() {
  const [x , setX] = useState(0)
    const [y , setY] = useState(0)
    const logMousePosition = e => {
        console.log('Mouse event')
        setX(e.clientX)
        setY(e.clientY)
    }
    useEffect(() => {
        console.log('useEffect called')
        window.addEventListener('mousemove', logMousePosition)
       
        return () => {
            console.log('Component unmounting code')
            window.removeEventListener('mousemove', logMousePosition)
        }
    
    }, [])


    //in our case we want only one time to run the useEffect so we pass the empty array as a second parameter
    //we simply tell react that we do not want to rerender the component eery time when the state changes
  
 
 
    return (
    <div>
      Hooks X - {x} Y - {y}
    </div>
  )
}

export default HookMouse
