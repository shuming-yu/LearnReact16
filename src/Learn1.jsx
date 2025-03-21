// rcc
import { Component } from 'react';

class Learn1 extends Component {
  // 生命週期函式
  state = {
    title: 'Title',
    text: 'Say Hi'
  }
  // 自訂函式
  // sayHi = () => {
  //   this.setState({
  //     text: 'Hi'
  //   })
  // }

  
  constructor(props) {
    super(props);

    this.sayHi = this.sayHi.bind(this); //綁訂至主件上
  }
  // 一般函式 - this指向button -> 需另設定bind
  sayHi() {
    this.setState({
      text: 'Hi'
    })
  }


  render() {
    return (
      <>
        <h2>{ this.state.title }</h2>
        <h3>{ this.state.text }</h3>
        <button onClick={this.sayHi}>Click</button>
      </>
    );
  }
}

export default Learn1;
