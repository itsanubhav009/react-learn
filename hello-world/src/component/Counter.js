import React, { Component } from 'react'



class Counter extends Component {
    
constructor(props){
    super(props)
    this.state = {
        count: 0
    }
}

//DO NOT MODIFY STATE DIRECTLY USE SETSTATE METHOD TO MODIFY STATE

incrementfive(){
  this.increment()
  this.increment()
  this.increment()
    this.increment()
  this.increment()
}

increment(){
//  this.setState({
//     count : this.state.count + 1
//  } , () =>  {console.log('Callback value', this.state.count)})//whenever you want to use the updated value of the state then place that code in the callback function of the setState method instead of writing it directly after the setState method

//  console.log(this.state.count)

this.setState((prevState) => ({
    count : prevState.count + 1
}))
// use prevState instead of this.state to avoid any issues with the asynchronous nature of the setState method
// pass in a function instead of an object to the setState method to avoid any issues with the asynchronous nature of the setState method
}


    render(){
        return(
            <div>
                <div>Count - {this.state.count}</div>
                <button onClick={()=> this.incrementfive()}>Increment</button>
            </div>
        )
    }
}

export default Counter;