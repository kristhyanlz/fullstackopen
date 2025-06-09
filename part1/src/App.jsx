const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}

const Total = ({contents}) => {
  let total = 0;
  contents.forEach(element => {
    total += element.exercises
  });

  return(
    <p>
      Number of exercises {total}
    </p>
  )
}

const Content = ({contents}) => {
  return (
    <>
      {
        contents.map((ele, idx) => (
          <p key={idx}>
            {ele.part} {ele.exercises}
          </p>
        ))
      }
    </>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const contents = [
    { 
      part: 'Fundamentals of React',
      exercises : 10
    },
    { 
      part: 'Using props to pass data',
      exercises: 7
      
    },
    {
      part: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <div>
      <Header course={course}/>
      <Content contents={contents}/>
      <Total contents={contents}/>
    </div>
  )
}

export default App