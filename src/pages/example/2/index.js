import React from "react"
import Helmet from 'react-helmet'


// make a "anonymous component"
const ExampleMarkupBarf = (props) => {
  return (
    <div>
      <h1>The Audience Isn't Impressed</h1>
      <p>...but don't worry... this is just the basic component</p>
    </div>
  )
}


const Example2 = (props) => {
  return (
    <div>
      <Helmet title="Example 3" />
      <ExampleMarkupBarf 
        title="The Audience Isn't Impressed" 
        subtitle="...but don't worry... this is just the basic component" 
      />
      <ExampleMarkupBarf
        title="But maybe they think this is cooler?" 
        subtitle="Though this isn't the cool part yet..."
      />
    </div>
  )
}

// note that we ony export the page... 
export default Example2