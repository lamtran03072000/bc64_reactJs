import React, { Component } from 'react';
import { connect } from 'react-redux';

class ChangeNumberRedux extends Component {
  render() {
    console.log(this.props);
    let { number, dispatch } = this.props;
    return (
      <div className="container">
        <p>Number : {number}</p>
        <button
          onClick={() => {
            // Tạo ra object action sẽ chứa dữ liệu gửi đi lên store
            const action = {
              // type là thuộc tính bắt buộc để biết action nào sẽ được thực thi
              type: 'CHANGE_NUMBER_ACTION',
              //   payload sẽ là dữ liệu được gửi lên redux
              payload: number + 1,
            };
            // Dùng hàm dispatch để gửi dữ liệu lên redux
            dispatch(action);
          }}
          className="btn btn-success"
        >
          Plus
        </button>

        <button
          onClick={() => {
            const action = {
              type: 'CHANGE_NUMBER_ACTION',
              payload: number - 1,
            };
            dispatch(action);
          }}
          className="btn btn-danger"
        >
          Decrease
        </button>
      </div>
    );
  }
}

//
const mapStateToProps = (state) => {
  // state này chính là state của redux
  return {
    // Props của component
    number: state.number,
    img: state.img,
  };
};

// Giúp mình tạo ra component có logic của redux
const ComponentWithRedux = connect(mapStateToProps)(ChangeNumberRedux);

export default ComponentWithRedux;
