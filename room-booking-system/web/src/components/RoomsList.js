import React from 'react'
import RoomRow from './RoomRow'
import { roomSorter } from '../helpers/sorter'


function unit_leader(label_text){
  return(
  <tr className="table__row table__row--header">
    <th scope="colgroup" colSpan="17" className="table__cell--header table__cell--level table__cell--align-left">
        {label_text}
    </th>
  </tr>
  )
}
function timestamp(){
  return (
    
    <tr className="table__row table__row--subheader">
      <th scope="col" className="table__cell--header table__cell--align-left">
        Room
      </th>
      <th scope="col" className="table__cell--header">
        8am
      </th>
      <th scope="col" className="table__cell--header">
        9am
      </th>
      <th scope="col" className="table__cell--header">
        10am
      </th>
      <th scope="col" className="table__cell--header">
        11am
      </th>
      <th scope="col" className="table__cell--header">
        12pm
      </th>
      <th scope="col" className="table__cell--header">
        1pm
      </th>
      <th scope="col" className="table__cell--header">
        2pm
      </th>
      <th scope="col" className="table__cell--header">
        3pm
      </th>
      <th scope="col" className="table__cell--header">
        4pm
      </th>
      <th scope="col" className="table__cell--header">
        5pm
      </th>
      <th scope="col" className="table__cell--header">
        6pm
      </th>
      <th scope="col" className="table__cell--header">
        7pm
      </th>
      <th scope="col" className="table__cell--header">
        8pm
      </th>
      <th scope="col" className="table__cell--header">
        9pm
      </th>
      <th scope="col" className="table__cell--header">
        10pm
      </th>
      <th scope="col" className="table__cell--header">
        11pm
      </th>
    </tr>
  )
}

const RoomsList = props => {
  let units = [];
  var floors = new Set();
  props.rooms.forEach(element => {floors.add(element.floor)});
  console.log(floors);
  floors.forEach(floor => {
    units.push(
      <tbody className="table__body">
        {unit_leader(floor)}
        {timestamp()}
        {props.rooms &&
          roomSorter(props.rooms, floor).map(room => (
            <RoomRow
              key={room._id}
              room={room}
              bookings={room.bookings}
              date={props.date === null ? new Date() : props.date}
              onShowBooking={props.onShowBooking}
              onSetRoom={props.onSetRoom}
            />
          ))
        }
      </tbody>
    );
  });
  return(<table className="table">{units}</table>)
}

export default RoomsList
