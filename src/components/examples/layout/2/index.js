import React from "react"
import styled from "styled-components"

const LayoutWrapper = styled.div`
  margin:0 px;
  background:gold;
`;

const HeaderWrapper = styled.h1`
  margin:0 px;
  background:gold;
`;

export default ({ children }) => 
  <LayoutWrapper>
    <HeaderWrapper>
      <h1>The BEST site</h1>
    </HeaderWrapper>
    <div className="content">{children}</div>
    <div className="footer">
      All this content is awesome and mine.
    </div>
  </LayoutWrapper>


