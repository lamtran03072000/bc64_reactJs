import React, { Component } from 'react';

export default class Databinding extends Component {
  titleName = 'lâm';
  person = {
    name: 'Vinh ',
    age: 18,
    avatar: 'https://neweralive.na/storage/images/2023/may/lloyd-sikeba.jpg',
  };
  renderDesc = () => {
    return <div>Sắp nghỉ tết roài các bạn ơi</div>;
  };
  render() {
    let title = 'hello cyber soft';

    const renderTitle = () => {
      // Có thể return string, number ,jsx ..
      // Không thể binding object
      return <div className="text-warning">hello bc 64</div>;
    };

    let person = {
      name: 'Lâm',
      age: 17,
      avatar: 'https://neweralive.na/storage/images/2023/may/lloyd-sikeba.jpg',
    };
    return (
      <div className="container">
        {/* Ngày xưa là phải dom đến rồi gán value bằng giá trị */}
        {/* Bây giờ viết thẳng vào qua dấu {} */}
        <p id="txt">{title}</p>
        <p>{this.titleName}</p>
        <p>{renderTitle()}</p>
        <p>{this.renderDesc()}</p>
        <br />
        <div className="card" style={{ width: '18rem' }}>
          <img src={this.person.avatar} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{this.person.name}</h5>
            <p className="card-text">{this.person.age}</p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      </div>
    );
  }
}
