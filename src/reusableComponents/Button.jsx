import React from 'react';
import PropTypes from 'prop-types'
import "../styles/button.css"

const Button=({btnTxt, className, onClick})=>{
  return (
    <button className={className} onClick={onClick}>{btnTxt}</button>
  )
}

Button.propTypes={
    btnTxt:PropTypes.string,
    className:PropTypes.string,
    onClick:PropTypes.func
}

export default Button