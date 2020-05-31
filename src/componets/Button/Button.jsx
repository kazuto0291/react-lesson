import React from 'react';
import './button.css';

class Button extends React.Component {
  constructor(props) {
    super(props)
    this.value = 11;
  }
  render() {
    return (
      <div className="Button">
         { this.props.children } {this.value}
      </div>
    )
  }
}




export default Button;

