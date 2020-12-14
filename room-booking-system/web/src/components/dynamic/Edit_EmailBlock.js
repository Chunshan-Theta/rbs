import React from 'react'
import ReactModal from 'react-modal'
import Button from '../Button'
import { gen_agrs_EmailBlock } from '../../helpers/page_element'

const Edit_EmailBlock = (props) => {
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
                    <input type="text" name="title" placeholder={props.title}/>
                </label>
                <label>
                    副標題:
                    <input type="text" name="sub_titile" placeholder={props.sub_titile}/>
                </label><br/>
                <label>
                    信箱1:
                    <input type="text" name="ml1_mail" placeholder={props.ml1.mail}/>
                    說明文字1:
                    <input type="text" name="ml1_text" placeholder={props.ml1.text}/>
                    信件內容範本1:
                    <input type="text" name="ml1_body" placeholder={props.ml1.body}/>
                    信件主旨1:
                    <input type="text" name="ml1_subject" placeholder={props.ml1.subject}/>
                </label><br/>
                <label>
                    信箱2:
                    <input type="text" name="ml1_mail" placeholder={props.ml2.mail}/>
                    說明文字2:
                    <input type="text" name="ml1_text" placeholder={props.ml2.text}/>
                    信件內容範本2:
                    <input type="text" name="ml1_body" placeholder={props.ml2.body}/>
                    信件主旨2:
                    <input type="text" name="ml1_subject" placeholder={props.ml2.subject}/>
                </label><br/>
                <label>
                    信箱3:
                    <input type="text" name="ml1_mail" placeholder={props.ml3.mail}/>
                    說明文字3:
                    <input type="text" name="ml1_text" placeholder={props.ml3.text}/>
                    信件內容範本3:
                    <input type="text" name="ml1_body" placeholder={props.ml3.body}/>
                    信件主旨3:
                    <input type="text" name="ml1_subject" placeholder={props.ml3.subject}/>
                </label><br/>
                <Button className="button" text={'Submit'} />
            </form>

    </section>
  )
}
export default Edit_EmailBlock
