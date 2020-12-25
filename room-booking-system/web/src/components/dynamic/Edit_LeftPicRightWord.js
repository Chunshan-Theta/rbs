import React from 'react'
import ReactModal from 'react-modal'
import Button from '../Button'
import { gen_agrs_LeftPicRightWord } from '../../helpers/page_element'
import BraftEditor from 'braft-editor'

const Edit_LeftPicRightWord = (props) => {
  if (props.focus!=props.index){
    return(<dev><Button className="button btn-lr" text={'編輯上方欄位'} onClick={() => {
      props.onUpdateFocus(props.index)
      props.handleEditorChange(BraftEditor.createEditorState(props.content.text))
    }}/></dev>)
  }
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
                let content = {text:props.editorState.toHTML()};
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
                <div className="form__group">
                      <label className="form__label form__label--booking">
                        {'說明2:'}
                      </label>
                      <div className="my-component" style={{"color":"none"}}>
                          <BraftEditor
                            value={props.editorState}
                            onChange={props.handleEditorChange}
                            controls={[
                                        'link','text-color', 'bold', 'italic', 'underline', 'strike-through', 'emoji','separator',
                                        'text-indent', 'text-align', 'separator',
                                        'headings', 'list-ul', 'list-ol', 'blockquote', 'code'
                                    ]}
                          />
                        </div>
                </div>
                <Button className="button" text={'保存紀錄'} />
            </form>

    </section>
  )
}
export default Edit_LeftPicRightWord
