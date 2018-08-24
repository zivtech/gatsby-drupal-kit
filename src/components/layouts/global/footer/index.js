import React from "react";
import styles from "./footer.module.scss";
import Img from "gatsby-image";
import Container from "../../../common/container";
import { rhythm } from "../../../../utils/typography"
import constants from "../../../../utils/constants"


class FooterLinks extends React.Component {
  render() {
    return (
      <footer css={{ background: constants.paleYellow }}>
        <Container>
          <div css={{ maxWidth: `50%`, float: `left` }}>
            <p>
              <strong>Drupal Gatsby</strong>
            </p>
            <p>
              Read the{` `}
              <a href="https://github.com/zivtech/gatsby-drupal8">
                source for this website.
            </a>
            </p>
            <p><a href="http://dev-drupal-gatsby.pantheonsite.io">Drupal 8 source site</a></p>
          </div>
          <div
            css={{ float: `right`, maxWidth: `50%`, paddingLeft: rhythm(1) }}
          >
            <div className={styles.footerLinks}>
              <ul>
                {this.props.items &&
                  this.props.items.map(ing => <li key={ing.node.path.alias}><a href={ing.node.path.alias}> {ing.node.title}</a></li>)}
              </ul>
            </div>
            <br />
            Copyright {new Date().getFullYear()} Terms & Conditions
        </div>
        </Container>
      </footer>
    )
  }
}

export default FooterLinks;

