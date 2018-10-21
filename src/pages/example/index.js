import React from "react"
import {graphql} from "gatsby"
import StaticComponent from "../../components/examples/example-static.js"
import StaticProps from "../../components/examples/example-props.js"
import ExampleWrapper from "../../components/examples/example-wrapper.js"
import ExampleStateful from "../../components/examples/example-stateful.js"
import ExampleStyledComponent from "../../components/examples/example-styled-component.js"
import styled from "styled-components"

const ExamplePageWrapper = styled.div`
  padding:4em;
`
const ExamplePage = ({ data }) => (
  <ExamplePageWrapper>
    <ExampleWrapper title="example-static.js - This component does not change ever.">
      <StaticComponent />
    </ExampleWrapper>
    <ExampleWrapper title="example-props.js instance 1 - This component has properties passed in.">
      <StaticProps name="dude" greeting="Yo" message="Chillin, and stuff" />
    </ExampleWrapper>
    <ExampleWrapper title="example-props.js instance 2 - name, greeting, message change. Still same component">
      <StaticProps name="Friend" greeting="We are wrapping." message="Chillin, and stuff" />
    </ExampleWrapper>
    <ExampleWrapper title="example-stateful.js - This has a dumb button that will increment up when clicked">
      <ExampleStateful name="Friend" greeting="We are wrapping." message="Chillin, and stuff" />
    </ExampleWrapper>
    <ExampleWrapper title="example-styled-component.js One ugly ass example wrapper using styled components">
      <ExampleStyledComponent title="Web design shall be impactful">
        <p>And Robust!</p>
      </ExampleStyledComponent>
    </ExampleWrapper>
  </ExamplePageWrapper>
)

export default ExamplePage

export const query = graphql`
  query exampleQuery {
  ...AllPages
  ...AllTags
  latestArticles: allNodeArticle(
    limit: 1000
    skip: 1
    sort: {
      fields: nid
      order: DESC
    }
    
  ) {
    edges {
      node {
        ...ArticleNode
      }
    }
  }
  featuredArticle: allNodeArticle(
      limit: 1
      sort: {
        fields: nid
        order: DESC
      }
      
    ) {
      edges {
        node {
          ...ArticleNode
        }
      }
    }
  }
`

