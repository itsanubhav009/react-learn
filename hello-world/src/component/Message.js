import React , {Component} from "react";



class Message extends Component {
   constructor(){
         super() // it is used beacuse we are extending the component class and we need to call the constructor of the parent class
         this.state = {
              message: 'Welcome Visitor'
         }
   
   }
   changeMessage(){
       this.setState({
           message: 'Thank you for subscribing'
       })

    }

    render(){
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={()=> this.changeMessage()}>Subscribe</button>
            </div>
        )
    }
}

export default Message;