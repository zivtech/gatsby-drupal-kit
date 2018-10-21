import React from "react"
import gray from "gray-percentage"
import { rhythm, scale } from "../../../utils/typography"
import Container from "../../../components/common/container"
import Header from "../global/header"
import Footer from "../global/footer"


const DefaultLayout = props => {
    return (
      <div>
        <Header items={props.data.allTaxonomyTermTags.edges} />
        <Container paddingBottom={0} paddingTop={rhythm(1 / 2)}>

          <div css={{ width: 193, overflow: `hidden` }}>
            <h1
              css={{
                color: gray(10),
                fontSize: scale(1.8).fontSize,
                margin: 0,
                fontFamily: `Rochester, serif`,
                float: `right`,
                fontDisplay: `block`,
              }}
            >
              Drupal
              </h1>
            <h4
              css={{
                color: gray(10),
                fontFamily: `"Josefin Sans", sans-serif`,
                marginBottom: 0,
                float: `right`,
              }}
            >
              Gatsby
              </h4>
          </div>

          <div css={{ float: `right` }}>

          </div>
        </Container>
        {props.children}
        <Footer items={props.data.allNodePage.edges} /> 
      </div>
    )
}

export default DefaultLayout

