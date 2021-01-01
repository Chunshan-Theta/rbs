import React from 'react'
import { Calendar, Views,momentLocalizer } from 'react-big-calendar'
import events from '../../helpers/example_events'
import * as dates from '../../helpers/dates'
import moment from 'moment'
import Button from '../Button'

function Edit_DashBoard(props){
    if (props.focus!=props.index){
        return(<dev><Button className="button btn-lr" text={'編輯上方欄位'} onClick={() => props.onUpdateFocus(props.index)}/></dev>)
    }
    return (
    <section class="container Edit-block-border-gry">
        <p>工具欄</p>
        <Button className="button btn-lr" text={'刪除上方欄位'} onClick={() => props.onDeleteBlock(props.index,props.pageId)}/>
        <Button className="button btn-lr" text={'下移'} onClick={() => props.onMoveDownBlock(props.index,props.pageId)}/>
        <Button className="button btn-lr" text={'上移'} onClick={() => props.onMoveUpBlock(props.index,props.pageId)}/>
        <p>這個欄位會顯示已開設的活動</p>
    </section>)
}



export default Edit_DashBoard
