import logo from './logo.svg';
import './App.css';
import Counter from './components/memo-hook/Counter';
// import CounterOne from './components/CounterOne';
// import CounterTwo from './components/CounterTwo';
// import CounterThree from './components/counterThree';
// import ComponentA from './components/componentA';
// import ComponentB from './components/componentB';
// import ComponentC from './components/componentC';
// import React, { useReducer } from 'react'
// import DataFetchingOne from './components/DataFetchingOne';
// import ParentComponent from './components/callback-hook/ParentComponent';
// // export const countContext = React.createContext()
import FocusInput from './components/useref/FocusInput';
import ClassTimer from './components/useref/ClassTimer';


// const initialState = 0
// const reducer  = (state, action) => {
//     switch(action) {
//         case 'increment':
//         return state + 1
//         case 'decrement':
//         return state - 1
//         case 'reset':
//         return initialState
//         default:
//         return state
//     }
//     }

function App() {
  // const[count ,dispatch] = useReducer(reducer, initialState);

  return (
    <div className="App">
      {/* count = {count} */}
      {/* <CounterOne />
      <CounterTwo  /> */}
      {/* <CounterThree />   */}
{/* <countContext.Provider value = {{countState : count , countDispatch : dispatch}}>
     
      <ComponentA/>
      <ComponentB/>
      <ComponentC/>
</countContext.Provider> */}
 {/* <DataFetchingOne/> */}
  {/* <ParentComponent/> */}

  {/* <Counter/> */}
  <FocusInput/>
  <ClassTimer />

    </div>
  
  );
}

export default App;
