const Header = (input) => {
  return (
    <div>
      <h1>{input.a}</h1>
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

const Total = (input) => {
  return (
    <div>
      <p>Number of exercises {input.a + input.b + input.c}</p>
    </div>
  )
}


const App = () => {
 const course = {
  name: 'Half Stack application development',
  parts: [
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
 }

  return (
    <>
      <Header a={course.name} />
      <Content a={course.parts[0].name} b={course.parts[0].exercises} />
      <Content a={course.parts[1].name} b={course.parts[1].exercises} />
      <Content a={course.parts[2].name} b={course.parts[2].exercises} />
      <Total a={course.parts[0].exercises} b={course.parts[1].exercises} c={course.parts[2].exercises} />
    </>
  )
}

export default App