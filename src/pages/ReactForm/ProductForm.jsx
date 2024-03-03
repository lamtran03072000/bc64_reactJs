import React, { Component } from 'react';

export default class ProductForm extends Component {
  state = {
    value: {
      id: '',
      tenSp: '',
      img: '',
      price: '',
    },
    errValue: {
      id: '',
      tenSp: '',
      img: '',
      price: '',
    },
    isSubmit: false,
  };
  handleChangeInput = (e) => {
    // e.target đại diện cho thẻ input

    let tag = e.target;
    let dataType = e.target.getAttribute('data-type');
    let nameInput = tag.name;
    // clone value hiện tại
    let newValue = { ...this.state.value };
    // sửa tại value của key đó
    newValue[nameInput] = tag.value;

    // xử lý err
    let newErrValue = { ...this.state.errValue };
    let message = '';

    if (newValue[nameInput] === '') {
      message = `${nameInput} cannot be blank !`;
    } else {
      if (dataType) {
        switch (dataType) {
          case 'number':
            {
              let regex = /^(?:[1-9]\d{0,2}|1000)$/;
              if (!regex.test(newValue[nameInput])) {
                message = '* Trường này chỉ nhận số';
              }
            }
            break;
          case 'string':
            {
              let regex = /^[A-Za-z]+$/;
              if (!regex.test(newValue[nameInput])) {
                message = '* Trường này chỉ chữ';
              }
            }
            break;
          default: {
          }
        }
      }
    }
    newErrValue[nameInput] = message;

    // Xử lý nút submit
    // Khi tất cả các giá trị err mà chỉ cần 1 trường có lỗi =>> lỗi
    // chỉ 1 trường value mà "" => lỗi
    let valid = true;
    for (let key in newErrValue) {
      if (newErrValue[key] !== '') {
        valid = false;
        break;
      }
    }

    for (let key in newValue) {
      if (newValue[key] === '') {
        valid = false;
        break;
      }
    }

    this.setState({
      value: newValue,
      errValue: newErrValue,
      isSubmit: valid,
    });
  };
  handleSubmit = (e) => {
    // Sự kiện chặn load trang
    e.preventDefault();
    let { handleAddProduct } = this.props;
    handleAddProduct(this.state.value);
  };
  static getDerivedStateFromProps(newProps, currentState) {
    console.log('currentState: ', currentState);
    console.log('newProps: ', newProps);
    // Can thiệp trước khi render , lấy props product edit gán vào state
    // Trả ra state mới để hàm lấy dữ liệu
    if (newProps.productEdit.id !== currentState.value.id) {
      // Hành động khi user click nút edit
      currentState.value = { ...newProps.productEdit };
    }
    return currentState;
  }
  render() {
    let { id, tenSp, img, price } = this.state.value;
    return (
      <div className="container mt-5">
        <h2>Form Nhập Thông Tin Sản Phẩm</h2>
        <form onSubmit={this.handleSubmit} className="border rounded-2 p-4">
          <div className="row">
            <div className="col-md-6">
              <div className="mb-3">
                <label htmlFor="productId" className="form-label">
                  ID
                </label>
                <input
                  data-type="number"
                  type="text"
                  className="form-control"
                  name="id"
                  id="xinchaobc64"
                  placeholder="Nhập ID sản phẩm"
                  value={id}
                  onInput={this.handleChangeInput}
                />
                <p style={{ height: '30px' }} className="text-danger">
                  {this.state.errValue.id}
                </p>
              </div>
              <div className="mb-3">
                <label htmlFor="productName" className="form-label">
                  Tên Sản Phẩm
                </label>
                <input
                  type="text"
                  data-type="string"
                  className="form-control"
                  name="tenSp"
                  value={tenSp}
                  placeholder="Nhập tên sản phẩm"
                  onInput={this.handleChangeInput}
                />
                <p style={{ height: '30px' }} className="text-danger">
                  {this.state.errValue.tenSp}
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="mb-3">
                <label htmlFor="productImage" className="form-label">
                  Hình Ảnh
                </label>
                <input
                  type="url"
                  className="form-control"
                  name="img"
                  value={img}
                  placeholder="Nhập URL hình ảnh sản phẩm"
                  onInput={this.handleChangeInput}
                />
                <p style={{ height: '30px' }} className="text-danger">
                  {this.state.errValue.img}
                </p>
              </div>
              <div className="mb-3">
                <label htmlFor="productPrice" className="form-label">
                  Giá
                </label>
                <input
                  type="number"
                  className="form-control"
                  name="price"
                  value={price}
                  placeholder="Nhập giá sản phẩm"
                  onInput={this.handleChangeInput}
                />
                <p style={{ height: '30px' }} className="text-danger">
                  {this.state.errValue.price}
                </p>
              </div>
            </div>
          </div>
          <button
            disabled={!this.state.isSubmit}
            type="submit"
            className="btn btn-primary"
          >
            Thêm Sản Phẩm
          </button>
          <button
            disabled={!this.state.isSubmit}
            type="button"
            className="btn btn-primary"
            onClick={() => {
              this.props.handleUpdateProduct(this.state.value);
            }}
          >
            Cập nhật sản phẩm
          </button>
        </form>
      </div>
    );
  }
}
