import React from 'react'
import Button from './Button'
import moment from 'moment'
import { formatTime, startTimeSelectOptions, endTimeSelectOptions } from '../helpers/bookingForm'

function FilterElement({
  onSetFloorParam,
  onToggleFeature,
  onToggleCapacity,
  onSetAvailabilityParam,
  floorParam,
  filterParams,
  capacityParams,
  availabilityParam,
  date
}) {

  return (
    <div className="sidebar__box--filter filter">
      <h3 className="header__heading header__heading--sidebar">Filter</h3>
      <form className="form form--filter">
        <h4 className="form__heading form__heading--filter">Level</h4>
        <div className="form__group" onChange={(event) => onSetFloorParam(event.target.value)}>
          <div className="form_group">
            <input type="radio" value="1" name="floor-select" className="form__input--radio" checked={floorParam === '1' ? true : false}/>
            <label for="floor1" className="form__label form__label--inline">1樓</label>
          </div>
          <div className="form_group">
            <input type="radio" value="B1" name="floor-select" className="form__input--radio" checked={floorParam === 'B1' ? true : false}/>
            <label for="floorB1" className="form__label form__label--inline">B1</label>
          </div>
          <div className="form_group">
            <input type="radio" value="all" name="floor-select" className="form__input--radio" checked={floorParam === 'all' ? true : false}/>
            <label for="all" className="form__label form__label--inline">All Levels</label>
          </div>
        </div>

        <h4 className="form__heading form__heading--filter">Features</h4>
        <div onChange={(event) => onToggleFeature(event.target.name)} >

          <div className="form_group">
            <input type="checkbox" id="asset_tool_0" name="asset_tool_0" className="form__input--checkbox" checked={filterParams[3].value} />
            <label for="asset_tool_0" className="form__label form__label--inline">投影機</label>
          </div>

        </div>
        <h4 className="form__heading form__heading--filter">Capacity</h4>
        <div onChange={ (event) => onToggleCapacity(event.target.id)}>
          <div className="form_group">
            <input type="checkbox" id="6seats" name="18seats" className="form__input--checkbox" checked={capacityParams[5].value} />
            <label for="6seats" className="form__label form__label--inline">6 Seats</label>
          </div>

          <div className="form_group">
            <input type="checkbox" id="10seats" name="16seats" className="form__input--checkbox" checked={capacityParams[6].value} />
            <label for="10seats" className="form__label form__label--inline">10 Seats</label>
          </div>

          <div className="form_group">
            <input type="checkbox" id="30seats" name="20seats" className="form__input--checkbox" checked={capacityParams[7].value} />
            <label for="30seats" className="form__label form__label--inline">30 Seats</label>
          </div>

        </div>
        <h4 className="form__heading form__heading--filter">Availability</h4>
          <div onChange={(event) => onSetAvailabilityParam(event.target.value)} >
            <div className="form_group">
              <input type="radio" id="fullyAvailable" value="fullyAvail" name="availability" className="form__input--radio" checked={availabilityParam === 'fullyAvail' ? true : false} />
              <label for="fullyAvailable" className="form__label form__label--inline">Fully Available</label>
            </div>
            <div className="form_group">
              <input type="radio" id="partialAvailable" value="partAvail" name="availability" className="form__input--radio" checked={availabilityParam === 'partAvail' ? true : false} />
              <label for="partialAvailable" className="form__label form__label--inline">Partially Available</label>
            </div>
            <div className="form_group">
              <input type="radio" id="fullyBooked" value="fullBooked" name="availability" className="form__input--radio" checked={availabilityParam === 'fullBooked' ? true : false} />
              <label for="fullyBooked" className="form__label form__label--inline">Fully Booked</label>
            </div>
          </div>
      </form>
    </div>
  )
}

export default FilterElement