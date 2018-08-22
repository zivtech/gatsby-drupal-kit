import React from "react";
import styles from "./menu.module.scss";
import Img from "gatsby-image";
import Container from "../container";
import { rhythm } from "../../utils/typography"


class Menu extends React.Component {
  render() {
           // By Default... we're simply using data from tags taxonomy as the 
          // the main menu
    return (
      <div className={styles.mainMenu}>
        <ul>
          <li><a href="/">Home</a></li>
   
          {this.props.items &&
                  this.props.items.map(ing => <li><a href={ing.node.path.alias}> {ing.node.name}</a></li>)}
        </ul>
      </div>
  
    )
  }
}

export default Menu;
