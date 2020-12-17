import React from 'react'
import { Calendar, Views,momentLocalizer } from 'react-big-calendar'
import events from '../../helpers/example_events'
import * as dates from '../../helpers/dates'
import moment from 'moment'
import Button from '../Button'

function Edit_DashBoard(props){
    console.log("Edit_DashBoard props:",props)
    return (
    <section class="container Edit-block-border-gry">
        <p>工具欄</p>
        <Button className="button btn-lr" text={'刪除上方欄位'} onClick={() => props.onDeleteBlock(props.index,props.pageId)}/>
        <p>這個欄位會顯示已開設的活動</p>
    </section>)
}



export default Edit_DashBoard
