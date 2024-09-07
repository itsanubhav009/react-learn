import React  , {useState , useEffect}from 'react'

function HookCounterOne() {
   const [name, setName] = useState('')
   const [items, setItems] = useState(0)
   //useEffect will run after every render
   // when we use react we give request to react to run the function every time it run
   useEffect(() => {
      console.log('useEffect - Updating document title');
      
       document.title = `You clicked ${items} times`
   } , [items])
   //IN second parameter we can pass the array as a second parameter to seficify the condition when the useEffect should run
    return (
    <div>
     <input type = "text" value = {name} onChange = {e => setName(e.target.value)}/> 
      
     < button onClick={() => {setItems(items+1)}}>Add a number {items}</button>    
    </div>
  )
}

export default HookCounterOne
