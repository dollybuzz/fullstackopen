//Following course on fullstackopen.com

import {useState} from 'react';

const Button = (props) => (
  <button onClick={props.onClick}>{props.text}</button>
)

const Title = (props) => (
  <div><h1>{props.title}</h1></div>
)

const Display = (props) => (
  <div>{props.text} {props.value}</div>
)

const App = () => {
  //save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  
  const setToGood = (value) => { setGood(value) };
  const setToNeutral = (value) => { setNeutral(value) };
  const setToBad = (value) => { setBad(value) };

  return (
    <div>
      <Title title={'give feedback'} />
      <Button onClick={() => {setToGood(good + 1)}} text={'good'}/>
      <Button onClick={() => {setToNeutral(neutral + 1)}} text={'neutral'}/>
      <Button onClick={() => {setToBad(bad + 1)}} text={'bad'}/>
      <Title title={'statistics'} />
      <Display text={'good'} value={good}/>
      <Display text={'neutral'} value={neutral}/>
      <Display text={'bad'} value={bad}/>
      <Display text={'all'} value={good + neutral + bad}/>
    </div>
  )
}

export default App