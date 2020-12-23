import React from 'react'
import ReactModal from 'react-modal'
import Button from '../Button'
import { gen_agrs_LeftInstaRightWord } from '../../helpers/page_element'

const Edit_LeftInstaRightWord = (props) => {
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
                let insta = {shortcode:formData.insta_shortcode.value};
                let content = {text:formData.content_text.value};
                const block = gen_agrs_LeftInstaRightWord(title,sub_titile,insta,content)
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
                    shortcode1:
                    <input type="text" name="insta_shortcode" defaultValue={props.insta.shortcode}/>
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
export default Edit_LeftInstaRightWord
