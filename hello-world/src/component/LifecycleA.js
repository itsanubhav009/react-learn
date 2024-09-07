import React, { Component } from 'react'
import LifecycleB from './LifecycleB'

export class LifecycleA extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       name: 'Anubhav'
    }
    console.log('LifecycleA constructor')

  }
  

  static getDerivedStateFromProps(props, state) {
    console.log('LifecycleA getDerivedStateFromProps')
    return null  
}
 
 shouldComponentUpdate() {  
    console.log('LifecycleA shouldComponentUpdate')
    return true
}

getSnapshotBeforeUpdate(prevProps, prevState) {
  console.log('LifecycleA getSnapshotBeforeUpdate')
  return null
}

componentDidUpdate() {
  console.log('LifecycleA componentDidUpdate')
}   


changeState = () => {
    this.setState({
        name: 'Anubhav State'
    })
}

componentDidMount() {
console.log('LifecycleA componentDidMount')
}


  
    render(){
    console.log('LifecycleA render')
    return (
      <div>
        <div>LifecycleA</div>
        <button onClick={this.changeState}>Change State</button>
        <LifecycleB/>
      </div>
    )
  }
}

export default LifecycleA
