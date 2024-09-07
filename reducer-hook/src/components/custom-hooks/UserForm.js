import React from 'react'
import useInput from './useInput'

function UserForm() {

   

   const [firstName, bindFirstName, resetFirstName] = useInput('')
    const [lastName, bindLastName, resetLastName] = useInput('')
    
    const submitHandler = e => {
        e.preventDefault()
        alert(`Hello ${firstName} ${lastName
        }`)
      resetFirstName()
      resetLastName()          
    
    }

    return (
    <div>
        <form onSubmit={submitHandler}>
            <div>
                <label>First Name</label>
                <input type = "text" {...bindFirstName} />
            </div>
            <div>
                <label>Last Name</label>
                <input type = "text" {...bindLastName} />
            </div>
            <button>Submit</button>
        </form>
        <h2>Your first name is - {firstName}</h2>
        <h2>Your last name is - {lastName}</h2>

    </div>
  )
}

export default UserForm
