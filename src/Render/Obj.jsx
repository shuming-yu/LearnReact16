import React, { Component } from 'react';

const info = {
  name: 'React Lesson',
  price: 3200,
  videos: 60,
  teacher: 'Ben'
}

const infoList = [
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

const Obj = () => {
  return (
    <>
      {Object.keys(info).map((key) => {
        let val = info[key];
        return (
          <li>{key}: {val}</li>
        )
      })}


      {infoList.map(item => (
        <li key={item.teacher}>{item.name} / {item.price}$</li>
      ))}
    </>
  );
}

export default Obj;
