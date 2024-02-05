import React, { Component } from 'react';

export default class CardDetailPhone extends Component {
  render() {
    //
    let { phone, handleXemChiTiet } = this.props;
    return (
      <div className="card">
        <img
          className="card-img-top"
          height={300}
          src={phone.hinhAnh}
          alt="Title"
        />
        <div className="card-body">
          <h4 className="card-title">{phone.tenSP}</h4>
          <button
            onClick={() => {
              handleXemChiTiet(phone);
            }}
            className="btn btn-success "
          >
            Xem chi tiết
          </button>
        </div>
      </div>
    );
  }
}
