import React, { useEffect  ,useRef} from 'react'

function HookTimer() {
  const [timer, setTimer] = React.useState(0)
const intervalRef = useRef()

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setTimer(prevTimer => prevTimer + 1)
    }, 1000)
    return () => {
      clearInterval(intervalRef.current)
    }

    }   , [])


    return (
    <div>
      Hook timer - {timer}
     <button onClick = {() => clearInterval(intervalRef.current)}>Clear Timer</button> 
    </div>
  )
}
// usref value persists through re-renders
//what does it means? i t can used to create a generic container which can hold a mutable vlue similar to instance prperty of class component

export default HookTimer


//use imperative handle 
//use layout effect
//use debug value


