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
  };
  handleChangeInput = (e) => {
    // e.target đại diện cho thẻ input

    let tag = e.target;
    let nameInput = tag.name;
    console.log('nameInput: ', nameInput);
    this.setState({
      [nameInput]: tag.value,
    });
  };
  render() {
    console.log('state', this.state);
    return (
      <div className="container mt-5">
        <h2>Form Nhập Thông Tin Sản Phẩm</h2>
        <form className="border rounded-2 p-4">
          <div className="row">
            <div className="col-md-6">
              <div className="mb-3">
                <label htmlFor="productId" className="form-label">
                  ID
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="id"
                  id="xinchaobc64"
                  placeholder="Nhập ID sản phẩm"
                  onInput={this.handleChangeInput}
                />
                <p className="text-danger">* Trường này không được để trống</p>
              </div>
              <div className="mb-3">
                <label htmlFor="productName" className="form-label">
                  Tên Sản Phẩm
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="tenSp"
                  placeholder="Nhập tên sản phẩm"
                  onInput={this.handleChangeInput}
                />
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
                  placeholder="Nhập URL hình ảnh sản phẩm"
                  onInput={this.handleChangeInput}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="productPrice" className="form-label">
                  Giá
                </label>
                <input
                  type="number"
                  className="form-control"
                  name="price"
                  placeholder="Nhập giá sản phẩm"
                  onInput={this.handleChangeInput}
                />
              </div>
            </div>
          </div>
          <button type="submit" className="btn btn-primary">
            Thêm Sản Phẩm
          </button>
        </form>
      </div>
    );
  }
}
