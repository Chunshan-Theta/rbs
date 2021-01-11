import React from 'react'
import ReactModal from 'react-modal'


const CenterTextContent = (props) => {
  console.log("props",props)
  return (
    <section class="container">

            <div class="">
                <div class="textLeft p005"  dangerouslySetInnerHTML={{ __html: props.title }} />
            </div>

    </section>
  )
}

export default CenterTextContent
