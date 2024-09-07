import React from 'react'
import useCounter from './useCounter'



function CounterTwo() {
  

  const [count, increment, decrement, reset] = useCounter( 0 ,1) 


    return (
    <div>
        <div>Count - {count}</div>
      <button onClick = {increment}>Increment </button> 
      <button  onClick = {decrement}>decrement </button> 
      <button  onClick = {reset}>Reset </button>
    </div>
  )
}

export default CounterTwo
