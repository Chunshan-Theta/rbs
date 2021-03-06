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
function BookingForm({ onMakeBooking, user, roomData, date, updateCalendar, onShowBooking, disableRecurring, onToggleRecurring,handleEditorChange, editorState}) {
  // Disable sunday (day 0) on the calendar as an booking option
  const valid = function(current) {

    //return current.day() !== 0
    return 1
  }

  const handleEndDate = (dateArray) => {
    let recurringEndDate = []
    dateArray.forEach(item => {
      recurringEndDate.push(parseInt(item))
    })
    return recurringEndDate
  }

  // Format the recurring data into an array
  const handleRecurringData = (type, date) => {
    let recurringData = []
    if (type !== "none") {
      recurringData = [ date, type]
      recurringData[0][1] = recurringData[0][1] - 1
    } else {
        recurringData = []
    }
    return recurringData
  }

  // Array used for handleData function
  let dateArray = []

  // Update the current date in the application state
  const handleDate = event => {
    updateCalendar(moment(event)._i)
  }


  //



  return (
    <Fragment>
      <div className="header__page">
        <h2 className="header__heading header__heading--sub">Level {roomData.floor} | {roomData.name}</h2>
      </div>
      <form className="form__grid form--booking" onSubmit={event => {
          event.preventDefault()
          // Extract date array from current date in state
          const dateArray = moment(date)
            .format('Y M D')
            .split(' ')
            .map(item => parseInt(item, 10))
            dateArray[1] = dateArray[1] - 1
            // Data from input
            const formData = event.target.elements
            const roomId = roomData._id
            // startDate data
            const startTime = formatTime(formData.startTime.value)
            const startDate = [...dateArray, ...startTime]
            // endDate data
            const endTime = formatTime(formData.endTime.value)
            const endDate = [...dateArray, ...endTime]
            // Booking specifics
            const businessUnit = formData.business.value
            let recurringEnd = handleEndDate(formData.recurringEndDate.value.split('-'))
            const recurringType = formData.recurring.value
            let recurringData = handleRecurringData(recurringType, recurringEnd)

            //
            const purpose = formData.purpose.value

            //
            const description = editorState.toHTML()
            console.log({ startDate, endDate, businessUnit, purpose, roomId, recurringData, description })
          onMakeBooking({ startDate, endDate, businessUnit, purpose, roomId, recurringData, description })
        }}>
        <div className="content__calendar">
          <Datetime
            dateFormat="YYYY-MM-DD"
            timeFormat={false}
            input={false}
            utc={true}
            isValidDate={valid}
            onChange={event => handleDate(event._d)}
        />
        </div>
        <div className="content__table">
          <BookingFormTable roomData={roomData} date={date} onShowBooking={onShowBooking} />
        </div>
        <div className="content__form">
          <h3 className="header__heading header__heading--column">Make a Booking</h3>
          <div className="form__group form__group--margin-top">
            <div className="form__group">
            <label className="form__label form__label--booking">
              {'主題'}
              <textarea type="textarea" name="purpose" className="form__input--textarea"></textarea>
            </label>
          </div>
            <label className="form__label form__label--booking">
              {'開始時間'}
              <select name="startTime" className="form__input form__input--select">
                {startTimeSelectOptions.map(option => {
                  return option
                })}
              </select>
            </label>
          </div>
          <div className="form__group">
            <label className="form__label form__label--booking">
              {'結束時間'}
              <select name="endTime" className="form__input form__input--select">
                {endTimeSelectOptions.map(option => {
                  return option
                })}
              </select>
            </label>
          </div>
          <div className="form__group">
            <label className="form__label form__label--booking">
              {'類型'}
              <select name="business" defaultValue="定期活動" className="form__input form__input--select">
                <option value="定期活動">定期活動</option>
                <option value="期間限定活動">期間限定</option>
                <option value="私人活動">私人活動</option>
                <option value="其他類活動">其他類活動</option>
                {/* <option value="新進遊客預定">新進遊客預定</option> */}
              </select>
            </label>
          </div>
          <div className="form__group">
            <label className="form__label form__label--booking">
              {'重複性'}
              <span>
                <select name="recurring" defaultValue="none" onChange={(event) => onToggleRecurring(event.target.value)} className="form__input form__input--select">
                  <option value="none">Non recurring</option>
                  <option value="daily">Daily</option>
                  <option value="weekly">Weekly</option>
                  <option value="monthly">Monthly</option>
                </select>
              </span>
            </label>
          </div>
          <label className="form__label form__label--booking">
            {'重複結束日期'}
            <input type="date" name="recurringEndDate" disabled={disableRecurring} className="form__input--date"/>
          </label>

          <div className="form__group">
            <label className="form__label form__label--booking">
              {'Description'}
            </label>
            <div className="my-component">
                <BraftEditor
                  value={editorState}
                  onChange={handleEditorChange}
                  controls={[
                               'link','text-color', 'bold', 'italic', 'underline', 'strike-through', 'emoji','separator',
                               'text-indent', 'text-align', 'separator',
                               'headings', 'list-ul', 'list-ol', 'blockquote', 'code'
                           ]}
                />
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

export default BookingForm
