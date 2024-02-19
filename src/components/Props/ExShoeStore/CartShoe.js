import React, { Component } from 'react';

export default class CartShoe extends Component {
  renderListTrShoeCart = () => {
    let { dataCartShoe } = this.props;
    return dataCartShoe.map((shoe, index) => {
      return (
        <tr key={index}>
          <td>{shoe.name}</td>
          <td>
            <img width={50} src={shoe.image} alt="" />
          </td>
          <td>{shoe.price}</td>
          <td>{shoe.soLuong}</td>
          <td>{shoe.price * shoe.soLuong}</td>
          <td>
            <button className="btn btn-danger">Delete</button>
          </td>
        </tr>
      );
    });
  };
  render() {
    // let { dataCartShoe } = this.props;
    return (
      <div className="container">
        <table className="table">
          <thead>
            <tr>
              <td>Name</td>
              <td>Image</td>
              <td>Price</td>
              <td>Quantity</td>
              <td>total</td>
              <td>Action</td>
            </tr>
          </thead>
          <tbody>{this.renderListTrShoeCart()}</tbody>
        </table>
      </div>
    );
  }
}
