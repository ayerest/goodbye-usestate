import React from 'react';
import "../App.css";

const Button = ({handleOnClick, text}) => {
  return (
    <button type="button" className="btn" onClick={handleOnClick}>{text}</button>
  )
}

export default Button;