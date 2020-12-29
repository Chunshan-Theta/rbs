import React from 'react'
import ReactModal from 'react-modal'
import Button from '../Button'
import { gen_agrs_CenterBanner } from '../../helpers/page_element'

const Edit_CenterBanner= (props) => {
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
                const block = gen_agrs_CenterBanner(title,sub_titile)
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
                
                <Button className="button" text={'保存紀錄'} />
            </form>

    </section>
  )
}

export default Edit_CenterBanner
