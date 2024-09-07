import React from 'react'

function MemoComp({name}) {
 console.log('Rendering Memo Component')
    return (

    <div>
      {name}
    </div>
  )
}

//React.memo is a higher order component. It's similar to React.PureComponent but for function components instead of classes.


export default React.memo(MemoComp)
