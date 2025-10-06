//Following course on fullstackopen.com

import {useState} from 'react';

const Button = (props) => (
  <button onClick={props.onClick}>{props.text}</button>
)

const Title = (props) => (
  <div><h1>{props.title}</h1></div>
)

const Statistics = (props) => (
  <div>{props.text} {props.value}</div>
)



const App = () => {
  //save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const all = good + neutral + bad;
  const average = (good*1 + neutral*0 + bad*-1)/all;
  const positive = (good/all)*100;
  
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
      { good == 0 && neutral == 0 && bad == 0 ? (
        <div>No Feedback given</div>
      ) : (
        <div>
      <Statistics text={'good'} value={good}/>
      <Statistics text={'neutral'} value={neutral}/>
      <Statistics text={'bad'} value={bad}/>
      <Statistics text={'all'} value={all}/>
      <Statistics text={'average'} value={average}/>
      <Statistics text={'positive'} value={positive + ' %'} />
      </div>
      )
      }
    </div>
  )
}

export default App