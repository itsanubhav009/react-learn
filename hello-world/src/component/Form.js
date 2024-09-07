import React, { Component } from 'react'

export class Form extends Component {
   constructor(props) {
       super(props)
   
       this.state = {
            username: '' , 
            topic: 'topic1'
       }    
    }

    handleUsernamechange = (event) => {
       this.setState({
           username: event.target.value
       })
    }

    handleTopicChange = (event) => {    
        this.setState({
            topic: event.target.value
        })  
    }
 handleSubmit = (event) => {
 alert(`${this.state.username} ${this.state.topic}`)
 event.preventDefault() 
}


  
    render() {
    return (
        // {username , topic} = this.state
            <form onSubmit={this.handleSubmit}>
            <div>
                <label>Username</label>
                <input type="text" value= {this.state.username} onChange = {this.handleUsernamechange}/>
                
               {/* <div>
               <label>Comments</label>
                <textarea value>
                   

                </textarea>*/}
                </div> 
               
            <div>
                <label>Topic</label>
                <select 
                value = {this.state.topic}
                onChange={this.handleTopicChange}>
                    <option value="topic1">Topic 1</option>
                    <option value="topic2">Topic 2</option>
                    <option value="topic3">Topic 3</option>
                </select>
            </div>
            <button type="submit">Submit</button>
        </form>
    )
  }
}

export default Form
