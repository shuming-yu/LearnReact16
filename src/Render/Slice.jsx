import React, { Component } from 'react';
import Item from './Item';

class Slice extends Component {
  state = {
    infoList: [
      {
        name: 'React Lesson',
        price: 3200,
        videos: 60,
        teacher: 'Ben'
      },
      {
        name: 'Vue Lesson',
        price: 6000,
        videos: 80,
        teacher: 'Tom'
      },
      {
        name: '.NET Lesson',
        price: 6500,
        videos: 90,
        teacher: 'Ted'
      },
    ]
  }

  removeInfo = () => {
    this.setState({
      infoList: this.state.infoList.splice(1)
    })
  }

  render() {
    return (
      <>
        {/* 使用PureComponent展示, 若有更動重新render則會觸發(吃效能) */}

        {this.state.infoList.map((item, index) => (
          // 1.不加入key測試
          // <Item text={`${item.name}`} price={item.price} />

          // 2.加入key=index -> 不會跳出warning, 但觸發重新render
          // <Item key={index} text={`${item.name}`} price={item.price} />

          // 3.加入key=item.name -> 推薦做法
          <Item key={item.name} text={item.name} price={item.price} />
        ))}

        <button onClick={this.removeInfo}>-</button>
      </>
    );
  }
}

export default Slice;
