import React from 'react';
import './Button.css';

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.onClickHandler = this.onClickHandler.bind(this);
  }

  onClickHandler(event) {
    this.props.onClickHandler(event);
  }

  render() {
    return (
      <span
        className="Button-container"
        onClick={this.onClickHandler}
      >
        {this.props.children}
      </span>
    )
  }
}


export default Button;