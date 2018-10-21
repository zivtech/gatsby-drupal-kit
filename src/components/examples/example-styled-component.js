import React from "react";
import styled from "styled-components"

// These style components create HTML elements with a autogenerate class
// styles are not inline, they end up in a seperate CSS file
// We aren't barbarians! 
const UglyWrapper = styled.div`
  background-color:red;
  color:black;
  border:5px yellow dotted;
`
const UglyHeader = styled.h3`
  font-family:"Comic Sans";
`
const ExampleStyledComponent = props => { 
  return (
    <UglyWrapper>
      <UglyHeader>{props.title}</UglyHeader>
      {props.children}
    </UglyWrapper>

  )
}

export default ExampleStyledComponent;
