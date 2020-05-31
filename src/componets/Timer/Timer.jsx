import React from 'react';

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      seconds: 10
    };

    const intervalID = window.setInterval(() => {
      if (this.state.seconds > 0 ) {
      this.setState({
        seconds: this.state.seconds - 1
      })
      } else {
        window.clearInterval(intervalID);
      }
    }, 1000);
  }
  render() {
    return (
      <div>残り時間：{this.state.seconds} </div>
    )
  }
}

export default Timer