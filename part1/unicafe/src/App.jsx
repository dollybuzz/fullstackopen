const Header = (input) => {
  return (
    <div>
      <h1>{input.course}</h1>
    </div>
  )
}

const Content = (input) => {
  return (
    <div>
       <p>
        {input.part} {input.exercise}
      </p>
    </div>
  )
}

const Total = (input) => {
  return (
    <div>
      <p>Number of exercises {input.exercise1 + input.exercise2 + input.exercise3}</p>
    </div>
  )
}


const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <>
      <Header course={course} />
      <Content part={part1} exercise={exercises1} />
      <Content part={part2} exercise={exercises2} />
      <Content part={part3} exercise={exercises3} />
      <Total exercise1={exercises1} exercise2={exercises2} exercise3={exercises3} />
    </>
  )
}

export default App