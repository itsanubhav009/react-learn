import React, { Component } from 'react'

export class User extends Component {
  render() {
    return (
      <div>
        {this.props.render()}
      </div>
    )
  }
}

export default User
