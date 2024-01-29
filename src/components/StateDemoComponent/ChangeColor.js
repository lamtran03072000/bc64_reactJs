import React, { Component } from 'react';
// Các bước để làm 1 task ở trong react
// 1. Xây dựng giao diện hoàn chỉnh
// 2. Xác định xem state string, number ...
// 3 .  binding state lên giao diện
// 4 . Xử lý sự kiện thay đổi state => setState

export default class ChangeColor extends Component {
  state = {
    color: 'red',
  };
  render() {
    // Cách 1 để xem state hiện tại log ở hàm render()
    // Cách 2 thì log ở tham số thứ 2 của this.setState (là 1 call back function)
    // console.log('state', this.state);
    return (
      <div className="container">
        <i
          style={{
            color: this.state.color,
          }}
          className="fa-solid fa-house display-4"
        />
        <br />
        <button
          onClick={() => {
            this.setState({
              color: 'red',
            });
          }}
          className="btn btn-danger"
        >
          Red
        </button>
        <button
          onClick={() => {
            this.setState(
              {
                color: 'green',
              },
              () => {
                console.log(this.state);
              },
            );
          }}
          className="btn btn-bg-success mx-2"
        >
          Green
        </button>
        <button
          onClick={() => {
            this.setState({
              color: 'blue',
            });
          }}
          className="btn btn-primary"
        >
          Blue
        </button>
      </div>
    );
  }
}
