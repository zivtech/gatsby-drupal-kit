//Import needed libraries
import React from "react"

// this is shorthand for ExampleStatic = function(props)
const ExampleStatic = props => {
  // within this return is the magic of JSX 
  return (
    // components must return a single html element.. 
    <div>
      <h1>Hello World</h1>
      <div>The audience is not impressed</div>
    </div>
  );
}
// this is ES6 convention
export default ExampleStatic

/* 
To use in another compotent 

*/ 