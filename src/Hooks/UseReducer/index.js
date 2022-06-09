import React, { useReducer } from 'react'
import { Button } from 'reactstrap';
import reducer from './reducer';

const Index = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0, showText: true })

  return (
    <div>
      <h1>USE STATE :</h1>
      <div className='p-3'>
        <h3> Current Count is : {state.count}</h3>
        <Button className='btn-primary' onClick={() => {
          dispatch({ type: 'INCREMENT' })
          dispatch({ type: 'showText' })
        }}>Click Here
        </Button>
        {state.showText && <p>This it the text</p>}
      </div>
    </div>
  )
}

export default Index