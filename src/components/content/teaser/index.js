import React from "react";
import styled from "styled-components";
import Img from "gatsby-image";
import NodeInfo from "../../content/node-info";
import { Link } from "gatsby";

const TeaserContainer = styled.div`
  clear:both;
  margin:2eml
  min-height:180px;
  padding:1em 0;
`;
const TeaserImage = styled(Img)`
  margin-right: 1em;
  float: left;
  width: 200px;
`;

const Teaser = props => {
  return (
    <TeaserContainer>
      <TeaserImage fluid={props.image} />
      <h3>
        <Link to={props.path}>{props.title}</Link>
      </h3>
      <NodeInfo node={props.node} />
      <div>
        {props.content.replace(/(<([^>]+)>)/gi, "").substring(0, 200) + "..."}
      </div>
    </TeaserContainer>
  );
};

export default Teaser;
