import React, { Component } from 'react'
import Input from './Input'

export class FocusInput extends Component {
  
   constructor(props) {
     super(props)
   
     this.componentRef = React.createRef()
   }    


  

  clickHandler = () => {
   this.componentRef.current.focusInput() 

    }
  // componentRef is passed as a prop to the Input component which means that it can any method of the Input component
    render() {
    return (
      <div>
        <Input ref = {this.componentRef}/>
        <button onClick = {this.clickHandler}>Focus Input</button>
      </div>
    )
  }
}

export default FocusInput
