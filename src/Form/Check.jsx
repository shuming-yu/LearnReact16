import React, { Component } from 'react';

class Check extends Component {
  state = {
    gender: 'male',
    like: []
  }

  onChangeGender = (e) => {
    this.setState({
      gender: e.target.value
    })
  }

  onChangeLike = (e) => {
    const { value, checked } = e.target;
    console.log(value, checked);
    

    if (checked) {
      // 將選中的項目加入到 state.like 中
      this.setState((prevState) => ({
        like: [...prevState.like, value]
      }));
    } else {
      // 將取消選中的項目從 state.like 中移除
      this.setState((prevState) => ({
        like: prevState.like.filter(item => item !== value)
      }));
    }
  }

  render() {
    return (
      <>
        <div>
          Your Gender:
          <input type="radio" value="male" onChange={this.onChangeGender} checked={this.state.gender === 'male'} />
          <label>Male</label>
          <input type="radio" value="female" onChange={this.onChangeGender} checked={this.state.gender === 'female'} />
          <label>Female</label>
        </div>
        <div>
          Your Like:
          <input type="checkbox" value="male" onChange={this.onChangeLike} checked={this.state.like.includes('male')} />
          <label>Male</label>
          <input type="checkbox" value="female" onChange={this.onChangeLike} checked={this.state.like.includes('female')} />
          <label>Female</label>
        </div>

        <div>
          {JSON.stringify(this.state, null, 2)}
        </div>
      </>
    );
  }
}

export default Check;
