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

const Button = ({onClick, text}) => <button onClick={onClick}>{text}</button>

const App = () => {
  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(0);
  const [allClicks, setAll] = useState([]);
  const [value, setValue] = useState(10);

  const handleLeftClick = () => {
    setAll(allClicks.concat('L'));
    setLeft(left + 1);
  }

  const handleRightClick = () => {
    setAll(allClicks.concat('R'));
    setRight(right + 1);
  }

  const handleClick = () => { //using event handlers
    console.log("Clicked the button");
    setValue(0);
  }

  const resetValue = () => { //calling a function that returns a function
    const reset = () => {
      setValue(10);
    }
    return reset;
  }

  return (
    <div>
     {left}
     <Button onClick={handleLeftClick} text='left' />
     <Button onClick={handleRightClick} text='right' />
     {right}
     <History allClick={allClicks} />
     <br></br>
      {value}
     <button onClick={handleClick}>zero</button>
     <button onClick={resetValue()}>reset</button>
    </div>
  )
}

export default App