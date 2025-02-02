//Following course on fullstackopen.com

//Exercise 1.5 Change the course and its parts into a single Javascript object. Fix everything that breaks.
const Single = (input) => {
  return (
    <div>
      <h1>{input.h1}</h1>
      <p>{input.n0} {input.e0}</p>
      <p>{input.n1} {input.e1}</p>
      <p>{input.n2} {input.e2}</p>
      <p>Number of exercises {input.total0 + input.total1 + input.total2}</p>
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
      <Single h1={course.name} 
      n0={course.parts[0].name} e0={course.parts[0].exercises} 
      n1={course.parts[1].name} e1={course.parts[1].exercises} 
      n2={course.parts[2].name} e2={course.parts[2].exercises}
      total0={course.parts[0].exercises} total1={course.parts[1].exercises} total2={course.parts[2].exercises}/>
    </>
  )
}

export default App