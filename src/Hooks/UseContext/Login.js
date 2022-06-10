import React, { useContext } from 'react'
import { Input } from 'reactstrap'
import { userContext } from './index'

const Login = () => {
    const {setUser}=useContext(userContext)
  return (
    <div>
    <Input className='w-50 mb-3' placeholder='Enter name...' onChange={(e)=>setUser(e.target.value)}/>
    </div>
  )
}

export default Login