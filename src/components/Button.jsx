import React from 'react';
import './component.css'
const Button = (props) => {
    return(
        <button
        style={props.style}
        className = {'btn btn-Primary'}
        onClick = {props.action}>
            {props.title}
        </button>
    )
}
export default Button