import React, { Component, createRef } from 'react';
import Child from './Child';

class Parent extends Component {
  // 1.
  childRef = createRef();

  state = {
    count: 0
  }

  addCount = () => {
    this.setState({
      count: this.state.count + 1
    })
  }

  addChildCount = () => {
    this.childRef.current.addCount();
  }

  render() {
    return (
      <div>
        <h2>Parent: {this.state.count}</h2>
        
        <button onClick={this.addCount}>+Parent</button>
        <button onClick={this.addChildCount}>+Child</button>

        {/* 綁定childRef並呼叫 / 新增addParentCount函式可被調用 */}
        <Child ref={this.childRef} addParentCount={this.addCount} />
      </div>
    );
  }



  // 2.
  // state = {
  //   count: 0,
  //   childCount: 0
  // }

  // addCount = () => {
  //   this.setState({
  //     count: this.state.count + 1
  //   })
  // }

  // addChildCount = () => {
  //   this.setState({
  //     childCount: this.state.childCount + 1
  //   })
  // }

  // render() {
  //   return (
  //     <div>
  //       <h2>Parent: {this.state.count}</h2>
        
  //       <button onClick={this.addCount}>+Parent</button>
  //       <button onClick={this.addChildCount}>+Child</button>

  //       {/* 綁定childRef並呼叫 / 新增addParentCount函式可被調用 */}
  //       <Child
  //         count={this.state.childCount}
  //         addParentCount={this.addCount}
  //         addChildCount={this.addChildCount}
  //       />
  //     </div>
  //   );
  // }

}

export default Parent;
