//Following course on fullstackopen.com

import {useState} from 'react';

const History = (props) => {
  if (props.allClick.length === 0) {
    return (
      <div>the app is used by pressing the buttons</div>
    )
  }

  return (
    <div>button press history: {props.allClick.join(' ')}</div>
  )
}

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

  return (
    <div>
     {left}
     <button onClick={handleLeftClick}>left</button>
     <button onClick={handleRightClick}>right</button>
     {right}
     <History allClick={allClicks} />
    </div>
  )
}

export default App