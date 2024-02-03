import React from 'react';
import ReactDOM from 'react-dom/client';

// import HomeLayout from './components/HomeLayout/HomeLayout';
import Databinding from './components/Databinding/Databinding';
import StyleComponent from './components/StyleComponent/StyleComponent';
import HandleEvent from './components/HandleEvent/HandleEvent';
import StateDemoComponent from './components/StateDemoComponent/StateDemoComponent';
import ChangeColor from './components/StateDemoComponent/ChangeColor';
import ChangeAvatar from './components/StateDemoComponent/ChangeAvatar';
import ChangeCar from './components/StateDemoComponent/ChangeCar';
import RenderWithMap from './components/RenderWithMap/RenderWithMap';
import DemoProps from './components/Props/DemoProps';
import ExRenderListProduct from './components/Props/ExRenderListProduct/ExRenderListProduct';

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
    {/* <StateDemoComponent /> */}
    {/* <ChangeColor /> */}
    {/* <ChangeAvatar /> */}
    {/* <ChangeCar /> */}
    {/* <RenderWithMap /> */}
    {/* <DemoProps /> */}
    <ExRenderListProduct />
  </div>,
);
