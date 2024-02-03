import React, { Component } from 'react';
import ItemCard from './ItemCard';

export default class ListProductItem extends Component {
  renderListShoe() {
    let { dataShoeList } = this.props;

    let contentCardShoe = dataShoeList.map((shoe, index) => {
      return (
        <div key={index} className="col-4 mt-3">
          <ItemCard dataShoe={shoe} />
        </div>
      );
    });
    return contentCardShoe;
  }
  render() {
    return <div className="row">{this.renderListShoe()}</div>;
  }
}
