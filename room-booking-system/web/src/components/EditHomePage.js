import React, {Fragment} from 'react'
import {Link} from 'react-router-dom'
import Button from './Button'


const AddElementButton = (props) => {
  return (
    <button className={`button`} onClick={props.onClick} >{props.text}</button>

    
  )
  
}
export default AddElementButton



