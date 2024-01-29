import React, { Component } from 'react';
import Header from './Header';
import Navigate from './Navigate';
import Content from './Content';
// rcc => react class component
export default class HomeLayout extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="d-flex">
          <div className="w-50">
            <Navigate />
          </div>
          <div className="w-50">
            <Content />
          </div>
        </div>
        <Header />
      </div>
    );
  }
}
