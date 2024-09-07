import React  from 'react'

function ChildComponent(props){     
        
    //when the button is clicked, the greetParent method of the ParentComponent is called.
    return(
            <div>
                <button onClick= {() => {props.greetHandler('child')}}>Greet Parent</button>
            </div>
        )


}
export default ChildComponent