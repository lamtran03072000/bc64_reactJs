import React, { Component } from 'react';

export default class StateDemoComponent extends Component {
  // State là thuộc tính có sẵn của class Component (quản lý sự thay đổi của component)
  state = {
    fSize: 16,
  };
  render() {
    return (
      <div className="container">
        {/* Style inline trong react là 1 object (key value) viết theo camelcase */}
        <p
          style={{
            fontSize: this.state.fSize,
          }}
        >
          Lorem ipsum dolor sit amet.
        </p>

        <button
          onClick={() => {
            // ở trong react class component sẽ không xài theo cách này
            // this.state.fSize += 10;
            // this.setState là 1 hàm có sẵn của react class component nhận vào state với giá trị mới và gọi lại hàm render giao diện
            let newState = {
              fSize: this.state.fSize + 10,
            };
            this.setState(newState);
          }}
          className="btn btn-success"
        >
          plus size
        </button>
      </div>
    );
  }
}
