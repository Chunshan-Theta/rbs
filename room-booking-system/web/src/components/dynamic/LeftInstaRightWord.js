import React from 'react'
import ReactModal from 'react-modal'


//

const LeftInstaRightWord = (props) => {
  
  let instablock = gen_insta_format()

  return (
    <section class="container">
        <header class="major-lf">
            <h1>props.title</h1>
            <p>props.sub_titile</p>
        </header>

        <div class="row">

            <section class="w50">
                <ul>
                    <li>
                        <div >{instablock}</div>
                    </li>
                    <li>
                        <p>props.image.text</p>
                    </li>
                </ul>
            </section>
            <section class="w50">
                <ul>
                    <li>
                        <p>props.content.text</p>
                    </li>
                </ul>
            </section>
        </div>
    </section>
  )
}
export default LeftInstaRightWord


function gen_insta_format(){
    let shortcode = "CJCg5D6B6em"
    let shortcode_url = "https://www.instagram.com/p/"+shortcode+"/?utm_source=ig_embed"
    return [
            <blockquote class="instagram-media" data-instgrm-permalink={shortcode_url} data-instgrm-version="13" style=" background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:540px; min-width:326px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);">
                <div style="padding:16px;">
                    <a href={shortcode_url} style=" background:#FFFFFF; line-height:0; padding:0 0; text-align:center; text-decoration:none; width:100%;" target="_blank">
                        <div style=" display: flex; flex-direction: row; align-items: center;">
                            <div style="background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 40px; margin-right: 14px; width: 40px;"></div>
                            <div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center;">
                                <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 100px;"></div>
                                <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 60px;"></div>
                            </div>
                        </div>
                        <div style="padding-top: 8px;">
                            <div style=" color:#3897f0; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:550; line-height:18px;"> 在 Instagram 查看这篇帖子</div>
                        </div>
                        <div style="padding: 12.5% 0;"></div>
                        <div style="display: flex; flex-direction: row; margin-bottom: 14px; align-items: center;">
                            <div>
                                <div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(0px) translateY(7px);"></div>
                                <div style="background-color: #F4F4F4; height: 12.5px; transform: rotate(-45deg) translateX(3px) translateY(1px); width: 12.5px; flex-grow: 0; margin-right: 14px; margin-left: 2px;"></div>
                                <div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(9px) translateY(-18px);"></div>
                            </div>
                            <div style="margin-left: 8px;">
                                <div style=" background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 20px; width: 20px;"></div>
                                <div style=" width: 0; height: 0; border-top: 2px solid transparent; border-left: 6px solid #f4f4f4; border-bottom: 2px solid transparent; transform: translateX(16px) translateY(-4px) rotate(30deg)"></div>
                            </div>
                            <div style="margin-left: auto;">
                                <div style=" width: 0px; border-top: 8px solid #F4F4F4; border-right: 8px solid transparent; transform: translateY(16px);"></div>
                                <div style=" background-color: #F4F4F4; flex-grow: 0; height: 12px; width: 16px; transform: translateY(-4px);"></div>
                                <div style=" width: 0; height: 0; border-top: 8px solid #F4F4F4; border-left: 8px solid transparent; transform: translateY(-4px) translateX(8px);"></div>
                            </div>
                        </div>
                        <div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center; margin-bottom: 24px;">
                            <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 224px;"></div>
                            <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 144px;"></div>
                        </div>
                    </a>
                </div>
            </blockquote>
            ,<script async src="//www.instagram.com/embed.js"></script>
    ]
}


