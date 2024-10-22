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
        {input.a} {input.b}
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
      <p>Number of exercises {input.a + input.b + input.c}</p>
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
      <Content a={parts[0].name} b={parts[0].exercises} />
      <Content a={parts[1].name} b={parts[1].exercises} />
      <Content a={parts[2].name} b={parts[2].exercises} />
      <Total a={parts[0].exercises} b={parts[1].exercises} c={parts[2].exercises} />
    </>
  )
}

export default App