import React from "react"

class ExampleStateful extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.state.clickcount = 0;

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      clickcount: state.clickcount + 1
    }));
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.clickcount}
      </button>
    );
  }
}

export default ExampleStateful