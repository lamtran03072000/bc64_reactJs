import React, { Component } from 'react';

export default class ShoeItem extends Component {
  render() {
    let { shoe, handleAddShoe } = this.props;
    return (
      <div
        className="card m-3"
        style={{
          height: '500px',
        }}
      >
        <img
          className="card-img-top"
          src={shoe.image}
          height={300}
          alt="Title"
        />
        <div className="card-body">
          <h4 className="card-title">{shoe.name} </h4>
          <p>{shoe.price} $</p>
          <button
            onClick={() => {
              handleAddShoe(shoe);
            }}
            className="btn btn-success"
          >
            Add To cart <i className="fa-solid fa-cart-plus" />
          </button>
        </div>
      </div>
    );
  }
}
