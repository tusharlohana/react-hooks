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
      <h1>useRef</h1>
      <p>useRef hook is alternate of " document.getElementById "</p>

      <div className='d-flex'>
        <input className='form-control w-50' type='text' ref={inputRef} placeholder='Search...' />
        <Button color='primary' outline onClick={handleClick}>Search</Button>
      </div>
      <div>
        {value && <p>You have searched for : {value}</p>}
      </div>
    </>
  )
}

export default Index