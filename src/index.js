import React from 'react';
import ReactDOM from 'react-dom/client';

// import HomeLayout from './components/HomeLayout/HomeLayout';
import Databinding from './components/Databinding/Databinding';
import StyleComponent from './components/StyleComponent/StyleComponent';
import HandleEvent from './components/HandleEvent/HandleEvent';
import StateDemoComponent from './components/StateDemoComponent/StateDemoComponent';

const root = ReactDOM.createRoot(document.getElementById('root'));
// jsx : => html được viết trong file js (nền js) được gọi là jsx
// 2 loại function component , class component
root.render(
  <div>
    {/* <Card></Card>
    <Card /> */}
    {/* <AlertComponent /> */}
    {/* <HomeLayout /> */}
    {/* <Databinding /> */}
    {/* <StyleComponent /> */}
    {/* <HandleEvent /> */}
    <StateDemoComponent />
  </div>,
);
