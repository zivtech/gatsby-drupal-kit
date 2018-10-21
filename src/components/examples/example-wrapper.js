import React from "react"
import styled from "styled-components"

const ExampleContainer = styled.div`
  margin:1em 0;
  border:1px solid #ccc;
  padding:1em;
`
const ExampleContainerTitle = styled.h3`
  font-weight:bold;
`
const ExampleWrapper = props => {
  return ( 
    <ExampleContainer>
      <ExampleContainerTitle>
      {props.title}
      </ExampleContainerTitle>
     {props.children}
    </ExampleContainer>
  );
}

export default ExampleWrapper