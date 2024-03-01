import React, { Component } from 'react';
import ProductForm from './ProductForm';

export default class ReactForm extends Component {
  state = {
    arrProduct: [
      {
        id: 1,
        tenSp: 'Iphone',
        img: 'https://picsum.photos/id/1/200/200',
        price: 5000,
      },
      {
        id: 2,
        tenSp: 'Samsung',
        img: 'https://picsum.photos/id/2/200/200',
        price: 7000,
      },
    ],
  };
  handleAddProduct = (proClick) => {
    let arrUpdate = [...this.state.arrProduct];
    arrUpdate.push(proClick);
    this.setState({
      arrProduct: arrUpdate,
    });
  };
  handleDeleteProduct = (idProduct) => {
    let newArrPro = this.state.arrProduct.filter(
      (item) => item.id != idProduct,
    );
    this.setState({
      arrProduct: newArrPro,
    });
  };
  render() {
    return (
      <div>
        <h3>Bài tập react form</h3>

        <ProductForm handleAddProduct={this.handleAddProduct} />

        <table className="table container mt-4">
          <thead>
            <th>id</th>
            <th>name</th>
            <th>Image</th>
            <th>Price</th>
            <th>Action</th>
          </thead>
          <tbody>
            {this.state.arrProduct.map((phone) => {
              return (
                <tr key={phone.id}>
                  <td>{phone.id}</td>
                  <td>{phone.tenSp}</td>
                  <td>
                    <img src={phone.img} height={50} alt="" />
                  </td>
                  <td>{phone.price}</td>
                  <td>
                    <button className="btn btn-primary">Edit</button>
                    <button
                      onClick={() => {
                        this.handleDeleteProduct(phone.id);
                      }}
                      className="btn btn-success"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    );
  }
}
