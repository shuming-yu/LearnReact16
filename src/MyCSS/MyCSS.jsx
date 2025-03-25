import React, { Component } from 'react';
import MyButton from './MyButton';
import YourButton from './YourButton';

class MyCSS extends Component {
  render() {
    return (
      <div>
        <MyButton>Hello</MyButton>
        
        <YourButton>Ben</YourButton>
      </div>
    );
  }
}

export default MyCSS;
