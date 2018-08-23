import React from "react";
import styles from "./footer-links.module.scss";
import Img from "gatsby-image";
import Container from "../../common/container";
import { rhythm } from "../../../utils/typography"


class FooterLinks extends React.Component {
  render() {
    // By Default... we're simply using data from tags taxonomy as the 
    // the main menu
    return (
      <div className={styles.footerLinks}>
        <ul>
          {this.props.items &&
            this.props.items.map(ing => <li key={ing.node.path.alias}><a href={ing.node.path.alias}> {ing.node.title}</a></li>)}
        </ul>
      </div>

    )
  }
}

export default FooterLinks;
