import React from "react"

// make a "anonymous component"
const ExampleMarkupBarf = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      <p>{props.body}</p>
    </div>
  )
}

export default ExampleMarkupBarf