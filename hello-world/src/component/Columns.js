import React from 'react'

function Columns() {
  const items = [ ];
    return (
    <React.Fragment>
        {
            items.map(item => (
                <React.Fragment key = {item.id}>
                    <h1>Title</h1>
                    <p>{item.title}</p>
                </React.Fragment>
            ))
        }
    </React.Fragment>
  )
}
// react fragment accept key attribute when we are using list

export default Columns
