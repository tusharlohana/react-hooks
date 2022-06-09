import React from 'react'
import {  Routes,  Route,} from 'react-router-dom';
import State from './Hooks/UseState'
import Context from './Hooks/UseContext'
import Memo from './Hooks/UseMemo';
import UseRef from './Hooks/UseRef';
import Callback from './Hooks/UseCallBack';
import Reducer from './Hooks/UseReducer';

const App = () => {
  return (
    <div className='container'>
     <Routes>
       <Route path='/' element={<State/>}></Route>
       <Route path='state' element={ <State/>}></Route>
       <Route path='reducer' element={ <Reducer/>}></Route>
       <Route path='context' element={ <Context/>}></Route>
       <Route path='useRef' element={ <UseRef/>}></Route>
       <Route path='memo' element={ <Memo/>}></Route>
       <Route path='call-back' element={ <Callback/>}></Route>
     </Routes>
    </div>
  )
}

export default App