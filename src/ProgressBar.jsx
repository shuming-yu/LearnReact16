import React, { Component, PureComponent } from 'react';

// 1.Class Component
class ProgressBar extends Component {
  render() {
    const { value } = this.props;
    console.log('render', value);

    return (
      <div className='bar-outer'>
        <div
          className='bar-inner'
          style={{width: `${value}%`}}
        />

        <span>{value}%</span>
      </div>
    );
  }
}

// 2.PureComponent
// class ProgressBar extends PureComponent {
//   render() {
//     const { value } = this.props;
//     console.log('render', value);
    

//     return (
//       <div className='bar-outer'>
//         <div
//           className='bar-inner'
//           style={{width: `${value}%`}}
//         />

//         <span>{value}%</span>
//       </div>
//     );
//   }
// }

// 3.Functional Component
// const ProgressBar = (props) => {
//   const { value } = props;
//   console.log('render', value);

//   return (
//     <div className='bar-outer'>
//       <div
//         className='bar-inner'
//         style={{width: `${value}%`}}
//       />

//       <span>{value}%</span>
//     </div>
//   );
// }

export default ProgressBar;
