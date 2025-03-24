import { Component } from 'react';

class Learn2 extends Component {
  render() {
    return (
      // 1.
      <li>
        { this.props.text } / { this.props.price ? this.props.price : 'No Price' } $$
      </li>

      // 2.
      // <li>
      //   { this.props.children }
      // </li>
    );
  }
}

export default Learn2;
