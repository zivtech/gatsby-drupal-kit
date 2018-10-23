import React from "react"
import styled from "styled-components"

const LayoutWrapper = styled.div`
  .header {
    background-color: #000;
    h1 {
      font-size:2em; 
      text-align center;
    }
  }
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