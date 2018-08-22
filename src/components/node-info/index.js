import React from "react";
import styles from "./node-info.module.scss";
import Img from "gatsby-image";
import Container from "../container";
import { rhythm } from "../../utils/typography"

class NodeInfo extends React.Component {
  render() {
    return (
      <div className={styles.articleInfo}>
        <strong>Filed under:</strong>
        {data.nodeArticle.relationships.field_tags &&
          data.nodeArticle.relationships.field_tags.map(ing => <a className={styles.tag} href={ing.path.alias}> {ing.name} </a>)}
      </div>
    )
  }
}

export default Menu;
