import React from "react"
import Header from "../global/header"
import Footer from "../global/footer"
import styled from "styled-components"

const PageWrapper = styled.div`
  margin: 3rem auto;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding:1em;
  background-color:
`

const DefaultLayout = props => {
    return (
      <PageWrapper>
        <Header items={props.data.allTaxonomyTermTags.edges} />
        {props.children}
        <Footer items={props.data.allNodePage.edges} /> 
      </PageWrapper>
    )
}

export default DefaultLayout

