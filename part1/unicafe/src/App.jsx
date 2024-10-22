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

/*const Content = ... {
  return (
    <div>
       <Part .../>
       <Part .../>
       <Part .../>
    </div>
  )
}

const Part = (input) => {
  return ()
}*/

const Total = (input) => {
  return (
    <div>
      <p>Number of exercises {input.exercise1 + input.exercise2 + input.exercise3}</p>
    </div>
  )
}


const App = () => {
  const course = 'Half Stack application development'
  /*const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }*/

  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]


  return (
    <>
      <Header course={course} />
      <Content part={parts[0].name} exercise={parts[0].exercises} />
      <Content part={parts[1].name} exercise={parts[1].exercises} />
      <Content part={parts[2].name} exercise={parts[2].exercises} />
      <Total exercise1={exercises1} exercise2={exercises2} exercise3={exercises3} />
    </>
  )
}

export default App