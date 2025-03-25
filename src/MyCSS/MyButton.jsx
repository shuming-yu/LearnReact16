import React, { Component } from 'react';
import style from './MyButton.module.css';

const MyButton = ({children}) => {
  return (
    // F12檢視Elements class根據hash區分
    <button className={style.btn}>
      <span className={style['btn-text']}>{children}</span>
    </button>
  );
}

export default MyButton;
