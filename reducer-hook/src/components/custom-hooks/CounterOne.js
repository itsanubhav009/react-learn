import React from 'react'
import useCounter from './useCounter'



function CounterOne() {
  
  const [count, increment, decrement, reset] = useCounter(10 ,10)


    return (
    <div>
        <div>Count - {count}</div>
      <button onClick = {increment}>Increment </button> 
      <button  onClick = {decrement}>decrement </button> 
      <button  onClick = {reset}>Reset </button>
    </div>
  )
}

export default CounterOne
