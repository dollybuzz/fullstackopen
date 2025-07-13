//Following course on fullstackopen.com

import {useState} from 'react';

//destructured arrow form component
  const Display = ({counter}) => <div>{counter}</div>

//destructured component
const Button = ({onClick, text}) => <button onClick={onClick}>{text}</button>

const App = () => {
  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(0);
  const [allClicks, setAll] = useState([]);

  const handleLeftClick = () => {
    setAll(allClicks.concat('L'));
    setLeft(left + 1);
  }

  const handleRightClick = () => {
    setAll(allClicks.concat('R'));
    setRight(right + 1);
  }

  /*using the push method then updating the state also works
  ex:
  const handleLeftClick = () => {
    allClicks.push('L');
    setAll(allClicks);
    setLeft(left + 1);
    }
    however, do not do this since state of React components should never be modified directly
  */

  return (
    <div>
     {left}
     <button onClick={handleLeftClick}>left</button>
     <button onClick={handleRightClick}>right</button>
     {right}
     <p>{allClicks.join(' ')}</p>
    </div>
  )
}

export default App