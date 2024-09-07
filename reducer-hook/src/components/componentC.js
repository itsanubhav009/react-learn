import React, { useContext } from 'react';
import { countContext } from '../App';

function ComponentC() {
  const contextValue = useContext(countContext);

  return (
    <div>
      <div>ComponentC - {contextValue.countState}</div>
      <button onClick={() => contextValue.countDispatch('increment')}>Increment</button>
      <button onClick={() => contextValue.countDispatch('decrement')}>Decrement</button>
      <button onClick={() => contextValue.countDispatch('reset')}>Reset</button>
    </div>
  );
}

export default ComponentC;