import React, { Component } from 'react'



// it will not render every time when parent component render because it will check the previous state and current state
export class PureComponent extends Component {
  render() {
    console.log('Pure Component Render')
    return (
      <div>
        Pure Component {this.props.name}
      </div>
    )
  }
}



export default PureComponent
