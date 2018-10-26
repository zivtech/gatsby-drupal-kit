import React from "react"
import Helmet from 'react-helmet'

const Example1 = (props) => {
  return (
    <div>
      <Helmet>
        <title>Great Example</title>
        <meta name="seo-companycrap" content="Examples, examples, examples, great, excellent" />
      </Helmet> 
      <h1>The Audience Isn't Impressed</h1>
      <h3>...but don't worry... this is just the basic component</h3>
    </div>
  )
}

export default Example1

