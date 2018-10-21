import React from "react";
import styles from "./node-info.module.scss";
import Img from "gatsby-image";
import Container from "../../common/container";
import { rhythm } from "../../../utils/typography"

const NodeInfo = props => {
  return (
    <div className={styles.nodeInfo}>
      <div className={styles.byline}>By Dr. Billy Wayne Ruddick</div>
      <div className={styles.categories}>Filed under:
        {props.node.relationships &&
          props.node.relationships.field_tags.map(ing => <a key={ing.path.alias} className={styles.tag} href={ing.path.alias}> {ing.name} </a>)}
      </div>
    </div>
  )
}

export default NodeInfo;
