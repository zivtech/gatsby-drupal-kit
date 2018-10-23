
import React from "react"
import Helmet from 'react-helmet'
import Layout from "../../../components/examples/layout/2"
import ExampleMarkupBarf from "../../../components/examples/example-markup-barf.js"

const Example3 = (props) => {
  return (
    <Layout>
      <Helmet title="Example 3" />
      <ExampleMarkupBarf 
        title="The Audience Isn't Impressed" 
        subtitle="...but don't worry... this is just the basic component" 
      />
    </Layout>
  )
}

export default Example3