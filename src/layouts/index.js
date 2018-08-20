import React from "react"
import { Link, graphql } from "gatsby"
import gray from "gray-percentage"
import SearchIcon from "react-icons/lib/md/search"
import "typeface-rochester"
import "typeface-josefin-sans"
import "typeface-josefin-slab"

import { rhythm, scale } from "../utils/typography"
import constants from "../utils/constants";
import Container from "../components/container"
import Menu from "../components/menu"


class DefaultLayout extends React.Component {
  render() { 
    console.log(this.props);
    return (
      <div>
        <header
          css={{
            background: constants.paleYellow,
          }}
        >
        <Menu items={this.props.data.allTaxonomyTermTags.edges} />
          <div
            css={{
              height: rhythm(1.5),
              margin: `0 auto`,
              maxWidth: 1024,
            }}
          >


          </div>
        </header>
        <Container paddingBottom={0} paddingTop={rhythm(1 / 2)}>
        
            <div css={{ width: 193, overflow: `hidden` }}>
              <h1
                css={{
                  color: gray(10),
                  fontSize: scale(1.8).fontSize,
                  margin: 0,
                  fontFamily: `Rochester, serif`,
                  float: `right`,
                  fontDisplay: `block`,
                }}
              >
                Drupal
              </h1>
              <h4
                css={{
                  color: gray(10),
                  fontFamily: `"Josefin Sans", sans-serif`,
                  marginBottom: 0,
                  float: `right`,
                }}
              >
                Gatsby
              </h4>
            </div>
 
          <div css={{ float: `right` }}>
        
          </div>
        </Container>
        {this.props.children}
        <footer css={{ background: constants.paleYellow }}>
          <Container>
            <div css={{ maxWidth: `50%`, float: `left` }}>
              <p>
                <strong>Drupal Gatsby</strong>
              </p>
              <p>
                Read the{` `}
                <a href="https://github.com/gatsbyjs/gatsby/tree/master/examples/using-drupal">
                  source for this website.
                </a>
              </p>
            </div>
            <div
              css={{ float: `right`, maxWidth: `50%`, paddingLeft: rhythm(1) }}
            >
              Copyright {new Date().getFullYear()} Terms & Conditions
            </div>
          </Container>
        </footer>
      </div>
    )
  }
}

export default DefaultLayout
