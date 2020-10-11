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
  roomData,
  eventDetail,
  updatedEventDetail
}){
    var events_d = []
    var id = 0
    roomData.forEach(room=>{
        var room_name = room.name
        room.bookings.forEach(event=>{
                var event_start = new Date(event.bookingStart)
                var event_end = new Date(event.bookingStart)
                event_end.setMinutes(event_end.getMinutes() + event.duration*60)
                var start_time_label = event_start.getHours().toString()+":"+event_start.getMinutes().toString()
                var end_time_label = event_end.getHours().toString()+":"+event_end.getMinutes().toString()
                var title = event.description? event.description : event.businessUnit
            events_d.push({
                id: id,
                title: event.purpose,
                allDay: false,
                desc: room_name+","+event.businessUnit,
                detailEvent: event.description,
                start: event_start,
                end: event_end,
                start_time_label: start_time_label,
                end_time_label: end_time_label,
              })
            id+=1
        })
    })
    return (
    <div>
        <div id="Calendar">
          <Calendar
            events={events_d}
            views={allViews}
            onSelectEvent={event =>
                {
                        updatedEventDetail(
                            [
                                ["活動主題： ",[event.title]],
                                ["活動內容： ",event.detailEvent.split("\n")],
                                ["活動開始時間： ",[event.start_time_label]],
                                ["活動結束時間： ",[event.end_time_label]]
                            ]
                        )
                        window.scrollTo({
                            top: 1000000,
                            behavior: "smooth"
                        });



                }
            }
            components={{
              event: EventParse,
            }}
            localizer={localizer}
          />
        </div>
        <div id="event_content">
        {
            eventDetail.map(row => {
                    var re_obj = (
                        <div>
                        <h1 id="eventDetailTitle">{row[0]}</h1>
                        <div>{row[1].map(content => (<p id="eventDetailContent">{content}</p>))}</div>
                        </div>
                    )
                    return(re_obj)
                }
            )
        }
        </div>


    </div>

  )
}



export default DashBoard
