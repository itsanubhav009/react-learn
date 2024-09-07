import React from 'react'

function IntervalHookCounter() {
  const [count, setCount] = React.useState(0)
  const tick = () => {
    setCount(prevCount => prevCount + 1)
    }
    React.useEffect(() => {
        const interval = setInterval(tick, 1000)
        return () => {
            clearInterval(interval)
        }
    }, [])

    //use effect is not a way that when you want to rerun while array is a way for react to watch that the effect must watch for changes
    // if you want to watch me the changes in count variable then you can pass the count variable in the array  
  
    return (
    <div>
      {count}
    </div>
  )
}

export default IntervalHookCounter
