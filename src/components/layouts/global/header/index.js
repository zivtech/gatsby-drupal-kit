import React from "react";
import styles from "./header.module.scss";
import Img from "gatsby-image";
import Container from "../../../common/container";
import constants from "../../../../utils/constants"
import { rhythm } from "../../../../utils/typography"


class Header extends React.Component {
  render() {
    // By Default... we're simply using data from tags taxonomy as the 
    // the main menu
    return (
      <header
        css={{
          background: constants.paleYellow,
        }}
      >
        <div className={styles.mainMenu}>
          <ul>
            <li><a href="/">Home</a></li>
            {this.props.items &&
              this.props.items.map(ing => <li key={ing.node.path.alias}><a href={ing.node.path.alias}> {ing.node.name}</a></li>)}
          </ul>
        </div>
        <div
          css={{
            height: rhythm(1.5),
            margin: `0 auto`,
            maxWidth: 1024,
          }}
        >
        </div>
      </header>

    )
  }
}

export default Header;
