import React , {Component} from 'react'

class EventBind extends Component{

    constructor(props){
        super(props)
        this.state = {
            message : 'Hello'
        }
         this.clickHandler = this.clickHandler.bind(this)
    }

//    clickHandler = ()=>{
//        this.setState({
//             message : 'Goodbye'
//         })
//        console.log(this);
//        //the value of this is undefined because this is refer to instance of the class and we are using normal function so it is not bind to the class
//        // while using arrow function this is passed from the class

       
// }


 render(){
    // Binding in the render method is not good as it will create a new function every time the component is rendered
    return(
        <div>
            <div>{this.state.message}</div>
            <button onClick={this.clickHandler}>Click</button>
            {/* <button onClick={()=>this.clickHandler()}>Click</button> */}
            {/* <button onClick={this.clickHandler.bind(this)}>Click</button> */}
        </div>
    )

}



}
export default EventBind