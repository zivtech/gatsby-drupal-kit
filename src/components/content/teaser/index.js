import React from "react";
import styles from "./teaser.module.scss";
import Img from "gatsby-image";
import NodeInfo from "../../content/node-info";
import Container from "../../common/container";
import { rhythm } from "../../../utils/typography"
import { randomBytes } from "crypto";

class Teaser extends React.Component {
  render() {
    return (
      <Container className={styles.teaser} paddingBottom={0} paddingTop={rhythm(1 / 2)}>
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
          {this.props.content.replace(/(<([^>]+)>)/ig, "").substring(0, 250) + "..."}
        </div>
      </Container>
    )
  }
}

export default Teaser;