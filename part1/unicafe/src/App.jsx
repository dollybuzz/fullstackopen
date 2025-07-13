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
  const [total, setTotal] = useState([]);

  const handleLeftClick = () => {
    setAll(allClicks.concat('L'));
    const updatedLeft = left + 1;
    setLeft(left + 1);
    setTotal(updatedLeft + right);
  }

  const handleRightClick = () => {
    setAll(allClicks.concat('R'));
    const updatedRight = right + 1;
    setRight(right + 1);
    setTotal(left + updatedRight);
  }

  return (
    <div>
     {left}
     <button onClick={handleLeftClick}>left</button>
     <button onClick={handleRightClick}>right</button>
     {right}
     <p>{allClicks.join(' ')}</p>
     <p>total {total}</p>
    </div>
  )
}

export default App