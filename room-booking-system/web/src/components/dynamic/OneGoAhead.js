import React from 'react'
import ReactModal from 'react-modal'


const OneGoAhead = (props) => {
  console.log("props",props)
  return (
    <section class="container">

            <div class="p20">
                <p class="center" id="header-title">{props.title}</p>
                <p class="center" >{props.sub_titile}</p>
            </div>
            <div class="row">
                <section class="w50 center" >
                    <a href={props.btn1.url} style={{"width":"100%"}} className="button ">{props.btn1.text}</a>
                </section>
            </div>

    </section>
  )
}

export default OneGoAhead
