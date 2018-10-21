import React from "react";
import styles from "./featured.module.scss";
import Img from "gatsby-image";
import NodeInfo from "../../content/node-info";
import Container from "../../common/container";
import { rhythm } from "../../../utils/typography"
import { randomBytes } from "crypto";

const Featured = props => {
  return (
    <Container className={styles.featured} paddingTop={rhythm(1 / 2)} paddingTop={rhythm(1 / 2)}>
      <div className={styles.imageWrapper}>
        <Img
          fluid={
            props.image
          }
        />
      </div>
      <h3><a href={props.path}>{props.title}</a></h3>
      <NodeInfo 

        node={props.node}
      />
      <div>
        {props.content.replace(/(<([^>]+)>)/ig, "").substring(0, 899) + "..."}
      </div>
    </Container>
  )
}

export default Featured;