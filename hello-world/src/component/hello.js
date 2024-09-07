import React from 'react'



const hello = () => {

//jsx is like a syntactic sugar for the React.createElement


return React.Component('div' , {id:'hello' , className : 'dummyclass'} , React.createElement('h1' , null , 'Hello Anubhav'))
// it is returing the react element which is created by React.createElement
// React.createElement is a function which takes 3 arguments
// 1st argument is the element which we want to create
// 2nd argument is the properties of the element
// 3rd argument is the children of the element or as many number of children we want to add
// so in this case it is creating a div element with no properties and h1 as its children
// and h1 is having the text Hello Anubhav
// so it will return the react element which is created by React.createElement
// and that element will be rendered on the screen


//we can also write the above code as
// return (<div className = 'dummyclass'><h1>Hello Anubhav</h1></div>)

}

export default hello