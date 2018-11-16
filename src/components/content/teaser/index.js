import React from "react";
import styles from "./teaser.module.scss";
import Img from "gatsby-image";
import NodeInfo from "../../content/node-info";
import { rhythm } from "../../../utils/typography"
import { randomBytes } from "crypto";

const Teaser = props => {
  return (
    <div>
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
        {props.content.replace(/(<([^>]+)>)/ig, "").substring(0, 250) + "..."}
      </div>
    </div>
  )
}

export default Teaser;