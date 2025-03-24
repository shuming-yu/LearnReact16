import React, { Component, createRef } from 'react';

class Ref extends Component {
  // 1.
  // componentDidMount() {
  //   this.myInput.focus();
  // }
  // setRef = (input) => {
  //   // 1.
  //   // this.myInput = input;
  //   // 2.
  //   input.focus();
  // }

  // 2.
  myInput = createRef();
  componentDidMount() {
    this.myInput.current.focus();
  }


  render() {
    return (
      <div>
        {/* 1. */}
        {/* <input type="text" ref={this.setRef} /> */}

        {/* 2. */}
        <input type="text" ref={this.myInput} />
      </div>
    );
  }
}

export default Ref;
