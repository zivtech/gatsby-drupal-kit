import React from "react"
import gray from "gray-percentage"
import { rhythm, scale } from "../../../utils/typography"
import Header from "../global/header"
import Footer from "../global/footer"
import styled from "styled-components"
import Container from "../../../components/common/container"

const PageWrapper = styled.div`
  margin: 3rem auto;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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

