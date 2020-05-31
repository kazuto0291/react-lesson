import React from 'react';

class Counter extends React.Component {
  constructor() {
    super();
    this.state = {count: 0};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      count: this.state.count + 1
    })
  }
  render() {
    return (
      <div>
        <p>{this.state.count} </p>
        <button onClick={this.handleClick}>インクリメント</button>
      </div>
    )
  }
}

export default Counter;