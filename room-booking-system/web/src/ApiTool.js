import React, { Component, Fragment } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'
import './css/style.css'
//
import './css/sass/styles.css'
import './css/sass/event.css'
import './css/sass/month.css'
import './css/sass/reset.css'
import './css/sass/time-column.css'
import './css/sass/time-grid.css'
import './css/sass/toolbar.css'
import './css/sass/variables.css'
import DocumentMeta from 'react-document-meta';
import moment from 'moment'

import BookingForm from './components/BookingForm'
import Button from './components/Button'
import FilterElement from './components/FilterElement'
import Footer from './components/Footer'
import Key from './components/Key'
import MyBookings from './components/MyBookings'
import NavBar from './components/NavBar'
import RoomsList from './components/RoomsList'
import SignInForm from './components/SignInForm'
import SignUpForm from './components/SignUpForm'
import DashBoard from './components/ViewCalendar'
import EmailBlock from './components/EmailBlock'
import PicPage from './components/PicPage'
import OnePageHead from './components/OnePageHeader'
import meta from './components/head'

import {
  signIn,
  signOut,
  signUp
} from './api/auth'
import { listRooms } from './api/rooms'
import { listRoomsOfficial } from './api/rooms_official'
import { getDecodedToken } from './api/token'
import { makeBooking, deleteBooking, updateStateRoom } from './api/booking'
import Calendar from './components/Calendar'
import BookingModal from './components/BookingModal'
import { floorParams, filterParams, capacityParams, onFilterByFloor, onFilterByFeature, onFilterByCapacity, onFilterByAvailablity } from './helpers/filters'
import { initialRoom } from './helpers/rooms'

class ApiTool extends Component {
  state = {
    var1: null
  }

  //
  render() {
    const {
      var1
    } = this.state

    const Loading = require('react-loading-animation')


    return (
      <Router>
        <div id="api-tool" className="api-tool">
          <Fragment>
              <Switch>
                <Route path="/api/tool" exact render={() => (
                            <div className="loading_animation">
                                <p>/api/tool</p>
                            </div>
                        )} />
                
            </Switch>
          </Fragment>
        </div>
      </Router>
    )
  }



}

export default ApiTool
