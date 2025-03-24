import React, { Component } from 'react';

class Child extends Component {
  // 1.
  state = {
    count: 0
  }

  addCount = () => {
    this.setState({
      count: this.state.count + 1
    })
  }

  render() {
    return (
      <div>
        <h2>Child: {this.state.count}</h2>

        {/* 使用props取得addParentCount並呼叫 */}
        <button onClick={this.props.addParentCount}>+Parent</button>
        <button onClick={this.addCount}>+Child</button>
      </div>
    );
  }



  // 2.
  // render() {
  //   // 解構覆值
  //   const { count, addParentCount, addChildCount } = this.props;

  //   return (
  //     <div>
  //       <h2>Child: {count}</h2>

  //       <button onClick={addParentCount}>+Parent</button>
  //       <button onClick={addChildCount}>+Child</button>
  //     </div>
  //   );
  // }
}

export default Child;
