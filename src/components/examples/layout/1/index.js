import React from "react"
import styled from "styled-components"

const LayoutWrapper = styled.div`
  margin: 3rem auto;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`


export default ({ children }) => 
  <LayoutWrapper>
    <div class="header">
      <h1>The BEST site</h1>
    </div>
    <div className="content">{children}</div>
    <div className="footer">
      Fake. copyright Me. All this content is awesome and mine.
    </div>
  </LayoutWrapper>