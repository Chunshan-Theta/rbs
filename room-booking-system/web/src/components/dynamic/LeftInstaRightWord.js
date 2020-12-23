import React from 'react'
import ReactModal from 'react-modal'
import InstagramEmbed from 'react-instagram-embed';


function gen_insta_format(shortcode) {
  let insta_url= 'https://instagr.am/p/'+shortcode+'/'
  return (
      <InstagramEmbed
        url= {insta_url}
        clientAccessToken='207630901011100|c74039121871ad7b19cbb68e132e4bc6'
        hideCaption={false}
        containerTagName='div'
        protocol=''
        injectScript
        onLoading={() => {}}
        onSuccess={() => {}}
        onAfterRender={() => {}}
        onFailure={() => {}}
    />
  );
}

//CJCg5D6B6em

const LeftInstaRightWord = (props) => {
  
  let instablock = gen_insta_format(props.insta.shortcode)

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
                        <div >{instablock}</div>
                    </li>
                </ul>
            </section>
            <section class="w50">
                <ul>
                    <li>
                        <p>{props.content.text}</p>
                    </li>
                </ul>
            </section>
        </div>
    </section>
  )
}
export default LeftInstaRightWord

