import React from 'react'
import ReactModal from 'react-modal'
import Button from '../Button'
import { gen_agrs_PicPage } from '../../helpers/page_element'

const Edit_PicPage = (props) => {
  console.log("props",props)
  return (
    <section class="container">
            <form onSubmit={event => {
                //
                event.preventDefault()
                const formData = event.target.elements

                //
                // TODO: if capacity is not int, refuse.
                // TODO: show success message.
                let title = formData.title.value;
                let sub_titile = formData.sub_titile.value;
                let col1 = {text:formData.col1_text.value, url:formData.col1_url.value};
                let col2 = {text:formData.col2_text.value, url:formData.col2_url.value};
                let col3 = {text:formData.col3_text.value, url:formData.col3_url.value};
                const block = gen_agrs_PicPage(title,sub_titile,col1,col2,col3)
                const index = props.index
                const pageId = props.pageId
                //onMakeRoom({name,floor,capacity,owner})
                props.onUpdateBlock(index,pageId, block)
              }}>
                <label>
                    標題:
                    <input type="text" name="title" placeholder={props.title}/>
                </label>
                <label>
                    副標題:
                    <input type="text" name="sub_titile" placeholder={props.sub_titile}/>
                </label><br/>
                <label>
                    說明1:
                    <input type="text" name="col1_text" placeholder={props.col1.text}/>
                    圖片連結1:
                    <input type="text" name="col1_url" placeholder={props.col1.url}/>
                </label><br/>
                <label>
                    說明2:
                    <input type="text" name="col2_text" placeholder={props.col2.text}/>
                    圖片連結2:
                    <input type="text" name="col2_url" placeholder={props.col2.url}/>
                </label><br/>
                <label>
                    說明3:
                    <input type="text" name="col3_text" placeholder={props.col3.text}/>
                    圖片連結3:
                    <input type="text" name="col3_url" placeholder={props.col3.url}/>
                </label><br/>
                <Button className="button" text={'Submit'} />
            </form>

    </section>
  )
}
export default Edit_PicPage
