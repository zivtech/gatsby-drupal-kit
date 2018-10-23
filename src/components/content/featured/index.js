import React from "react";
import Img from "gatsby-image";
import NodeInfo from "../../content/node-info";
import styled from "styled-components"

const FeaturedContainer = styled.div`
  margin:1em 0;
`
const FeaturedImage = styled(Img)`
  margin-right:1em;
  width:500px;
  float:left;
`
const Featured = props => {
  return (
    <FeaturedContainer>
      <FeaturedImage
        fluid={
          props.image
        }
      />
      <h3><a href={props.path}>{props.title}</a></h3>
      <NodeInfo 
        node={props.node}
      />
      <div>
        {props.content.replace(/(<([^>]+)>)/ig, "").substring(0, 899) + "..."}
      </div>
    </FeaturedContainer>
  )
}

export default Featured;