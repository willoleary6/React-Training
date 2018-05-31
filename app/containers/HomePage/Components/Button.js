import React from 'react';
import './component.css';
const Button = (props) => {
  //Basic button template
  return(
    <button
      style={props.style}
      className = {'btn btn-Primary'}
      onClick = {props.action}>
      {props.title}
    </button>
  )
};
export default Button;
