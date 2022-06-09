import React, { useRef, useState } from 'react'
import { Button, Input } from 'reactstrap'

const Index = () => {
  const [value, setValue] = useState('')
  const inputRef = useRef(null)

  const handleClick = () => {
    console.log(inputRef.current.value);
    setValue(inputRef.current.value)
  }
  return (
    <>
      <h2><u>USE REF :</u></h2>
      <div>
        <p>
          The<strong>useRef </strong>is a hook that allows to directly create a reference to the DOM element in the functional component.
        </p>
        <p>
          useRef returns a mutable ref object whose .current property is initialized to the passed argument ( initialValue ). The returned object will persist for the full lifetime of the component.
        </p>
        <p> Or we can say that useRef works kinda similar as <br></br>
        <b>" document.getElementById " </b>in Js </p>
        <p><em>Syntax</em> : The first element is the initial state and the second one is a function that is used for updating the state.
          <strong> <br /><br />const refContainer = useRef(initialValue);</strong>
        </p>
      </div>
      <hr></hr>

      <div className='d-flex'>
        <input className='form-control w-50' type='text' ref={inputRef} placeholder='Search...' />
        <Button color='primary' outline onClick={handleClick}>Search</Button>
      </div>
      <div>
        {value && <p className='mt-3'>You have searched for : {value}</p>}
      </div>
    </>
  )
}

export default Index