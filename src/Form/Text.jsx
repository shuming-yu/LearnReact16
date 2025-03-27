import React, { Component } from 'react';

class Text extends Component {
  state = {
    text: 'tttext'
  }
  onChange = (e) => {
    this.setState({
      text: e.target.value
    })
  }

  render() {
    const { text } = this.state;

    return (
      <>
        {/* 雙向綁定 */}
        <input type="text" value={text} onChange={this.onChange} />
        <h2>{text}</h2>
      </>
    );
  }
}

export default Text;
