import React from 'react'
import { Calendar, Views,momentLocalizer } from 'react-big-calendar'
import events from '../helpers/example_events'
import * as dates from '../helpers/dates'
import moment from 'moment'

const localizer = momentLocalizer(moment) // or globalizeLocalizer

let allViews = Object.keys(Views).map(k => Views[k])

const ColoredDateCellWrapper = ({ children }) =>
  React.cloneElement(React.Children.only(children), {
    style: {
      backgroundColor: 'lightblue',
    },
  })

var EventParse = ({ event }) => (
    <span>
      <strong>{event.title}</strong>
      <p>{event.desc}</p>
    </span>
  )

function EventList(events){
    var res = null
    events.forEach(e=>{

    res+=(
        <span>
          <p>{e.name}</p>
          <p>{e.booking}</p>
        </span>
    )})
    return res
}

function DashBoard({
  roomData
}){
    var events_d = []
    var id = 0
    roomData.forEach(room=>{
        var room_name = room.name
        room.bookings.forEach(event=>{
                var event_start = new Date(event.bookingStart)
                var event_end = new Date(event.bookingStart)
                event_end.setMinutes(event_end.getMinutes() + event.duration*60)
            events_d.push({
                id: id,
                title: event.description?event.description: event.businessUnit,
                allDay: false,
                desc: room_name+","+event.businessUnit,
                start: event_start,
                end: event_end,
              })
            id+=1
        })
    })
    return (
    <div>
      <Calendar
        events={events_d}
        views={allViews}
        components={{
          event: EventParse,
        }}
        localizer={localizer}
      />
    </div>

  )
}



export default DashBoard
