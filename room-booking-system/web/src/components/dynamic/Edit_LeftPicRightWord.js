import React from 'react'
import ReactModal from 'react-modal'
import Button from '../Button'
import { gen_agrs_LeftPicRightWord } from '../../helpers/page_element'

const Edit_LeftPicRightWord = (props) => {
  console.log("props",props)
  return (
    <section class="container Edit-block-border-gry">
            <p>工具欄</p>
            <Button className="button btn-lr" text={'刪除上方欄位'} onClick={() => props.onDeleteBlock(props.index,props.pageId)}/>
            <form onSubmit={event => {
                //
                event.preventDefault()
                const formData = event.target.elements

                //
                // TODO: if capacity is not int, refuse.
                // TODO: show success message.
                let title = formData.title.value;
                let sub_titile = formData.sub_titile.value;
                let image = {text:formData.image_text.value, url:formData.image_url.value};
                let content = {text:formData.content_text.value};
                const block = gen_agrs_LeftPicRightWord(title,sub_titile,image,content)
                const index = props.index
                const pageId = props.pageId
                props.onUpdateBlock(index,pageId, block)
              }}>
                <label>
                    標題:
                    <input type="text" name="title" defaultValue={props.title}/>
                </label>
                <label>
                    副標題:
                    <input type="text" name="sub_titile" defaultValue={props.sub_titile}/>
                </label><br/>
                <label>
                    說明1:
                    <input type="text" name="image_text" defaultValue={props.image.text}/>
                    圖片連結1:
                    <input type="text" name="image_url" defaultValue={props.image.url}/>
                </label><br/>
                <label>
                    說明2:
                    <input type="text" name="content_text" defaultValue={props.content.text}/>
                </label><br/>
                <Button className="button" text={'Submit'} />
            </form>

    </section>
  )
}
export default Edit_LeftPicRightWord
