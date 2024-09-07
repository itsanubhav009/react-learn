import React , {useState , useMemo} from 'react'

function Counter() {
   const [counterOne , setCounterOne] = useState(0)
    const [counterTwo , setCounterTwo] = useState(0)
    const incrementCounterOne = () => {
        setCounterOne(counterOne + 1)
    }
    const incrementCounterTwo = () => {
        setCounterTwo(counterTwo + 1)
    }
     // if you want to cached a function use usecallback and if you want to cached a result of that function use usememo 
    // we gona tell react not to take odd or even while click on second button
    const isEven = useMemo(() => {
        let i = 0
        while(i<2000000000) {i++;}
        
        return counterOne % 2 === 0
        } , [counterOne])
  
    // it tell that if counterone is calculated then only check is Even else only do incrementcounter two 
     
    return (
    <div>
      <div>
            <button onClick = {incrementCounterOne}>Counter One - {counterOne}</button>
        <span>{isEven ? 'Even' : 'Odd'}</span>
        </div>
        <div>    
            <button onClick = {incrementCounterTwo}>Counter Two - {counterTwo}</button>
         
      </div>
    </div>
  )
}

export default Counter
