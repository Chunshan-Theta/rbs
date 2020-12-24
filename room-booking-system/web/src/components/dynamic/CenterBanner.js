import React from 'react'
import ReactModal from 'react-modal'


const CenterBanner = (props) => {
  console.log("props",props)
  return (
    <section class="container">

            <div class="p20">
                <p class="center" id="header-title">{props.title}</p>
                <p class="center" >{props.sub_titile}</p>
            </div>

    </section>
  )
}

export default CenterBanner
