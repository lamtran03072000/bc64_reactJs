import React, { Component } from 'react';
// Các bước để làm 1 task ở trong react
// 1. Xây dựng giao diện hoàn chỉnh
// 2. Xác định xem state string, number ...
// 3 .  binding state lên giao diện
// 4 . Xử lý sự kiện thay đổi state => setState

export default class ChangeCar extends Component {
  state = {
    imgCar: './img/products/red-car.jpg',
  };
  handleChangeCar = (nameCar) => {
    this.setState({
      imgCar: `./img/products/${nameCar}.jpg`,
    });
  };
  render() {
    return (
      <div className="container d-flex">
        <div className="w-50">
          <img src={this.state.imgCar} className="w-100" alt="" />
        </div>
        <div className="w-50">
          <button
            onClick={() => {
              //   this.setState({
              //     imgCar: './img/products/black-car.jpg',
              //   });
              this.handleChangeCar('black-car');
            }}
            className="btn btn-dark"
          >
            Black
          </button>
          <button
            onClick={() => {
              this.handleChangeCar('red-car');
            }}
            className="btn btn-danger"
          >
            Red
          </button>
          <button
            onClick={() => {
              this.handleChangeCar('silver-car');
            }}
            className="btn btn-info"
          >
            Silver
          </button>
        </div>
      </div>
    );
  }
}
