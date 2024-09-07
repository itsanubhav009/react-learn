import React , {useCallback} from 'react'
import Count from './Count'
import Button from './Button'
import Title from './Title'
// before when we click on increment age or increment salary the whole component re-rendered
// beacuse a new salary or age function was created every time the component re-rendered
//function before the re render was different from the function after the re-render
//use callback hook is used to prevent the function to be created again and again
//it is used when we want to pass a function to a child component that is using React.memo
//React.memo is used to prevent the child component to re-render if the props are same
function ParentComponent() {
    const [age, setAge] = React.useState(25)
    const [salary, setSalary] = React.useState(50000)

    const incrementAge = useCallback(() => {
        setAge(age + 1)
    }   , [age]) 
    const incrementSalary = useCallback(() => {
        setSalary(salary + 1000)
    },[salary])
 
    return (
    <div>
        <Title />
        <Count text= "Age" count={age}/>
        <Button handleClick = {incrementAge}>increment Age</Button>
        <Count  text = 'Salary' count = {salary}/>
        <Button handleClick = {incrementSalary}>increment Salary</Button>
    </div>
  )
}

export default ParentComponent
