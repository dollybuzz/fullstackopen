//Following course on fullstackopen.com

import {useState} from 'react';

const Button = ({onClick, text}) => <button onClick={onClick}>{text}</button>

const App = () => {
  const [value, setValue] = useState(10);

  const hello = (who) => () => { console.log('hello', who) };

  return (
    <div>
      {value}
      <button onClick={hello('world')}>button</button>
      <button onClick={hello('react')}>button</button>
      <button onClick={hello('function')}>button</button>
    </div>
  )
}

export default App