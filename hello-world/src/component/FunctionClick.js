import React , {Component} from 'react'

function FunctionClick (){

    function clickHandler(){
        console.log('Button Clicked')
    }



        return(
            <div>
                <button onClick = {clickHandler}>Click</button>
            </div>
        )
        // we want handler to be a function not a function call because if we put function call then it will be called as soon as the component is rendered

    



}
export default FunctionClick