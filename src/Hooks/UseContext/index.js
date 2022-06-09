import { useState, createContext, useContext } from "react";
import ReactDOM from "react-dom/client";

const UserContext = createContext("testt");
const TestContext = createContext("testtsss");

const Component1=()=> {

  const [user, setUser] = useState("jhon doe");
  const testTwo = "hihihi  developer"
  return (
    <>
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
        
    <UserContext.Provider value={user}>
    <TestContext.Provider value={testTwo}>
      <h1>{`Hello ${user}!`}</h1>
      <h1>{`Hello ${testTwo}!`}</h1>
      <Component2 user={user} />
    </TestContext.Provider>
    </UserContext.Provider>
    </>
  );
}
export default Component1

const Component2=()=> {
  const test = useContext(TestContext);
  return (
    <>
      <h1>Component 2</h1>
      <h2>{`Hello again! ${test}`}</h2>
      <Component3 />
    </>
  );
}

const Component3=()=> {
  return (
    <>
      <h1>Component 3</h1>  
      <Component4 />
    </>
  );
}

const Component4=()=> {
  return (
    <>
      <h1>Component 4</h1>
      <Component5 />
    </>
  );
}

const Component5=()=> {

  const user = useContext(UserContext);
  const test = useContext(TestContext);
  return (
        <>
        
          <h1>Component 5</h1>
          <h2>{`Hello ${user} again! `}</h2>
          <h2>{`Hello again! ${test}`}</h2>
        </>
  );
}
