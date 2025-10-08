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
    <tr>
      <td>{props.text}</td>
      <td>{props.value}</td>
    </tr>
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
        <table>
          <tbody>
            <StatisticsLine text={'good'} value={props.good}/>
            <StatisticsLine text={'neutral'} value={props.neutral}/>
            <StatisticsLine text={'bad'} value={props.bad}/>
            <StatisticsLine text={'all'} value={all}/>
            <StatisticsLine text={'average'} value={average}/>
            <StatisticsLine text={'positive'} value={positive + ' %'} />
          </tbody>
        </table>
      </div>
      )
      }
    </div>
  )
}

const App = () => {
  
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ];

  

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [selected, setSelected] = useState(0);
  const [vote, setVote] = useState([0, 0, 0, 0, 0, 0, 0, 0]);
  const randomNum = Math.floor(Math.random()*anecdotes.length);
  
  const setToGood = (value) => { setGood(value) };
  const setToNeutral = (value) => { setNeutral(value) };
  const setToBad = (value) => { setBad(value) };
  const setToSelected = (value) => { setSelected(value) };
 
  const setToVote = (value) => {
    setVote(() => { 
    const copy = [...vote];
    copy[value] = copy[value] + 1
    return copy;
    })
  };

  return (
    <div>
      <Title title={'anecdotes'} />
      <div>{anecdotes[selected]}</div><br/>
      <div>has {vote[selected]} votes</div>
      <Button onClick={() => {setToVote(selected)}} text={"vote"}/>
      <Button onClick={() => {setToSelected(randomNum)}} text={"next anecdote"}/>
      
      <Title title={'give feedback'} />
      <Button onClick={() => {setToGood(good + 1)}} text={'good'}/>
      <Button onClick={() => {setToNeutral(neutral + 1)}} text={'neutral'}/>
      <Button onClick={() => {setToBad(bad + 1)}} text={'bad'}/>
      
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App