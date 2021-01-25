import React from 'react'

const Button = props => (
  <button className={`button ${props.className}`} style={props.style?props.style:{}} onClick={props.onClick} >
    {props.text}
  </button>
)

export default Button
