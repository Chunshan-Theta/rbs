import React from 'react'
import ReactModal from 'react-modal'


const OnePageHead = (props) => {
  console.log("props",props)
  return (
    <section class="container">

            <div class="p20">
                <p class="center" id="header-title">{props.title}</p>
                <p class="center" >{props.sub_titile}</p>
            </div>
            <div class="row">
                <section class="w25 center">
                    <a href={props.btn1.url} className="button ">{props.btn1.text}</a>
                </section>
                <section class="w25 center">
                    <a href={props.btn2.url} className="button ">{props.btn2.text}</a>
                </section>
                <section class="w25 center">
                    <a href={props.btn3.url} className="button ">{props.btn3.text}</a>
                </section>
                <section class="w25 center">
                    <a href={props.btn4.url} className="button ">{props.btn4.text}</a>
                </section>
            </div>

    </section>
  )
}

export default OnePageHead
