import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

const NodeInfoContainer = styled.div`
  margin-bottom: 1em;
`;

const NodeInfo = props => {
  return (
    <NodeInfoContainer>
      By Dr. Billy Wayne Ruddick | Filed under:
      <span className="tags">
        {props.node.relationships &&
          props.node.relationships.field_tags.map(ing => (
            <Link key={ing.path.alias} to={ing.path.alias}>
              {" "}
              {ing.name}{" "}
            </Link>
          ))}
      </span>
    </NodeInfoContainer>
  );
};

export default NodeInfo;
