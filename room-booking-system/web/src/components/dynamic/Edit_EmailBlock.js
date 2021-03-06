import React from 'react'
import ReactModal from 'react-modal'
import Button from '../Button'
import { gen_agrs_EmailBlock } from '../../helpers/page_element'

const Edit_EmailBlock = (props) => {
  if (props.focus!=props.index){
    return(<dev><Button className="button btn-lr" text={'編輯上方欄位'} onClick={() => props.onUpdateFocus(props.index)}/></dev>)
  }
  return (
    <section class="container Edit-block-border-gry">
            <p>工具欄</p>
            <Button className="button btn-lr" text={'刪除上方欄位'} onClick={() => props.onDeleteBlock(props.index,props.pageId)}/>
            <Button className="button btn-lr" text={'下移'} onClick={() => props.onMoveDownBlock(props.index,props.pageId)}/>
            <Button className="button btn-lr" text={'上移'} onClick={() => props.onMoveUpBlock(props.index,props.pageId)}/>
            <form onSubmit={event => {
                //
                event.preventDefault()
                const formData = event.target.elements

                //
                // TODO: if capacity is not int, refuse.
                // TODO: show success message.
                let title = formData.title.value;
                let sub_titile = formData.sub_titile.value;
                let ml1 = {mail:formData.ml1_mail.value, text:formData.ml1_text.value, subject:formData.ml1_subject.value, body:formData.ml1_body.value};
                let ml2 = {mail:formData.ml2_mail.value, text:formData.ml2_text.value, subject:formData.ml2_subject.value, body:formData.ml2_body.value};
                let ml3 = {mail:formData.ml3_mail.value, text:formData.ml3_text.value, subject:formData.ml3_subject.value, body:formData.ml3_body.value};

                const block = gen_agrs_EmailBlock(title,sub_titile,ml1,ml2,ml3)
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
                    信箱1:
                    <input type="text" name="ml1_mail" defaultValue={props.ml1.mail}/>
                    說明文字1:
                    <input type="text" name="ml1_text" defaultValue={props.ml1.text}/>
                    信件內容範本1:
                    <input type="text" name="ml1_body" defaultValue={props.ml1.body}/>
                    信件主旨1:
                    <input type="text" name="ml1_subject" defaultValue={props.ml1.subject}/>
                </label><br/>
                <label>
                    信箱2:
                    <input type="text" name="ml2_mail" defaultValue={props.ml2.mail}/>
                    說明文字2:
                    <input type="text" name="ml2_text" defaultValue={props.ml2.text}/>
                    信件內容範本2:
                    <input type="text" name="ml2_body" defaultValue={props.ml2.body}/>
                    信件主旨2:
                    <input type="text" name="ml2_subject" defaultValue={props.ml2.subject}/>
                </label><br/>
                <label>
                    信箱3:
                    <input type="text" name="ml3_mail" defaultValue={props.ml3.mail}/>
                    說明文字3:
                    <input type="text" name="ml3_text" defaultValue={props.ml3.text}/>
                    信件內容範本3:
                    <input type="text" name="ml3_body" defaultValue={props.ml3.body}/>
                    信件主旨3:
                    <input type="text" name="ml3_subject" defaultValue={props.ml3.subject}/>
                </label><br/>
                <Button className="button" text={'保存紀錄'} />
            </form>
            
            

    </section>
  )
}
export default Edit_EmailBlock
