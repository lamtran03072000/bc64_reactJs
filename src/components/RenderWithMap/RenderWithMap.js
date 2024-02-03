import React, { Component } from 'react';

const dataPhone = [
  {
    id: 1,
    name: 'iphone',
    price: 1000,
    img: 'https://cdn.hoanghamobile.com/i/preview/Uploads/2023/09/13/iphone-15-pro-white-titanium-pure-back-iphone-15-pro-white-titanium-pure-front-2up-screen-usen.png',
  },
  {
    id: 2,
    name: 'samSung',
    price: 1200,
    img: 'https://cdn.hoanghamobile.com/i/preview/Uploads/2023/09/13/iphone-15-pro-white-titanium-pure-back-iphone-15-pro-white-titanium-pure-front-2up-screen-usen.png',
  },
  {
    id: 3,
    name: 'Blackbery',
    price: 1300,
    img: 'https://cdn.hoanghamobile.com/i/preview/Uploads/2023/09/13/iphone-15-pro-white-titanium-pure-back-iphone-15-pro-white-titanium-pure-front-2up-screen-usen.png',
  },
];

export default class RenderWithMap extends Component {
  renderIphoneListLi() {
    let contentLiJsx = [];
    dataPhone.forEach((item, index) => {
      let liJsx = <li key={item.id}>{item.name}</li>;
      contentLiJsx.push(liJsx);
    });

    return contentLiJsx; // [li,li,li]
  }
  renderListWithMap() {
    let contentListJsx = dataPhone.map((item, index) => {
      return <li key={item.id}>{item.name}</li>;
    });
    return contentListJsx; // [li,li,li]
  }
  renderListPhone() {
    let contentTrJsx = dataPhone.map((item, index) => {
      return (
        <tr key={index}>
          <td>{item.id}</td>
          <td>{item.name}</td>
          <td>{item.price}</td>
        </tr>
      );
    });
    return contentTrJsx;
  }
  renderPhoneCard() {
    return dataPhone.map((item, index) => {
      return (
        <div key={item.id} className="col-4">
          <div className="card" style={{ width: '18rem' }}>
            <img src={item.img} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{item.name}</h5>
              <p className="card-text">{item.price}</p>
              <button className="btn btn-success">Mua</button>

              <i className="fa-duotone fa-house"></i>
            </div>
          </div>
        </div>
      );
    });
  }
  render() {
    // return [<div>RenderWithMap</div>, <div>hello cyber soft</div>];
    return (
      <div className="container">
        <h3>Demo Render ul,li</h3>
        <ul>
          {/* {this.renderIphoneListLi()} */}
          {/* With map  */}
          {this.renderListWithMap()}
        </ul>
        <h3>Render phone list table</h3>
        <table className="table">
          <thead>
            <tr>
              <td>STT</td>
              <td>Name</td>
              <td>Price</td>
            </tr>
          </thead>
          <tbody>{this.renderListPhone()}</tbody>
        </table>
        <h3>Render phone card</h3>
        <div className="row">{this.renderPhoneCard()}</div>
      </div>
    );
  }
}
