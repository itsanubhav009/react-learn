import React, { Component } from 'react'

export class UserGreeting extends Component {
  
  constructor(props) {
    super(props)
  
    this.state = {
       inLoggeIn: false
    }
  }
  


  
  
  render() {
    // Short circuit operator
    return this.state.inLoggeIn && <div>Welcome Vishwas</div>
    // Ternary conditional operator
    // return this.state.inLoggeIn ? (
    //   <div>Welcome Vishwas</div>
    // ) : (
    //   <div>Welcome Guest</div>
    // )
    // Element variable
    // let message
    // if(this.state.inLoggeIn){
    //   message = <div>Welcome Vishwas</div>
    // }else{
    //   message = <div>Welcome Guest</div>
    // }
    // return <div>{message}</div>
    // if(this.state.inLoggeIn){
    //   return (
    //     <div>Welcome Vishwas</div>
    //   )
    // }else{
    //   return (
    //     <div>Welcome Guest</div>
    //   )
    // }
    // return (
    //   <div>
    //     <div>Welcome Vishwas</div>
    //     <div>Welcome Guest</div>
    //   </div>
    // )
  }
}

export default UserGreeting
