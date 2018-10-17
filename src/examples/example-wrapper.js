import React from "react"

const ExampleWrapper = props => {
  return ( 
    <div class="wrapper">
     {props.children}
    </div>
  );
}

export default ExampleWrapper