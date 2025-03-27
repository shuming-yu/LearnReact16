import React, { Component } from 'react';

class Img extends Component {
  state = {
    img: ''
  }
  onChange = (e) => {
    const file = e.target.files.item(0);
    // 瀏覽器內建類別
    const fr = new FileReader();


    fr.addEventListener('load', this.fileLoad);
    // 讀取檔案轉為DataURL
    fr.readAsDataURL(file);
  }
  fileLoad = (e) => {
    this.setState({
      // 對應fr
      img: e.target.result
    })
  }

  render() {
    return (
      <>
        <input type="file" onChange={this.onChange} />
        <img width="50%" src={this.state.img} />
      </>
    );
  }
}

export default Img;
