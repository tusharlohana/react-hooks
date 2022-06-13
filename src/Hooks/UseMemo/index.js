import React, { useMemo, useState } from 'react'
import { Input } from 'reactstrap';

const Memo = () => {
  const [name, setName] = useState('');
  const [val1, setVal1] = useState(0);
  const [val2, setVal2] = useState(0);

  const add = (num1, num2) => {
    console.log('Adding numbers',num1,num2);
    return parseInt(num1) + parseInt(num2);
  };

  const answer = useMemo(() => {
    return add(val1, val2);
  }, [val1, val2]);
  return (
    <div>
      <div>
        <h2><u>USE MEMO :</u></h2>
        <div>
          <p>
            <strong>useContext</strong> The useMemo is a hook used in the functional component of react that returns a memoized value. A memoized function remembers the results of output for a given set of inputs.
          </p>

          <p><em>Syntax :</em>
            <strong> <br /><br />const memoizedValue = useMemo(() =&gt; computeExpensiveValue(a, b), [a, b]);</strong>
          </p>

        </div>
        <hr></hr>

        <div className='w-50'>
          <Input
            placeholder="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          /><br></br>
          <Input
            placeholder="Value 1"
            value={val1}
            onChange={(e) => setVal1(e.target.value)}
          /><br></br>
          <Input
            placeholder="Value 2"
            value={val2}
            onChange={(e) => setVal2(e.target.value)}
          /><br></br>
          <h4>Sum Of Numbers : {answer}</h4>
        </div>
      </div>
    </div>
  )
}

export default Memo