import React from 'react'
import ReactModal from 'react-modal'


const OneGoAhead = (props) => {
  console.log("props",props)
  let buttons = [props.btn1]
  let buttons_html = []
  buttons.forEach(btn=>{
    if(btn.text && btn.text!=""){
        buttons_html.push(
            <section class="w50 center">
                <a href={btn.url} style={{"width":"100%"}} className="button "  >{btn.text}</a>
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

export default OneGoAhead
