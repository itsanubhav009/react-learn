import React, { Component } from 'react'
import ComponentF from './ComponentF'


export class ComponentE extends Component {
  render() {
    return (
      <div>
        Component E context {this.context}
        <ComponentF/>
      </div>
    )
  }
}
ComponenentE.contextType = UserContext

// we only use context type when we are using class component
// we do not send more than one component


export default ComponentE
