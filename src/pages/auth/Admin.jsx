import React, { Component } from 'react';
import { Navigate } from 'react-router-dom';

export default class Admin extends Component {
  render() {
    const isAdmin = true;
    if (!isAdmin) {
      return <Navigate to={'/'} />;
    }
    return <div>Đây là trang admin</div>;
  }
}
