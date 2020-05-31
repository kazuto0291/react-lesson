import React from 'react';
import './button.css';

const Button = (props) => {
  return (
    <div className='Button'>
      {props.children}
    </div>
  );
}

export default Button;