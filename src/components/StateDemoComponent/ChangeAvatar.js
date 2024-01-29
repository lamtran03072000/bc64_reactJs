import React, { Component } from 'react';
// Các bước để làm 1 task ở trong react
// 1. Xây dựng giao diện hoàn chỉnh
// 2. Xác định xem state string, number ...
// 3 .  binding state lên giao diện
// 4 . Xử lý sự kiện thay đổi state => setState
export default class ChangeAvatar extends Component {
  state = {
    avatar: 'https://i.pravatar.cc/200?u=60',
  };
  render() {
    return (
      <div>
        <div className="card" style={{ width: '18rem' }}>
          <img src={this.state.avatar} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <button
              className="btn btn-success"
              onClick={() => {
                let random = Math.floor(Math.random() * 100);
                let newAvatar = `https://i.pravatar.cc/200?u=${random}`;
                this.setState({
                  avatar: newAvatar,
                });
              }}
            >
              Change avatar
            </button>
          </div>
        </div>
      </div>
    );
  }
}
