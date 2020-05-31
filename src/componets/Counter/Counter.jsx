import React from 'react';
import Button from '../Button/Button';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {count: 0};
    this.increment = this.increment.bind(this);
    // this.decrement = this.decrement.bind(this);
  }

  increment() {
    this.setState({
      count: this.state.count + 1
    })
  }

  decrement() {
    this.setState({
      count: this.state.count - 1
    })
  }
  render() {
    return (
      <div>
        <p>{this.state.count} </p>
        <span onClick={this.increment}>
          <Button >インクリメント</Button>
        </span>
        <span onClick={() => { this.decrement()}}>
          <Button>デクリメント</Button>
        </span>
      </div>
    )
  }
}

export default Counter;