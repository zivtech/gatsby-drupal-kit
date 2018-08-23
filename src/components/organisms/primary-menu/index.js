import React from "react";
import styles from "./primary-menu.module.scss";
import Img from "gatsby-image";
import Container from "../../common/container";
import { rhythm } from "../../../utils/typography"

import { StaticQuery, graphql } from "gatsby"

export default () => (
  <StaticQuery
    query={graphql`
      query HeadingQuery {
        allTaxonomyTermTags {
          edges {
            node {
              name
              tid
              path {
                alias
              }
            }
          }
        }
      }
    `}
    render={data => (
      <div className={styles.primaryMenu}>
        <ul>
          <li><a href="/">Home</a></li>
          {this.props.items &&
            data.allTaxonomyTermTags.edges.node.map(ing => <li key={ing.node.path.alias}><a href={ing.node.path.alias}> {ing.node.name}</a></li>)}
        </ul>
      </div>
    )}
  />
)