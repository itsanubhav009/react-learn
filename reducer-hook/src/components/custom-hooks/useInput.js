import React from 'react'

function useInput(initialValue) {
    const [value, setValue] = React.useState(initialValue)
    const reset = () => {
        setValue('')
    }
    const bind = {
        value,
        onChange: e => {
            setValue(e.target.value)
        }
    }
    return [value, bind, reset]
}

export default useInput
