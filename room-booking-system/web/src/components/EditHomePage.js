import React, {Fragment} from 'react'
import {Link} from 'react-router-dom'
import Button from './Button'
//
import button_onegoahead from '../assets/button_onegoahead.jpg'


const AddElementButton = (props) => {
  var style = {}
  
  if(props.backgroundimageurl){
    style["background-image"] = String(`url(${props.backgroundimageurl})`)
    style["background-size"] = "contain"
    style["background-repeat"] = "no-repeat"
    style["background-position"] = "left"
    style["height"] = "50px"
    style["min-width"] = "50px"
    return (
      <button className={`button margin-top-5 bkg-gry`} onClick={props.onClick} style={style}></button>    )
  }
  if(props.backgroundimage){
    var button_style= {
      "height": "80px",
      "width": "150px",
      "min-width": "150px",
      "background-size":"contain",
      "padding":"0px"
    }
    style["height"] = "90%"
    style["margin-top"] = "inherit"
    return (
      <button className={`button margin-top-5 bkg-gry`} onClick={props.onClick} style={button_style}><img src={props.backgroundimage} style={style}/></button>
    )
  }
  else{
    return (
      <button className={`button margin-top-5 bkg-gry`} onClick={props.onClick} style={style}>{props.text}</button>
    )
  }

  
  
}
export default AddElementButton



