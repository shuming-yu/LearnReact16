import React, { Component } from 'react';
import ProgressBar from './ProgressBar';

class Progress extends Component {
  state = {
    val: 0
  }
  add = () => {
    this.setState({
      // 1.Component / Functional Component
      val: this.state.val + 1
      
      // 2.PureComponent不會執行, 減省效能
      // val: 0
    })
  }

  render() {
    const { val } = this.state;

    return (
      <div>
        <ProgressBar value={val} />
        <button onClick={this.add}>+</button>
      </div>
    );
  }
}

export default Progress;
