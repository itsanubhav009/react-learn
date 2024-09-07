import React, { Component } from 'react'
import RegularComponent from './RegComp'
import PureComp from './PureComp'
import MemoComp from './MemoComp'


// regular component render every time when parent component render
// pure component render is never render when parent component render because it will
export class ParentComp extends Component {
  constructor(props) {
    super(props)
    this.state = {
         name : 'Anubhav'
    }
}
componentDidMount(){    
    setInterval(() => {
        this.setState({
            name : 'Anubhav'
        })
    }, 2000)
}
  
  
    render() {
    console.log('Parent Component Render    ')
    return (
      <div>
        ParentComp
        <MemoComp name = {this.state.name}/>
        {/* <RegularComponent name = {this.state.name}/>
        <PureComp name = {this.state.name}/> */}
      </div>
    )
  }
}

//Why to use pure component?
//it is used to prevent the unnecessary rendering of the component which help in performance optimization

export default ParentComp
