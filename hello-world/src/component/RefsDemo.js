import React, { Component } from 'react'

export class RefsDemo extends Component {
   constructor(props) {
     super(props)
   
     this.inputRef = React.createRef()
     this.cbRef = null
     this.setCbRef = element => {
       this.cbRef = element
     }
   }
 
   componentDidMount(){
if(this.cbRef){ 
    this.cbRef.focus()
}
    //  this.inputRef.current.focus()
    //  console.log(this.inputRef)
   }
 
   clickHandler = () => {
     alert(this.inputRef.current.value)
    }
    render() {
    return (
      <div>
              <input type = "text" ref = {this.inputRef} />
              <input type = "text" ref = {this.setCbRef} />
              <button onClick = {this.clickHandler}>Focus Input</button>
      </div>
    )
  }
}

export default RefsDemo

// call back ref
 //- In call back ref you first create a property and set it to null
 //- then create a method and set the property to the element
    //- then pass the method to the ref attribute
    //- then access the element using the property
    // diffrence between ref and call back ref is that in ref you have to create a property and use it to access the element while in call back ref you directly access the element



// we have to use ref to access the dom element in react
