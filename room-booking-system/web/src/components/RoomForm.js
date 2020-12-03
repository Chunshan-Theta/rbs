import React, {Fragment} from 'react'
import BookingFormTable from './BookingFormTable'
import Datetime from 'react-datetime'
import moment from 'moment'
import {Link} from 'react-router-dom'
import Button from './Button'
import { formatTime, startTimeSelectOptions, endTimeSelectOptions } from '../helpers/bookingForm'


//
import BraftEditor from 'braft-editor'
import 'braft-editor/dist/index.css'


//
function RoomForm({ onMakeRoom, user}) {
  



  return (
    <Fragment>
      <div className="header__page">
        <h2 className="header__heading header__heading--sub">設立新空間 | {user}</h2>
      </div>
      <form className="" onSubmit={event => {
                //
                const formData = event.target.elements

                //
                // TODO: if capacity is not int, refuse.
                // TODO: show success message.
                const name = formData.name.value
                const floor = formData.floor.value
                const capacity = formData.capacity.value
                const owner = user
                console.log({name,floor,capacity,owner})
                onMakeRoom({name,floor,capacity,owner})
              }}>
        <div className="">
          <h3 className="header__heading header__heading--column">Make a Booking</h3>
          <div className="form__group form__group--margin-top">


            <div className="form__group">
              <label className="form__label form__label--booking">
                      {'名稱'}     
                <textarea type="textarea" name="name" className="form__input--textarea"></textarea>
              </label>
            </div>

            <div className="form__group">
              <label className="form__label form__label--booking">
                      {'樓層/分組'}     
                <textarea type="textarea" name="floor" className="form__input--textarea"></textarea>
              </label>
            </div>

            <div className="form__group">
              <label className="form__label form__label--booking">
                      {'容納人數'}     
                <textarea type="textarea" name="capacity" className="form__input--textarea"></textarea>
              </label>
            </div>


          </div>
          <div className="form__group--button">
            <Button className="button button__form--booking" text={'Submit'} />
            <Link to="/bookings" className="button button--alternative button__form--booking" >View availability</Link>
          </div>
        </div>
      </form>
    </Fragment>
  )
}
//              <textarea type="textarea" name="description" className="form__input--textarea"></textarea>

export default RoomForm
