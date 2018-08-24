import React from "react";
import styles from "./featured.module.scss";
import Img from "gatsby-image";
import NodeInfo from "../../content/node-info";
import Container from "../../common/container";
import { rhythm } from "../../../utils/typography"
import { randomBytes } from "crypto";

class Featured extends React.Component {
  render() {
    return (
      <Container className={styles.featured} paddingTop={rhythm(1 / 2)} paddingTop={rhythm(1 / 2)}>
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
          {this.props.content.replace(/(<([^>]+)>)/ig, "").substring(0, 899) + "..."}
        </div>
      </Container>
    )
  }
}

export default Featured;