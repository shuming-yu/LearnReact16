import React, { Component } from 'react';

const steps = [
  'Learn JavaScript',
  'Learn Vue',
  'Learn React',
  'Learn .NET'
];

const List = () => {
  return (
    <>
      {steps.map( (text) => (<li>{text}</li>) )}
    </>
  );
}

export default List;
