import React from 'react'
import ReactModal from 'react-modal'


const OnePageHead = (props) => {
  console.log("props",props)
  let buttons = [props.btn1,props.btn2,props.btn3,props.btn4]
  let buttons_html = []
  buttons.forEach(btn=>{
    if(btn.text && btn.text!=""){
        buttons_html.push(
            <section class="w25 center">
                <a href={btn.url} className="button " >{btn.text}</a>
            </section>
        )
    }
    
  })

  return (
    <section class="container">

            <div class="p20">
                <p class="center" id="header-title">{props.title}</p>
                <p class="center" >{props.sub_titile}</p>
            </div>
            <div class="row">
                {buttons_html}
            </div>

    </section>
  )
}

export default OnePageHead
