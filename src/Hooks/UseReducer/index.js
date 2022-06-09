import React, { useReducer } from 'react'
import { Button } from 'reactstrap';
import reducer from './reducer';

const Index = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0, showText: false })

  return (
    <div>
      <div>
        <h2><u>USE REDUCER :</u></h2>
        <p>
          <strong>useReducer</strong> is one of the additional Hooks that shipped with React v16.8. An alternative to the useState Hook, useReducer helps you manage complex state logic in React applications. When combined with other Hooks like useContext, useReducer can be a good alternative to Redux, Recoil or MobX. In certain cases, it is an outright better option.
        </p>
        <p><em>Syntax</em> : The useReducer hook takes three arguments including reducer, initial state, and the function to load the initial state lazily.
          <strong> <br /><br />const [state, dispatch] = useReducer(reducer, initialArgs, init);
          </strong>
        </p>
      </div>
      <hr></hr>
      <div className='p-3'>
        <h3> Current Count is : {state.count}</h3>
        <Button className='btn-primary' onClick={() => {
          dispatch({ type: 'INCREMENT' })
          dispatch({ type: 'showText' })
        }}>Click Here
        </Button>
        {state.showText && <p className='mt-3'>This it the text</p>}
      </div>
    </div>
  )
}

export default Index