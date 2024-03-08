import React, { Component } from 'react';
import { connect } from 'react-redux';

class ChangeFontSizeRedux extends Component {
  render() {
    let { fsize, dispatch } = this.props;
    return (
      <div>
        <h3
          style={{
            fontSize: `${fsize}px`,
          }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing.
        </h3>
        <button
          onClick={() => {
            const action = {
              type: 'CHANGE_FSIZE_ACTION',
              payload: 1,
            };
            dispatch(action);
          }}
          className="btn btn-success"
        >
          Plus font size{' '}
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  // State của redux
  return {
    fsize: state.fsize,
  };
};

const ComponentWithRedux = connect(mapStateToProps)(ChangeFontSizeRedux);

export default ComponentWithRedux;
