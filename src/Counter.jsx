import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: props.initCount,
      step: 1
    }
  }

  // state = {
  //   count: 0,
  //   step: 1
  // }

  addCount = () => {
    const { count, step } = this.state;

    this.setState({
      count: count + step,
      step: step + 1
    })
  }

  render() {
    const { count, step } = this.state;
    return (
      <>
        <h2>{ count }</h2>
        <button onClick={this.addCount}>+{step}</button>
      </>
    );
  }
}

Counter.defaultProps = {
  initCount: 87
}

export default Counter;
