import React from 'react'


const Greet = (props) => {
    const {name , heroname} = props
    return (
        <div>
    <h1> Hello {name} a.k.a {heroname}</h1>
    {props.children}
    </div>
    )
}



// function Greet(/*{name , heroname}*/  /*props*/){
//     console.log(props);
    
//     return (
//         <div>
//     <h1> Hello {props.name}</h1>
//     {props.children}
//     </div>
//     )
// }

//props are immutable the value of props cannot be changed


export default Greet