import React, { Component } from 'react';
import { Outlet } from 'react-router-dom';

export default class AuthTemplate extends Component {
  render() {
    return (
      <div className="d-flex">
        <div className="w-50 " style={{ height: '100vh' }}>
          <img className="w-100" src="https://picsum.photos/2000/2000" alt="" />
        </div>

        {/*  */}
        <div className="w-50 d-flex justify-content-center align-items-center">
          <Outlet />
        </div>
      </div>
    );
  }
}
