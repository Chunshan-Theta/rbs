import React from 'react'
import ReactModal from 'react-modal'
import Button from '../Button'
import { gen_agrs_OnePageHead } from '../../helpers/page_element'

const Edit_OnePageHead = (props) => {
  console.log("props",props)
  return (
    <section class="container">
            <Button className="button btn-lr" text={'刪除此欄位'} onClick={() => props.onDeleteBlock(props.index,props.pageId)}/>
            <form onSubmit={event => {
                //
                event.preventDefault()
                const formData = event.target.elements

                //
                // TODO: if capacity is not int, refuse.
                // TODO: show success message.
                let title = formData.title.value;
                let sub_titile = formData.sub_titile.value;
                let btn1 = {text:formData.btn1_text.value, url:formData.btn1_url.value};
                let btn2 = {text:formData.btn2_text.value, url:formData.btn2_url.value};
                let btn3 = {text:formData.btn3_text.value, url:formData.btn3_url.value};
                let btn4 = {text:formData.btn4_text.value, url:formData.btn4_url.value};
                const block = gen_agrs_OnePageHead(title,sub_titile,btn1,btn2,btn3,btn4)
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
                    按鍵1:
                    <input type="text" name="btn1_text" defaultValue={props.btn1.text}/>
                    連結1:
                    <input type="text" name="btn1_url" defaultValue={props.btn1.url}/>
                </label><br/>
                <label>
                    按鍵2:
                    <input type="text" name="btn2_text" defaultValue={props.btn2.text}/>
                    連結2:
                    <input type="text" name="btn2_url" defaultValue={props.btn2.url}/>
                </label><br/>
                <label>
                    按鍵3:
                    <input type="text" name="btn3_text" defaultValue={props.btn3.text}/>
                    連結3:
                    <input type="text" name="btn3_url" defaultValue={props.btn3.url}/>
                </label><br/>
                <label>
                    按鍵4:
                    <input type="text" name="btn4_text" defaultValue={props.btn4.text}/>
                    連結4:
                    <input type="text" name="btn4_url" defaultValue={props.btn4.url}/>
                </label><br/>
                <Button className="button" text={'Submit'} />
            </form>

    </section>
  )
}

export default Edit_OnePageHead
