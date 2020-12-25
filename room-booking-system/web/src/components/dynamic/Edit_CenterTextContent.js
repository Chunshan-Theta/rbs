import React from 'react'
import ReactModal from 'react-modal'
import Button from '../Button'
import { gen_agrs_CenterTextContent } from '../../helpers/page_element'
import BraftEditor from 'braft-editor'


const Edit_CenterTextContent= (props) => {
  if (props.focus!=props.index){
    return(<dev><Button className="button btn-lr" text={'編輯上方欄位'} onClick={() => {
      props.onUpdateFocus(props.index)
      props.handleEditorChange(BraftEditor.createEditorState(props.title))
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
                let title = props.editorState.toHTML();
                const block = gen_agrs_CenterTextContent(title)
                const index = props.index
                const pageId = props.pageId
                //onMakeRoom({name,floor,capacity,owner})
                props.onUpdateBlock(index,pageId, block)
              }}>
                <div className="form__group">
                      <label className="form__label form__label--booking">
                        {'內容:'}
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

export default Edit_CenterTextContent
