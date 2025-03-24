import React, { Component } from 'react';
import Learn2 from './Learn2';


class List extends Component {
  render() {
    return (
      // 1.
      <>
        <Learn2 text="Learn React" price={100} ></Learn2>
        <Learn2 text="Learn Vue" price={200} ></Learn2>
        <Learn2 text="Learn JS" ></Learn2>
      </>

      // 2.
      // <>
      //   <Learn2>Learn React</Learn2>
      //   <Learn2>Learn Vue</Learn2>
      //   <Learn2>Learn JS</Learn2>
      // </>
    );
  }
}

export default List;
