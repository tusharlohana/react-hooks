import React, { createContext, useState } from 'react'
import Login from './Login'
import User from './User'

export const userContext = createContext(null)
 
const Index = () => {
  const [user, setUser] = useState('')
  return (
    <userContext.Provider value={{user, setUser}}>
    <div>
        <h2><u>USE CONTEXT :</u></h2>
            <div>
                <p>
                    <strong>useContext</strong> Context provides a way to pass data or state through the component tree without having to pass props down manually through each nested component. It is designed to share data that can be considered as global data for a tree of React components.
                </p>
                <p>
                Context API uses Context. Provider and Context. Consumer Components pass down the data but it is very cumbersome to write the long functional code to use this Context API. So useContext hook helps to make the code more readable, less verbose and removes the need to introduce Consumer Component. 
                </p>
                <p><em>Syntax :</em>
                    <strong> <br /><br />const dataContext = useContext(initialValue);</strong>
                </p>
                
            </div>
            <hr></hr>
        </div>
        <h5>This is parent...</h5>
      <Login/>
      <User/>
    </userContext.Provider>
  )
}

export default Index