import React, { Component } from 'react';
import ShoeItem from './ShoeItem';

export default class ShoeListItem extends Component {
  renderListShoe = () => {
    let { dataListShoe, handleAddShoe } = this.props;
    return dataListShoe.map((shoe, index) => {
      return (
        <div key={index} className="col-3">
          <ShoeItem handleAddShoe={handleAddShoe} shoe={shoe} />
        </div>
      );
    });
  };

  render() {
    return <div className="row">{this.renderListShoe()}</div>;
  }
}
