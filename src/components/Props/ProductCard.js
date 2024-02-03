import React, { Component } from 'react';

export default class ProductCard extends Component {
  render() {
    let { dataProduct, desc } = this.props;
    return (
      <div className="card">
        <img className="card-img-top" src={dataProduct.img} alt="Title" />
        <div className="card-body">
          <h4 className="card-title">{dataProduct.name}</h4>
          <p className="card-text">{dataProduct.age}</p>
          {desc}
        </div>
      </div>
    );
  }
}
