import React , {useState} from 'react'

function HookCounterFour() {
 const [items, setItems] = useState([])

  
   // too add itm in array we have to use the spread operator pass the parameter and value to be added in the array
    const additem = () => {
    setItems([...items, {
        id: items.length,
        value: Math.floor(Math.random() * 10) + 1
    }])
} 
    
return (
<div>

      <button onClick={() => {additem()}}>Add a number</button> 

      <ul>
        {
          items.map(item => (
            <li key={item.id}>{item.value}</li>
          ))
        }
             
     </ul>
    </div>
  )
}

export default HookCounterFour
