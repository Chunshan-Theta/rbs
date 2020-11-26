import React from 'react'
import ReactModal from 'react-modal'

const PicPage = (props) => {

  return (
    <section id="menu" class="container bkc-gray">
        <header class="major-lf">
            <h1>{props.title}</h1>
            <p>{props.sub_titile}</p>
        </header>

        <div class="row">

            <section class="w33">
                <ul>
                    <li>
                        <div class="image_box center"><img src={props.col1.url} alt=""/></div>
                    </li>
                    <li>
                        <p>{props.col1.text}</p>
                    </li>
                </ul>
            </section>
            <section class="w33">
                <ul>
                    <li>
                        <div class="image_box center"><img src={props.col2.url} alt=""/></div>
                    </li>
                    <li>
                        <p>{props.col2.text}</p>
                    </li>
                </ul>
            </section>
            <section class="w33">
                <ul>
                    <li>
                        <div class="image_box center"><img src={props.col3.url} alt=""/></div>
                    </li>
                    <li>
                        <p>{props.col3.text}</p>
                    </li>
                </ul>

            </section>
        </div>
    </section>
  )
}
export default PicPage
