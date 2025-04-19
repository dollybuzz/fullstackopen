//Following course on fullstackopen.com

import {useState} from 'react';

const Display = (props) => {
  return (
    <div>{props.counter}</div>
  )
}

const App = () => {
  const [counter, setCounter] = useState(0);

  const increaseByOne = () => setCounter(counter+1);
  const setToZero = () => setCounter(0);

  return (
    <div>
      <Display counter={counter}/>
      <button onClick={increaseByOne}>plus</button>
      <button onClick={setToZero}>zero</button>
    </div>
  )
}

export default App