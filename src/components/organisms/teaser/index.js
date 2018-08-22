import React from "react";
import styles from "./teaser.module.scss";
import Img from "gatsby-image";
import NodeInfo from "../../molecules/NodeInfo";
import Container from "../../atoms/container";
import { rhythm } from "../../../utils/typography"
import { randomBytes } from "crypto";

class Teaser extends React.Component {
  render() {
    return (
      <div
        css={{
          margin: '1em 0',
          marginBottom: rhythm(2),
          clear: 'both'
        }} className={styles.teaser}>
        <div className={styles.imageWrapper}>
          <Img
            fluid={
              this.props.image
            }
          />
        </div>
        <h3><a href={this.props.path}>{this.props.title}</a></h3>
        <NodeInfo 
          node={this.props.node}
        />
        <div>
          {this.props.content.replace(/(<([^>]+)>)/ig, "").substring(0, 250) + "..."};
        </div>
      </div>
    )
  }
}

export default Teaser;