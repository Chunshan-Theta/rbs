import React from 'react'
import ReactModal from 'react-modal'
import InstagramEmbed from 'react-instagram-embed';


function gen_insta_format(shortcode,only_pic) {
  let insta_url= 'https://instagr.am/p/'+shortcode+'/'
  return (
      <InstagramEmbed
        url= {insta_url}
        clientAccessToken='207630901011100|c74039121871ad7b19cbb68e132e4bc6'
        hideCaption={true}
        containerTagName='div'
        width="600"
        protocol=''
        injectScript
        onLoading={() => {}}
        onSuccess={(Response) => {
            //console.log("Response",Response)
            var thumbnail_url = Response.thumbnail_url
            //var thumbnail_width = Response.thumbnail_width
            //var thumbnail_height = Response.thumbnail_height
            //var max_height = 0.55*Response.thumbnail_height*(Response.thumbnail_width/Response.thumbnail_height)
            var fileds = document.getElementsByClassName("instagram-media")
            var filed_id = "instagram-embed-"+fileds.length
            var timeoutID = window.setInterval(function(){
                var filed = document.getElementById(filed_id)
                //var cssText = "max-height:"+max_height+"px;overflow:scroll;"
                if(filed){
                    //console.log("filed_id In",filed_id)
                    window.clearTimeout(timeoutID);
                    
                    //console.log("filed",filed.parentElement)
                    //https://www.instagram.com/beagle0247/?utm_source=ig_embed
                    var img_container = document.createElement('div'); 
                    var img = document.createElement('img'); 
                    img.src = thumbnail_url 
                    img.style.width = "100% !important"
                    if(only_pic){
                      filed.parentElement.parentElement.appendChild(img); 
                      filed.parentElement.hidden = true;
                    }
                    
                }else{
                    //console.log("filed_id Out",filed_id)
                }
            },500)
        }}
        onAfterRender={() => {}}
        onFailure={() => {}}
    />
  );
}

//CJCg5D6B6em

const LeftInstaRightWord = (props) => {
  
  let instablock = gen_insta_format(props.insta.shortcode,false)

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
                        <div class="instablock">{instablock}</div>
                    </li>
                </ul>
            </section>
            <section class="w50 ">
                <ul  class="w100" >
                    <li>
                        <div class="textLeft p005"  dangerouslySetInnerHTML={{ __html: props.content.text }} />
                    </li>
                </ul>
            </section>
        </div>
    </section>
  )
}


const LeftInstaRightWordOnlyPic = (props) => {
  
    let instablock = gen_insta_format(props.insta.shortcode,true)
  
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
                          <div class="instablock">{instablock}</div>
                      </li>
                  </ul>
              </section>
              <section class="w50 ">
                  <ul>
                      <li>
                          <div class="textLeft p005"  dangerouslySetInnerHTML={{ __html: props.content.text }} />
                      </li>
                  </ul>
              </section>
          </div>
      </section>
    )
  }


export { LeftInstaRightWord,LeftInstaRightWordOnlyPic,gen_insta_format }


