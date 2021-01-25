import React from 'react'
import {gen_insta_format} from "./LeftInstaRightWord"
import Button from '../Button'


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

const BriefJourney = (props,like_func,saved_journey) => {

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
                        <Button className="button btn-lr" text={'查看'} onClick={() => window.location.href = "../j/"+props.tag}/>
                    </li>
                    <li>
                        <Button className="button btn-lr" text={saved_journey?"已喜歡":"喜歡"} style={saved_journey?{background: "#cccccc",border: "0.1rem solid #eeeeee"}:{}} onClick={() => like_func(props.tag)}/>
                    </li>
                </ul>
            </section>
        </div>
    </section>
  )
}

export default BriefJourney
