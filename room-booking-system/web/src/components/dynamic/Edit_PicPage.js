import React from 'react'
import ReactModal from 'react-modal'
import Button from '../Button'
import { gen_agrs_PicPage } from '../../helpers/page_element'

const Edit_PicPage = (props) => {
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
                    <input type="text" name="title" defaultValue={props.title}/>
                </label>
                <label>
                    副標題:
                    <input type="text" name="sub_titile" defaultValue={props.sub_titile}/>
                </label><br/>
                <label>
                    說明1:
                    <input type="text" name="col1_text" defaultValue={props.col1.text}/>
                    圖片連結1:
                    <input type="text" name="col1_url" defaultValue={props.col1.url}/>
                </label><br/>
                <label>
                    說明2:
                    <input type="text" name="col2_text" defaultValue={props.col2.text}/>
                    圖片連結2:
                    <input type="text" name="col2_url" defaultValue={props.col2.url}/>
                </label><br/>
                <label>
                    說明3:
                    <input type="text" name="col3_text" defaultValue={props.col3.text}/>
                    圖片連結3:
                    <input type="text" name="col3_url" defaultValue={props.col3.url}/>
                </label><br/>
                <Button className="button" text={'Submit'} />
            </form>

    </section>
  )
}
export default Edit_PicPage
