import React, { Component } from 'react';
import dog from './assets/dog.jpg';

class DemoStyle extends Component {
  state = {
    visible: true
  }

  clickBtn = () => {
    this.setState({
      visible: !this.state.visible
    })
  }

  render() {
    const { visible } = this.state;
    const styleObj = { display: visible ? 'block' : 'none' };
    const cn = visible ? 'show' : 'hide';
    
    return (
      <>
        <button onClick={this.clickBtn}>按鈕</button>

        {/* { visible ? <img src={dog} /> : null} */}

        {/* { visible && <img src={dog} /> } */}

        {/* { <img style={styleObj} src={dog} /> } */}

        { <img className={cn} src={dog} /> }
      </>
    );
  }
}

export default DemoStyle;
