import React, { useCallback, useState } from 'react'
import { Button } from 'reactstrap';

const Index = () => {
  const [count, setCount] = useState(0)
  const [number, setNumber] = useState(0)
  var funccount = new Set();
  const incrementCounter = useCallback(() => {
    setCount(count + 1)
  }, [count])
  const decrementCounter = useCallback(() => {
    setCount(count - 1)
  }, [count])
  const incrementNumber = useCallback(() => {
    setNumber(number + 1)
  }, [number])

  funccount.add(incrementCounter);
  funccount.add(decrementCounter);
  funccount.add(incrementNumber);
  alert(funccount.size);
  return (
    <div>
      <div>
        <h2><u>USE CALLBACK :</u></h2>
        <p>
          The <strong>useCallback</strong> hook is used when you have a component in which the child is rerendering again and again without need.
        </p>
        <p>
          Pass an inline callback and an array of dependencies. useCallback will return a memoized version of the callback that only changes if one of the dependencies has changed. This is useful when passing callbacks to optimized child components that rely on reference equality to prevent unnecessary renders.
        </p>
        <p><em>Syntax</em> :
          <strong>
            {`const memoizedCallback = useCallback(
            () => {
              doSomething(a, b);
            },
            [a, b],
            );`}

          </strong>
        </p>
      </div>
      <hr></hr>

      <div>
        Count: {count}
        <Button onClick={incrementCounter}>
          Increase counter
        </Button>
        <Button onClick={decrementCounter}>
          Decrease Counter
        </Button>
        <Button onClick={incrementNumber}>
          increase number
        </Button>
      </div>
    </div>
  )
}

export default Index