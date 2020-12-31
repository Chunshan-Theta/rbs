import React from 'react'
import ReactModal from 'react-modal'
import Button from '../Button'
import { gen_agrs_OneGoAhead } from '../../helpers/page_element'

const Edit_OneGoAhead = (props) => {
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
                let btn1 = {text:formData.btn1_text.value, url:formData.btn1_url.value};
                const block = gen_agrs_OneGoAhead(title,sub_titile,btn1)
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
                <Button className="button" text={'保存紀錄'} />
            </form>

    </section>
  )
}

export default Edit_OneGoAhead
