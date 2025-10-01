//Following course on fullstackopen.com

import {useState} from 'react';

const Button = ({onClick, text}) => <button onClick={onClick}>{text}</button>

const App = () => {
  const [value, setValue] = useState(10);

  const hello = () => {
    const handler = () => console.log('hello world');
    return handler;
  }

  return (
    <div>
      {value}
      <button onClick={hello()}>button</button>
    </div>
  )
}

export default App