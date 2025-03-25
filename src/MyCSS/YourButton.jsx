import React, { Component } from 'react';
import styled from 'styled-components';
import './YourButton.css';
import style from './YourButton.module.scss';

// 2.
const Button = styled.button`
  background: #ecc;
  border-radius: 20px;
  font-size: 2em;
  width: 250px;
  text-align: center;
  padding: 0.5em 0;
  margin: 0.5em;
`;

const ButtonText = styled.span`
  color: blue;
`;

const YourButton = ({children}) => {
  return (
    // 1.
    // <button className='btn'>{children}</button>

    // 2.使用styled
    // <Button>
    //   <ButtonText>{children}</ButtonText>
    // </Button>

    // 3.使用scss
    <button className={style.btn}>{children}</button>
  );
}


export default YourButton;
