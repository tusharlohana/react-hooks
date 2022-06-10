import React, { useContext } from 'react'
import { Input } from 'reactstrap'
import { userContext } from './index'

const User = () => {
    const {user}=useContext(userContext)

  return (
    <div>
    <h1> Hello... {user}</h1>
    <small>This is from child component</small>
    <SubChildUser/>
    </div>
  )
}

export default User


const SubChildUser = () => {
    const {user}=useContext(userContext)

  return (
    <div>
    <h1> Hello...again !! {user}</h1>
    <small>This is from sub child component</small>
    </div>
  )
}

export {SubChildUser}


