//Following course on fullstackopen.com

import {useState} from 'react';

const Button = (props) => (
  <button onClick={props.onClick}>{props.text}</button>
)

const Title = (props) => (
  <h1>{props.title}</h1>
)

const StatisticsLine = (props) => {
  return (
  <div>{props.text} {props.value}</div>
  )
}

const Statistics = (props) => {
  const all = props.good + props.neutral + props.bad;
  const average = (props.good*1 + props.neutral*0 + props.bad*-1)/all;
  const positive = (props.good/all)*100;

  return (
    <div>
      <Title title={'statistics'} />
      { all == 0 ? (
      <p>No feedback given</p>
      ) : (
      <div>
      <StatisticsLine text={'good'} value={props.good}/>
      <StatisticsLine text={'neutral'} value={props.neutral}/>
      <StatisticsLine text={'bad'} value={props.bad}/>
      <StatisticsLine text={'all'} value={all}/>
      <StatisticsLine text={'average'} value={average}/>
      <StatisticsLine text={'positive'} value={positive + ' %'} />
      </div>
      )
      }
    </div>
  )
}

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
      
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App