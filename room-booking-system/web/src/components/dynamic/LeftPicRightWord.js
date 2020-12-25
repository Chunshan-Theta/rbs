import React from 'react'
import ReactModal from 'react-modal'

const LeftPicRightWord = (props) => {

  return (
    <section class="container">
        <header class="major-lf">
            <h1>{props.title}</h1>
            <p>{props.sub_titile}</p>
        </header>

        <div class="row">

            <section class="w50">
                <ul>
                    <li>
                        <div class="image_box center"><img src={props.image.url} alt=""/></div>
                    </li>
                    <li>
                        <p>{props.image.text}</p>
                    </li>
                </ul>
            </section>
            <section class="w50">
                <ul>
                    <li>
                        <div dangerouslySetInnerHTML={{ __html: props.content.text }} />
                        {/* <p>{props.content.text}</p> */}
                    </li>
                </ul>
            </section>
        </div>
    </section>
  )
}
export default LeftPicRightWord


//const LeftPicRightWord = {
//"component_type":"LeftPicRightWord",
//	"title": "關於 商店",
//	"sub_titile": "關於 商店說明之副標題",
//	"image":{
//		"text": "標語1",
//		"url": "https://images.unsplash.com/photo-1608195156025-dfbae92b6943?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
//	},
//	"content":{
//		"text": "標語2",
//	}
//}