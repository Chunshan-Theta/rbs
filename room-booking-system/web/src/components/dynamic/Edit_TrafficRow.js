import React from 'react'
import ReactModal from 'react-modal'
import Button from '../Button'
import { gen_agrs_TrafficRow } from '../../helpers/page_element'

const Edit_TrafficRow = (props) => {
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
                let spot1 = {text:formData.spot1_text.value};
                let spot2 = {text:formData.spot2_text.value};
                let traffic_info = {text:formData.traffic_info_text.value,traffic:formData.traffic_info_traffic.value};
                const block = gen_agrs_TrafficRow(spot1,spot2,traffic_info)
                const index = props.index
                const pageId = props.pageId
                //onMakeRoom({name,floor,capacity,owner})
                props.onUpdateBlock(index,pageId, block)
              }}>
                <label>
                    說明（啟程）:
                    <input type="text" name="spot1_text" defaultValue={props.spot1.text}/>
                </label><br/>
                <label>
                    交通選項:
                    <select name="traffic_info_traffic" defaultValue={props.traffic_info.traffic}>
                      <option value="bus">bus</option>
                      <option value="walk">walk</option>
                      <option value="plane">plane</option>
                      <option value="bike">bike</option>
                      <option value="train">train</option>
                      <option value="car">car</option>
                    </select>
                    說明:
                    <input type="text" name="traffic_info_text" defaultValue={props.traffic_info.text}/>
                </label><br/>
                <label>
                    說明（終點）:
                    <input type="text" name="spot2_text" defaultValue={props.spot2.text}/>
                </label><br/>
                
                <Button className="button" text={'保存紀錄'} />
            </form>

    </section>
  )
}
export default Edit_TrafficRow
