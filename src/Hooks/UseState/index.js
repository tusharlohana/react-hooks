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
            <h2><u>USE STATE :</u></h2>
            <div>
                <p>
                    <strong>useState</strong> is a Hook that allows you to have state variables in functional components. You pass the initial state to this function and it returns a variable with the current state value (not necessarily the initial state) and another function to update this value.
                </p>
                <p><em>Syntax</em> : The first element is the initial state and the second one is a function that is used for updating the state.
                    <strong> <br /><br />const [state, setState] = useState(initialstate)</strong>
                </p>
                <div>
                    <p><em>Example :</em>
                        <strong> <br /><br />const [count, setCount] = useState(0)</strong>
                    </p>
                </div>
            </div>
            <hr></hr>
            <div>
                <h3> Current Count is : {count}</h3>
            </div>
            <div className='d-flex p-3'>
                <Button className='btn-danger' onClick={decrement}>Decrement</Button>
                <Button className='ms-2 btn-primary' onClick={increment}>Increment</Button>
            </div>
        </div>
    )
}

export default Index