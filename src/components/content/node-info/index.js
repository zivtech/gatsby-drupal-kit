import React from "react";
import styles from "./node-info.module.scss";
import Img from "gatsby-image";
import Container from "../../common/container";
import { rhythm } from "../../../utils/typography"

class NodeInfo extends React.Component {
  render() {
    return (
      <div className={styles.nodeInfo}>
        <strong>By Dr. Billy Wanye Ruddick</strong><br />
        <strong>Filed under:</strong>
        {this.props.node.relationships &&
          this.props.node.relationships.field_tags.map(ing => <a className={styles.tag} href={ing.path.alias}> {ing.name} </a>)}
      </div>
    )
  }
}

export default NodeInfo;
