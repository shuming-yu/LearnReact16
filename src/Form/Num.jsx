import React, { Component } from 'react';

class Num extends Component {
  state = {
    count: 0
  }
  onChange = (e) => {
    this.setState({
      // e.target.value回傳字串, 需另轉換
      count: parseInt(e.target.value, 10)
    })
  }

  render() {
    const { count } = this.state;

    return (
      <>
        <input type='number' value={count} onChange={this.onChange} />
        <h2>Next: {count + 1}</h2>
      </>
    );
  }
}

export default Num;
