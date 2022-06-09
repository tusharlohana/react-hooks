import React, { useState } from 'react'
import { Button } from 'reactstrap'

const Index = () => {
    const [count, setCount] = useState(0);
    const increment = () => {
        setCount(count + 1)
    }
    const decrement = () => {
        setCount(count - 1)
    }
    return (
        <div>
            <h1>USE STATE :</h1>
            <p>
                useState is a Hook that allows you to have state variables in functional components. You pass the initial state to this function and it returns a variable with the current state value (not necessarily the initial state) and another function to update this value.
            </p>
            <div className='d-flex p-3'>
                <Button className='btn-danger' onClick={decrement}>Decrement</Button>
                <h3> Current Count is :{count}</h3>
                <Button className='btn-primary' onClick={increment}>Increment</Button>
            </div>
        </div>
    )
}

export default Index