import React, { Component } from 'react';

const relations = [
  { lable: 'Vue', price: 10 },
  { lable: 'React', price: 20 },
  { lable: 'Angular', price: 30 },
  { lable: 'JavaScript', price: 40 },
]

class List extends Component {
  state = {
    rel: relations[0].price
  }
  onChange = (e) => {
    this.setState({
      rel: e.target.value
    })
  }

  render() {
    const { rel } = this.state;

    return (
      <>
        <select value={rel} onChange={this.onChange}>
          {relations.map((item) => (
            <option
              key={item.lable}
              value={item.price}
            >
              {item.lable}
            </option>
          ))}
        </select>

        <h2>{rel}</h2>

        {/* 注意e.target.value回傳字串, 要另外處理 */}
        {/* <h2>{relations.find(item => item.price == rel).lable}</h2> */}
      </>
    );
  }
}

export default List;
