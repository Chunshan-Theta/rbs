import React from 'react'
import { Calendar, Views,momentLocalizer } from 'react-big-calendar'
import events from '../../helpers/example_events'
import * as dates from '../../helpers/dates'
import moment from 'moment'

function Edit_DashBoard(data){
    console.log("Edit_DashBoard data:",data)
    return (<p>這個欄位會顯示已開設的活動</p>)
}



export default Edit_DashBoard
