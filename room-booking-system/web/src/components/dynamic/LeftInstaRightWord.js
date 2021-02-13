import React from 'react'
import ReactModal from 'react-modal'
import InstagramEmbed from 'react-instagram-embed';


function getElementByShortCode(t_shortcode){
    var result = null
    var fileds = document.getElementsByClassName("instagram-media")
    Array.prototype.forEach.call(fileds, function(el) {
        if(el.src){
            var shortcode = el.src.substring(28, 39)
            //var eid = el.id
            if(shortcode == t_shortcode){
                // console.log(typeof el,el)
                result = el
            }
        }
        
    });
    return(result)
}

function create_fake_image_from_insta(shortcode,thumbnail_url,only_pic){

    //
    var field = getElementByShortCode(shortcode)
    // console.log("create_fake_image_from_insta:filed",filed)
    if(field){
        field.style.display = 'inline'
        //var img_container = document.createElement('div'); 
        var img = document.createElement('img'); 
        img.src = thumbnail_url 
        img.style.width = "100% !important"
        // console.log("create_fake_image_from_insta:only_pic",only_pic)
        if(only_pic){
            field.parentElement.parentElement.appendChild(img);
            field.parentElement.hidden = true;
        }
        return true
        
    }else{
        return false
    }
}

function test_times_to_create_fake_image_from_insta(shortcode,thumbnail_url,only_pic){
    var timeleft = 30;
    var result = false;
    var downloadTimer = setInterval(function(){
        if(timeleft <= 0 || result){
            clearInterval(downloadTimer);
        }else{
            result = create_fake_image_from_insta(shortcode,thumbnail_url,only_pic)
            timeleft -= 1;
        }
    }, 333);
}

function gen_insta_format(shortcode,only_pic) {
  // console.log("only_pic",only_pic)
  let insta_url= 'https://instagr.am/p/'+shortcode+'/'
  return (
      <InstagramEmbed
        url= {insta_url}
        clientAccessToken='207630901011100|c74039121871ad7b19cbb68e132e4bc6'
        hideCaption={true}
        containerTagName='div'
        width="100%"
        protocol=''
        injectScript
        onLoading={() => {}}
        onSuccess={(Response) => {
            //console.log("Response",Response)
            var thumbnail_url = Response.thumbnail_url
            //var thumbnail_width = Response.thumbnail_width
            //var thumbnail_height = Response.thumbnail_height
            //var max_height = 0.55*Response.thumbnail_height*(Response.thumbnail_width/Response.thumbnail_height)
            //var fileds = document.getElementsByClassName("instagram-media")
            
            test_times_to_create_fake_image_from_insta(shortcode,thumbnail_url,only_pic)
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