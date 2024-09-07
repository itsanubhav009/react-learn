import React , {useState} from 'react'

function HookCounterThree() {
const [name, setName] = useState({firstName: '', lastName: ''})

  // the usetate propety does not automatically merge and update the object you have to do it manually .

  return (
      // copy every name in the object and then update the last name
      <from>
        <input type = "text " value = {name.firstName} onChange={ e => setName({...name , firstName : e.target.value})}/>
        
        <input type = "text " value = {name.lastName} onChange={ e => setName({...name , lastName : e.target.value})}/>
        <h2>Your first name is - {name.firstName}</h2>
        <h2>Your last name is - {name.lastName}</h2>
        <h2>{JSON.stringify(name)}</h2>
        
        </from>
    
  )
}

export default HookCounterThree

