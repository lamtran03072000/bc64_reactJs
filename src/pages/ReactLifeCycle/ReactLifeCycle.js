import React, { Component } from 'react';
import Child from './Child';

export default class ReactLifeCycle extends Component {
  constructor(props) {
    console.log('constructor: ');
    super(props);
    this.state = {
      number: 1,
      like: 1,
    };

    this.timeOut = {};
  }

  static getDerivedStateFromProps(newProps, currentState) {
    // Dùng để can thiệp quá trình trước khi render
    // Trước khi render state ra giao diện thì lấy state * 2
    currentState.number *= 2;
    console.log('getDerivedStateFromProps: ');
    return currentState;
  }
  shouldComponentUpdate(newProps, newState) {
    console.log('shouldComponentUpdate: ');
    // Nhận vào biến boolean , true thì cho chạy các hàm phía dưới còn false thì không
    //
    return true;
  }

  render() {
    console.log('render: ');
    return (
      <div>
        ReactLifeCycle
        <p>Number : {this.state.number}</p>
        <button
          className="btn btn-success mx-3"
          onClick={() => {
            this.setState({
              number: this.state.number + 1,
            });
          }}
        >
          +
        </button>
        <button
          onClick={() => {
            this.setState({
              like: this.state.like + 1,
            });
          }}
          className="btn btn-primary"
        >
          Tăng Like
        </button>
        <Child like={this.state.like} />
      </div>
    );
  }
  componentDidMount() {
    console.log('componentDidMount: ');
    //
    this.timeOut = setInterval(() => {
      console.log('Fetch data server');
    }, 1000);
  }
  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate: ');
  }
  componentWillUnmount() {
    // Sẽ chạy khi component  không còn trên giao diện
    console.log('componentWillUnmount: ');

    clearInterval(this.timeOut);
  }
}
