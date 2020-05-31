import React from 'react';

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      seconds: this.props.seconds
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
      <div>残り時間：{this.state.seconds}/{this.props.seconds} </div>
    )
  }
}

export default Timer