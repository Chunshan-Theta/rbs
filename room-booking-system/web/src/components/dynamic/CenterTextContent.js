import React from 'react'
import ReactModal from 'react-modal'


const CenterTextContent = (props) => {
  console.log("props",props)
  return (
    <section class="container">

            <div class="p20">
                <div class="textLeft"  dangerouslySetInnerHTML={{ __html: props.title }} />
            </div>

    </section>
  )
}

export default CenterTextContent
