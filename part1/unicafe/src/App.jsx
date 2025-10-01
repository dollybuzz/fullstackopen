//Following course on fullstackopen.com

import {useState} from 'react';

const Button = ({onClick, text}) => <button onClick={onClick}>{text}</button>

const App = () => {
  const [value, setValue] = useState(10);

  const hello = (who) => () => { console.log('hello', who) };

  const setToValue = (newValue) => () => {
    console.log('value now', newValue);
    setValue(newValue);
  }

  return (
    <div>
      {value}<br/>
      <button onClick={setToValue(1000)}>thousand</button>
      <button onClick={setToValue(0)}>reset</button>
      <button onClick={setToValue(value + 1)}>increment</button>
    </div>
  )
}

export default App