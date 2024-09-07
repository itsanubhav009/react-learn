import React, { Component } from 'react'
import UpdatedComponent from './withCounter';


export class ClickCounter extends Component {
  
 
  
  
  
    render() {
    return (
     <button onClick = {this.props.incrementCount}>Click {this.props.count} times</button>
    )
  }
}

export default UpdatedComponent (ClickCounter , 10)
