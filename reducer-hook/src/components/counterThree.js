import React, { useReducer } from 'react'

const initialState = 0
const reducer  = (state, action) => {
    switch(action) {
        case 'increment':
        return state + 1
        case 'decrement':
        return state - 1
        case 'reset':
        return initialState
        default:
        return state
    }
    }

  //dispatch method which is capable of accepting the action whcih is used in the reducer function

function CounterThree() {
  // when there is multiple state varivble with same stae transition logic then we can use  multiple useReducer
 
    const [count , dispatch] =  useReducer(reducer, initialState)
    const [countTwo , dispatch2] =  useReducer(reducer, initialState)
   return (
    <div>
        
        <div>Count - {count}</div>
      <button onClick = {() => dispatch('increment')}>Increment </button> 
      <button  onClick = {() => dispatch('decrement')}>decrement </button> 
      <button  onClick = {() => dispatch('reset')}>Reset </button> 
      <div>Count - {countTwo}</div>
      <button onClick = {() => dispatch2('increment')}>Increment </button> 
      <button  onClick = {() => dispatch2('decrement')}>decrement </button> 
      <button  onClick = {() => dispatch2('reset')}>Reset </button>
    </div> 
  )
}

export default CounterThree
