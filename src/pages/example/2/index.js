import React from "react"
import Helmet from 'react-helmet'


// make a "anonymous component"
const ExampleMarkupBarf = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      <p>{props.subtitle}</p>
    </div>
  )
}


const Example2 = (props) => {
  return (
    <div>
      <Helmet title="Now with custom components" />
      <ExampleMarkupBarf 
        title="The Audience Isn't Impressed" 
        subtitle="...but don't worry... this is just the basic component" 
      />
      <ExampleMarkupBarf
        title="But maybe they think this is getting cooler?" 
        subtitle="this is hardly cool compared to other stuff."
      />
    </div>
  )
}

// note that we ony export the page... 
export default Example2