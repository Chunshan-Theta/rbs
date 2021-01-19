import React from 'react'
import {gen_insta_format} from "./LeftInstaRightWord"

function img_switch (key) {
  console.log("key",key)
  if(!key){
    return(<p>沒有提供圖片</p>)
  }
  else if(key.startsWith("http")){
    return(<img src={key} alt=""/>)
  }
  else if(key.length==11){
    return(<p>{gen_insta_format(key,true)}</p>)
  }else{
    return(<p>沒有提供圖片</p>)
  }
}

const BriefJourney = (props) => {
  console.log("props",props)
  // return (
  //   <section class="container">

  //           <div class="p20">
  //               <p class="center">{props.title}</p>
  //               <p class="center" >image: {props.image}</p>
  //               <p class="center" >shortcode: {props.shortcode}</p>
  //           </div>

  //   </section>
  // )
  return (
    <section class="container">
        <div class="row w75 center">

            <section class="w33">
                <ul>
                    <li>
                        {img_switch(props.image || props.shortcode)}
                    </li>
                </ul>
            </section>
            <section class="w33 textLeft">
                <ul>
                    <li>
                        <p class="">{props.title}</p>
                    </li>
                </ul>
            </section>
            <section class="w33 ">
                <ul>
                    <li>
                        <a href={"../j/"+props.tag} style={{"width":"100%"}} className="button "  >查看</a>
                    </li>
                </ul>
            </section>
        </div>
    </section>
  )
}

export default BriefJourney
