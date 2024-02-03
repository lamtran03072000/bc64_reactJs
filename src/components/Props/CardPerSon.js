import React, { Component } from 'react';

export default class CardPerSon extends Component {
  // this.props là thuộc tính có sẵn của class component , Props là nơi sẽ chứa dữ liệu mà component này được truyền vào
  render() {
    let { img, ten, age } = this.props;
    return (
      <div className="card">
        <img className="card-img-top" src={img} alt="Title" />
        <div className="card-body">
          <h4 className="card-title">{ten}</h4>
          <p className="card-text">{age}</p>
        </div>
      </div>
    );
  }
}
