import React, { Component } from 'react';

export default class HandleEvent extends Component {
  handleSayHello = () => {
    console.log('hello');
  };
  handleSayName = (name) => {
    console.log('hello bạn ', name);
  };
  render() {
    return (
      <div className="container">
        <button onClick={this.handleSayHello}>Click me</button>
        <button
          onClick={() => {
            console.log('yes');
          }}
        >
          Click tôi
        </button>
        <button
          onClick={() => {
            // this.handleSayHello();
            this.handleSayName('Vinh');
          }}
        >
          Click mình
        </button>

        {/* sự kiện chạy khi người dùng nhập value vào input */}
        <input
          type="text"
          className="py-3 px-3"
          onChange={(e) => {
            // let value = e.target.value;
            // console.log('value: ', value);
            console.log('no');
          }}
        />
      </div>
    );
  }
}
