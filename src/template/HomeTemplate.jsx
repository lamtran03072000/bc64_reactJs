import React, { Component } from 'react';
import HeaderLayout from '../components/HeaderLayout';
import { Outlet } from 'react-router-dom';

export default class HomeTemplate extends Component {
  render() {
    return (
      <div>
        <HeaderLayout />
        {/* Outlet là phần nội dung thay đổi , Outlet của react-router-dom */}
        <Outlet />

        <footer className="bg-dark text-white p5">Đây là footer</footer>
      </div>
    );
  }
}
