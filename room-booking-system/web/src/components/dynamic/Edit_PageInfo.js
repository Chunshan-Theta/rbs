import React from 'react'
import ReactModal from 'react-modal'
import Button from '../Button'
import { gen_agrs_PageInfo } from '../../helpers/page_element'

const Edit_PageInfo = (props) => {
  if (props.focus!=props.index){
    return(<dev><Button className="button btn-lr" text={'更新頁面資訊標籤'} onClick={() => {
      props.onUpdateFocus(props.index)
    }}/></dev>)
  }
  return (
    <section class="container Edit-block-border-gry">
            <p>頁面資訊</p>
            <form onSubmit={event => {
                //
                event.preventDefault()
                const formData = event.target.elements

                //
                // TODO: if capacity is not int, refuse.
                // TODO: show success message.
                let title = formData.title.value;
                let description = formData.description.value;
                let keyword = formData.keyword.value;
                const block = gen_agrs_PageInfo(title,description,keyword)
                const index = props.index
                const pageId = props.pageId
                props.onUpdateBlock(index,pageId, block)
              }}>
                <label>
                    標題:
                    <input type="text" name="title" defaultValue={props.title}/>
                </label><br/>
                <label>
                    簡介:
                    <input type="text" name="description" defaultValue={props.description}/>
                </label><br/>
                <label>
                    關鍵字:（用 `,` 相隔關鍵字）
                    <input type="text" name="keyword" defaultValue={props.keyword}/>
                </label><br/>
                
                <Button className="button" text={'保存紀錄'} />
            </form>

    </section>
  )
}

export default Edit_PageInfo
