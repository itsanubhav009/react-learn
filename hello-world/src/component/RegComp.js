import React, { Component } from 'react'



// it will render every time when parent component render because it will not check the previous state and current state
export class RegularComponent extends Component {
  render() {
    console.log('Regular Component Render')
    return (
      <div>
        Regular Component {this.props.name} 
      </div>
    )
  }
}

export default RegularComponent
