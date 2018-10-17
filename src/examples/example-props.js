import React from "react"

const ExampleProps = props => {
  return ( 
    <div class="yes">
      <h1>{props.greeting}, {props.name}</h1>
      <div>{props.message}</div>
    </div>
  );
}

export default ExampleProps