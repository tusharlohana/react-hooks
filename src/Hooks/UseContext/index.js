import { useState, createContext, useContext } from "react";
import ReactDOM from "react-dom/client";

const UserContext = createContext("testt");
const TestContext = createContext("testtsss");

const Component1=()=> {

  const [user, setUser] = useState("jhon doe");
  const testTwo = "hihihi  developer"
  return (
    <UserContext.Provider value={user}>
    <TestContext.Provider value={testTwo}>
      <h1>{`Hello ${user}!`}</h1>
      <h1>{`Hello ${testTwo}!`}</h1>
      <Component2 user={user} />
    </TestContext.Provider>
    </UserContext.Provider>
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
