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

Event = ({ event }) => (
    <span>
      <strong>{event.title}</strong>
      <p>{event.desc}</p>
    </span>
  )
let DashBoard = () => (
  <Calendar
    events={events}
    views={allViews}
    components={{
      event: Event,
    }}
    localizer={localizer}
  />
)

export default DashBoard
